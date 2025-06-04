import React, { useEffect, useRef, useState } from 'react';

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);
  const networkConfig = {
    layers: [5, 7, 7, 5], // Number of nodes in each layer (input, hidden1, hidden2, output)
    nodeRadius: 4,
    activeNodeRadius: 6,
    activationDistance: 120, // How close the mouse needs to be to activate input nodes
    nodeColor: 'rgba(168, 178, 209, 0.3)', // light-slate with opacity
    activeNodeColor: '#64ffda', // green
    inputLayerActiveColor: '#64ffda', // green for emphasis
    connectionColor: 'rgba(136, 146, 176, 0.15)', // slate with opacity
    activeConnectionColor: 'rgba(100, 255, 218, 0.4)', // green-tint with more opacity
    connectionWidth: 0.5,
    activeConnectionWidth: 1,
  };

  const initializeNetwork = (width, height) => {
    const newNodes = [];
    const { layers } = networkConfig;
    const layerSpacing = width / (layers.length + 1);

    layers.forEach((nodeCount, layerIndex) => {
      const nodeSpacing = height / (nodeCount + 1);
      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          id: `l${layerIndex}-n${i}`,
          x: layerSpacing * (layerIndex + 1),
          y: nodeSpacing * (i + 1),
          layer: layerIndex,
          activated: false,
          activationStrength: 0, // 0 to 1
        });
      }
    });

    const newConnections = [];
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayerNodes = newNodes.filter(node => node.layer === i);
      const nextLayerNodes = newNodes.filter(node => node.layer === i + 1);
      
      currentLayerNodes.forEach(fromNode => {
        nextLayerNodes.forEach(toNode => {
          newConnections.push({
            from: fromNode.id,
            to: toNode.id,
            weight: Math.random() * 0.5 + 0.1, // Keep weights positive and small for visual effect
            active: false,
          });
        });
      });
    }
    nodesRef.current = newNodes;
    connectionsRef.current = newConnections;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeNetwork(canvas.width, canvas.height);
    };

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial setup

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      let currentNodes = [...nodesRef.current]; // Work with a mutable copy for this frame
      let currentConnections = [...connectionsRef.current];

      // Update node activation based on mouse proximity and propagate
      currentNodes = currentNodes.map(node => {
        if (node.layer === 0) { // Input layer
          const dist = Math.sqrt((node.x - mousePos.x) ** 2 + (node.y - mousePos.y) ** 2);
          const targetActivation = dist < networkConfig.activationDistance ? 1 : 0;
          // Smooth transition for activationStrength
          node.activationStrength += (targetActivation - node.activationStrength) * 0.2;
          node.activated = node.activationStrength > 0.1;
        } else {
          // For other layers, reset activationStrength, it will be set by propagation
          node.activationStrength *= 0.85; // Gradual fade out
          node.activated = node.activationStrength > 0.1;
        }
        return node;
      });
      
      // Propagate activation
      for (let l = 0; l < networkConfig.layers.length -1; l++) {
        const nodesInCurrentLayer = currentNodes.filter(n => n.layer === l && n.activated);
        nodesInCurrentLayer.forEach(activeNode => {
          currentConnections.filter(c => c.from === activeNode.id).forEach(conn => {
            const targetNode = currentNodes.find(n => n.id === conn.to);
            if (targetNode) {
              // Add source activation strength to target, cap at 1
              targetNode.activationStrength = Math.min(1, targetNode.activationStrength + activeNode.activationStrength * conn.weight * 0.5);
              targetNode.activated = targetNode.activationStrength > 0.1;
            }
          });
        });
      }
      
      // Update connection activity
      currentConnections = currentConnections.map(conn => {
        const fromNode = currentNodes.find(n => n.id === conn.from);
        const toNode = currentNodes.find(n => n.id === conn.to);
        conn.active = fromNode && toNode && fromNode.activated && toNode.activated && (fromNode.activationStrength + toNode.activationStrength)/2 > 0.2;
        return conn;
      });

      // Draw connections
      currentConnections.forEach(conn => {
        const fromNode = currentNodes.find(n => n.id === conn.from);
        const toNode = currentNodes.find(n => n.id === conn.to);
        if (!fromNode || !toNode) return;

        context.beginPath();
        context.moveTo(fromNode.x, fromNode.y);
        context.lineTo(toNode.x, toNode.y);
        const strength = (fromNode.activationStrength + toNode.activationStrength) / 2;
        context.strokeStyle = conn.active 
          ? `rgba(100, 255, 218, ${Math.min(0.6, strength * 0.5 + 0.1)})` // activeConnectionColor with dynamic opacity
          : networkConfig.connectionColor;
        context.lineWidth = conn.active 
          ? networkConfig.activeConnectionWidth * strength + networkConfig.connectionWidth
          : networkConfig.connectionWidth;
        context.stroke();
      });

      // Draw nodes
      currentNodes.forEach(node => {
        context.beginPath();
        const radius = networkConfig.nodeRadius + (networkConfig.activeNodeRadius - networkConfig.nodeRadius) * node.activationStrength;
        context.arc(node.x, node.y, radius, 0, 2 * Math.PI);
        
        let color = networkConfig.nodeColor;
        if (node.activated) {
            color = node.layer === 0 ? networkConfig.inputLayerActiveColor : networkConfig.activeNodeColor;
        }
        // Dynamic opacity for active nodes
        if (node.activated) {
            const alpha = Math.min(1, node.activationStrength * 0.7 + 0.3);
            const hexColor = node.layer === 0 ? networkConfig.inputLayerActiveColor : networkConfig.activeNodeColor;
            // Convert hex to rgba with dynamic alpha
            const r = parseInt(hexColor.slice(1, 3), 16);
            const g = parseInt(hexColor.slice(3, 5), 16);
            const b = parseInt(hexColor.slice(5, 7), 16);
            color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }

        context.fillStyle = color;
        context.fill();
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, networkConfig]); // Rerun effect if mousePos changes, or if nodes/connections structure changes (e.g. on resize)

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10" // Use Tailwind for positioning and z-index
    />
  );
};

export default NeuralNetworkBackground;
