import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Resume from './pages/Resume';
import Hobbies from './pages/Hobbies';
import Publications from './pages/Publications';
import NeuralNetworkBackground from './components/NeuralNetworkBackground'; // Import the new component

// Logo component
const Logo = () => (
  <div className="logo flex items-center font-mono text-green">
    <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 50,5 95,97.5 H 5 Z" />
    </svg>
  </div>
);

// Social icons
const SocialLinks = () => (
  <div className="fixed bottom-0 left-6 after:content-[''] after:block after:w-px after:h-24 after:mx-auto after:bg-light-slate side-element">
    <ul className="flex flex-col items-center m-0 p-0 list-none">
      <li className="mb-5">
        <a href="https://github.com/chrisgnovi" target="_blank" rel="noreferrer" className="p-2.5 text-light-slate hover:text-green hover:-translate-y-1 inline-block transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </li>
      <li className="mb-5">
        <a href="https://scholar.google.com/citations?user=EygzWskAAAAJ&hl=en" target="_blank" rel="noreferrer" className="p-2.5 text-light-slate hover:text-green hover:-translate-y-1 inline-block transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269z" />
            <path d="M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          </svg>
        </a>
      </li>
      <li className="mb-5">
        <a href="https://www.linkedin.com/in/chrisnovitsky" target="_blank" rel="noreferrer" className="p-2.5 text-light-slate hover:text-green hover:-translate-y-1 inline-block transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </li>
    </ul>
  </div>
);

// Email link
const EmailLink = () => (
  <div className="fixed bottom-0 right-6 after:content-[''] after:block after:w-px after:h-24 after:mx-auto after:bg-light-slate side-element">
    <div className="flex flex-col items-center m-0 p-0">
      <a href="mailto:chrisnovitsky@gmail.com" className="font-mono text-light-slate hover:text-green hover:-translate-y-1 mb-5 px-2.5 py-2.5 tracking-widest transition-all duration-300" style={{ writingMode: 'vertical-rl' }}>
        chrisnovitsky@gmail.com
      </a>
    </div>
  </div>
);

