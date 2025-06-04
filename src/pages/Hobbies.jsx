import React from 'react';
import { motion } from 'framer-motion';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Mountaineering",
      description: "Living in the Pacific Northwest, I've climbed multiple volcanoes, constantly pushing my limits in snowy and alpine conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20l9-16 9 16H3z" />
        </svg>
      )
    },
    {
      title: "Ski Touring",
      description: "Ski touring combines my love of winter sports with backcountry exploration in the Cascades.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h1v16H4Zm15 0h1v16h-1Z" />
          <path d="M9 20l6-14" />
          <path d="M9 4l6 14" />
        </svg>
      )
    },
    {
      title: "Mountain Biking",
      description: "Exploring rugged trails by bike is both challenging and exhilarating, letting me experience nature at full speed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="18" r="3" />
          <circle cx="19" cy="18" r="3" />
          <path d="M5 18l4-2 5-8 3 3 2-1" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-heading numbered-heading text-xl md:text-2xl mb-16 flex items-center w-full text-lightest-slate after:content-[''] after:block after:relative after:w-full after:h-px after:ml-4 after:bg-lightest-navy"
        data-number="05"
      >
        When I'm Not Coding
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 text-slate max-w-2xl"
      >
        Beyond my professional work, I'm passionate about several hobbies that keep me balanced and inspired. These activities often inform my technical work in surprising ways, providing fresh perspectives and creative solutions.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="bg-light-navy rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'}}
          >
            <div className="text-green mb-6">
              {hobby.icon}
            </div>
            <h3 className="text-lightest-slate text-xl font-semibold mb-4">{hobby.title}</h3>
            <p className="text-slate">{hobby.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-light-slate italic">
          "Stay hungry, stay foolish" —  Whole Earth Catalog
        </p>
      </motion.div>
    </section>
  );
};

export default Hobbies;