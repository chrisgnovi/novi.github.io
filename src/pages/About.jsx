import React from 'react';
import { motion } from 'framer-motion';

import profileImage from '../assets/profile.jpg'

const About = () => {
  const skills = [
    'Machine Learning', 'Deep Learning', 'Data Science', 'Data Engineering',
    'MLOps', 'Computer Vision', 'Cybersecurity', 'Medical Devices',
    'Embedded Systems', 'Cloud Platforms (AWS, Azure, GCP)', 
    'Big Data (Databricks, Spark)', 'Python', 'C++', 'React'
  ];

  return (
    <section className="py-24 md:py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-heading numbered-heading text-xl md:text-2xl mb-16 flex items-center w-full text-lightest-slate after:content-[''] after:block after:relative after:w-full after:h-px after:ml-4 after:bg-lightest-navy"
        data-number="02"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-3/5"
        >
          <p className="mb-4">
            Hello! I'm a Machine Learning Engineer passionate about building intelligent systems and leveraging data to solve complex challenges. My journey in tech has led me through diverse fields such as bio-tech, machine vision, retail, and cybersecurity, focusing on developing impactful AI-driven solutions.
          </p>
          
          <p className="mb-4">
            With a background spanning AI/Machine Learning, data science, machine vision, medical device development, and cybersecurity, I've had the privilege of contributing to a wide array of projects. These range from architecting deep learning models for medical image analysis and wildlife conservation, to building data platforms for user behavior analytics in cybersecurity, and engineering embedded systems for point-of-care diagnostics.
          </p>
          

          <p className="mb-4">
            When I'm not immersed in code or data, you can often find me exploring the mountains, whether it's mountaineering, ski touring, or mountain biking. These pursuits not only offer a refreshing balance but also inspire a resilient and problem-solving mindset that I bring to my professional work.
          </p>
          
          <p className="mb-8">
            Here are a few technologies and domains I've been working with:
          </p>
          
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 md:grid-cols-3 mb-12">
            {skills.map((skill, i) => (
              <li 
                key={i} 
                className="relative pl-6 font-mono text-xs text-slate before:content-['▹'] before:absolute before:left-0 before:text-green"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-full md:h-full max-w-sm">
            <div className="absolute inset-0 border-2 border-green rounded z-10 hover:translate-x-1 hover:translate-y-1 transition-transform duration-400 group">
              <div className="relative w-full h-full overflow-hidden rounded">
                <div className="absolute inset-0 bg-green opacity-30 group-hover:opacity-0 transition-opacity duration-400"></div>
                <img 
                  src={profileImage}
                  alt="Profile" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-400"
                />
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-green rounded translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;