// Scroll to top button
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-light-navy text-green hover:bg-lightest-navy hover:transform hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
          style={{boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Navigation component
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`flex justify-between items-center fixed top-0 z-10 w-full h-24 px-6 md:px-10 transition-all duration-300 ${
      scrolled ? 'bg-navy/90 backdrop-blur shadow-md' : 'bg-transparent'
    }`}>
      <nav className="flex justify-between items-center w-full">
        <div>
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="z-30 flex md:hidden flex-col justify-around w-8 h-7"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`h-0.5 w-full bg-green transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`h-0.5 w-full bg-green transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`h-0.5 w-full bg-green transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ol className="flex items-center p-0 m-0 list-none">
            <li className="mx-5">
              <Link 
                to="/" 
                className={`flex items-center font-mono text-xs ${
                  location.pathname === '/' ? 'text-green' : 'text-light-slate hover:text-green'
                } transition-all duration-300`}
              >
                <span className="mr-1 text-green">01.</span> Home
              </Link>
            </li>
            <li className="mx-5">
              <Link 
                to="/about" 
                className={`flex items-center font-mono text-xs ${
                  location.pathname === '/about' ? 'text-green' : 'text-light-slate hover:text-green'
                } transition-all duration-300`}
              >
                <span className="mr-1 text-green">02.</span> About
              </Link>
            </li>
            <li className="mx-5">
              <Link 
                to="/resume" 
                className={`flex items-center font-mono text-xs ${
                  location.pathname === '/resume' ? 'text-green' : 'text-light-slate hover:text-green'
                } transition-all duration-300`}
              >
                <span className="mr-1 text-green">03.</span> Experience
              </Link>
            </li>
            <li className="mx-5">
              <Link 
                to="/hobbies" 
                className={`flex items-center font-mono text-xs ${
                  location.pathname === '/hobbies' ? 'text-green' : 'text-light-slate hover:text-green'
                } transition-all duration-300`}
              >
                <span className="mr-1 text-green">04.</span> Hobbies
              </Link>
            </li>
            <li className="mx-5">
              <Link 
                to="/publications" 
                className={`flex items-center font-mono text-xs ${
                  location.pathname === '/publications' ? 'text-green' : 'text-light-slate hover:text-green'
                } transition-all duration-300`}
              >
                <span className="mr-1 text-green">05.</span> Publications
              </Link>
            </li>
            <li className="ml-5">
              <a 
                href="/novi.github.io/Christopher_Novitsky_Resume.pdf"
                download="Christopher_Novitsky_Resume.pdf"
                className="px-4 py-2 border border-green rounded font-mono text-xs text-green hover:bg-green-tint transition-all duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ol>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed md:hidden top-0 bottom-0 right-0 z-20 w-3/4 h-screen bg-light-navy flex flex-col justify-center transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{boxShadow: '-10px 0px 30px -15px rgba(2,12,27,0.7)'}}
        >
          <nav className="flex flex-col items-center">
            <ol className="flex flex-col items-center p-0 m-0 list-none">
              <li className="my-2">
                <Link 
                  to="/" 
                  className={`flex flex-col items-center font-mono py-3 ${
                    location.pathname === '/' ? 'text-green' : 'text-light-slate hover:text-green'
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-green">01.</span> Home
                </Link>
              </li>
              <li className="my-2">
                <Link 
                  to="/about" 
                  className={`flex flex-col items-center font-mono py-3 ${
                    location.pathname === '/about' ? 'text-green' : 'text-light-slate hover:text-green'
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-green">02.</span> About
                </Link>
              </li>
              <li className="my-2">
                <Link 
                  to="/resume" 
                  className={`flex flex-col items-center font-mono py-3 ${
                    location.pathname === '/resume' ? 'text-green' : 'text-light-slate hover:text-green'
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-green">03.</span> Experience
                </Link>
              </li>
              <li className="my-2">
                <Link 
                  to="/hobbies" 
                  className={`flex flex-col items-center font-mono py-3 ${
                    location.pathname === '/hobbies' ? 'text-green' : 'text-light-slate hover:text-green'
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-green">04.</span> Hobbies
                </Link>
              </li>
              <li className="my-2">
                <Link 
                  to="/publications" 
                  className={`flex flex-col items-center font-mono py-3 ${
                    location.pathname === '/publications' ? 'text-green' : 'text-light-slate hover:text-green'
                  }`} 
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-green">05.</span> Publications
                </Link>
              </li>
              <li className="mt-4">
                <a 
                  href="/novi.github.io/Christopher_Novitsky_Resume.pdf"
                  download="Christopher_Novitsky_Resume.pdf"
                  className="px-6 py-3 border border-green rounded font-mono text-green hover:bg-green-tint transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
    </header>
  );
};

// Main content wrapper
const ContentWrapper = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="pt-24 px-6 md:px-10 lg:px-24 max-w-screen-xl mx-auto"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

// Homepage component
const Home = () => {
  return (
    <section className="flex flex-col items-start min-h-screen pt-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono text-green mb-5"
      >
        Hi, my name is
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-semibold mb-1"
      >
        Chris Novitsky.
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl md:text-6xl font-semibold text-slate mb-8"
      >
        Rational Optimist & Machine Learning Software Engineer.
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-xl mb-12"
      >
        I'm a Machine Learning Engineer focused on solving the most challenging real-world problems. I specialize in high-performance machine vision, medical devices, medical imaging, user behavior analytics, and cybersecurity.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
      </motion.div>
    </section>
  );
};

function App() {
  // Fade in elements on page load
  useEffect(() => {
    const fadeInElements = async () => {
      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
      await delay(100);
    };
    
    fadeInElements();
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <NeuralNetworkBackground /> {/* Add the NeuralNetworkBackground component here */}
        <Nav />
        <SocialLinks />
        <EmailLink />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </ContentWrapper>
        <footer className="text-center py-6 font-mono text-xs text-light-slate">
          <p></p>
        </footer>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;