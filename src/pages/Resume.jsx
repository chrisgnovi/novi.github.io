import React, { useState } from 'react';
import { motion } from 'framer-motion';
// add imports for existing project assets
import medicalVisualizationImage from '../assets/medical-visualization.png';
import identiflightImage from '../assets/identiflight.jpg';
import zeptroImage from '../assets/zeptro.jpeg';
import costcoImage from '../assets/costco.jpeg'

const Resume = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const jobs = [
    {
      company: 'Costco Wholesale',
      industry: 'Retail & Cybersecurity',
      title: 'AI/Machine Learning Data Science 3',
      period: 'September 2023 - Present',
      logo: costcoImage,  // no image available
      companyDescription: 'Costco Wholesale is a global membership retail chain known for bulk-goods at low prices. They leverage AI/ML to optimize supply chains, enhance member experiences, provided greater strengthened/compliance cybersecurity.',
      responsibilities: [
        'I was brought on to be a technical lead for an ambitious Machine Learning Project (~15 Engineers/Architects)',
      ],
      accomplishments: [
        'Provided leadership and mentoring to more junior team members.',
        'Built a User Behavior Analytics (UBA) platform from analyzing insider threats.'
      ],
      technologies: ['Unsupervised ML', 'UBA', 'Databricks', 'Pyspark', 'Scikit-learn', 'PyOD', 'Google ADK', 'Azure', 'GCP', 'DBT', 'React', 'Docker', 'Terraform']
    },
    {
      company: 'QBio',
      industry: 'Bio-Tech',
      title: 'Machine Learning Software Engineer',
      period: 'June 2022 - August 2023',
      logo: medicalVisualizationImage,
      companyDescription: 'QBio is an audacious Series-C (~$100 million) startup backed by Andreessen Horowitz trying to disrupt the field of preventive medicine by the process of Digital Twins. They are building a platform that combines medical imaging, genomics, and other health data to create a comprehensive digital profile of individuals.',
      responsibilities: [
        'I worked on the Image-Segmentation team, resposible for taking raw MRI images and segmenting them into different organs, tissues, preforming quantitative measurements and outputing them to the QBio Gemini Dashboard.',
        'My focus was on the high performance micro service AWS Batch compute Airflow data processing pipeline.' 
      ],
      accomplishments: [
        'Made a key contribution in releasing Gemini Exam, 1 of 2 engineers that designed and built the enitre AWS data pipeline for QBio`s core medical imaging product (~100 customers/month) ',
      ],
      technologies: ['MONAI', 'Pydicom', 'SimpleITK', 'VTK', 'Pytorch', 'Pytorch Lightning', 'Scikit-learn', 'Apache Airflow', 'Docker', 'AWS', 'AWS SDK']
    },
    {
      company: 'Boulder Imaging Inc',
      industry: 'Machine Vision',
      title: 'Machine Learning Software Engineer',
      period: 'September 2019 - June 2022',
      logo: identiflightImage,
      companyDescription: 'Boulder Imaging is an industry leader in Machine Vision Technology. As a company, we tackled the most challenging problems. The product IdentiFlight Aerial Detection System used A.I. to save endangered birds at wind farms, a key factor in the sustainability of renewable energy. The system scans the entire sky and identifies all endangered birds in the proximity of wind turbines and shuts down turbines according to bird flight paths.',
      responsibilities: [
        'I lead machine learning developer for the Identiflight systems. This involved the entire machine learning pipeline from data validation, preprocessing, model training, validation to the final model deployment and future architecture R&D.'
      ],
      accomplishments: [
        'Deployed trained and deplolyed CNN machine learning solutions all over the world (Tazmania, Sweden, Idaho, Wyoming, etc)',
        'Built a Convolutional Neural Networks (CNN) model hardware acceleration optimizer for the identiflight system using Intel OpenVino',
        'Built CNN model for high performance currency object character recognition',
        'Building a big data web dashboard for the Identiflight Aerial Detection System for observability, analytics and ML data labeling'
      ],
      technologies: ['C++', 'Boost', 'OpenCV', 'Python', 'Deep Learning', 'CNN','TensorFlow', 'Keras', 'Flask']
    },
    {
      company: 'Zepto Life Technologies',
      industry: 'Bio-Tech',
      title: 'Embedded Software Developer',
      period: 'January 2018 - September 2019',
      logo: zeptroImage,
      companyDescription: 'Zepto Life Technologies develops handheld diagnostic devices that use giant magnetoresistance sensors for rapid, point-of-care disease detection. We developed handheld devices capable of early cancer, PCR and heart attack detection. Our system used a Nobel Prize-winning physical phenomenon called (giant magnetoresistance) (GMR). The GMR sensor detects nanoparticles attached to different antibodies/DNA. This allowed us to miniaturize assay technology into a handheld device, which was previously not possible. Early cancer detection is an issue I care about very deeply. I moved back to Minnesota after my Dad was diagnosed with cancer. I personally know the pain and heartache it causes families. For that reason, I am very proud of my time at Zepto!',
      responsibilities: [
        'I was part of a team of 3-4 Software Developers that worked alongside a crew of scientists designing and developing the system from scratch. That entailed the firmware for a microcontroller that powers the GMR sensor and pneumatics for the assay. Then we built on top of that with a communication layer onto a SOC (single board computer) powered by Yocto Linux. Finally, we built a Qt C++ Gui for the user interface and database for electronic medical records.',
      ],
      accomplishments: [
        'Built a Qt C++ GUI application for an embedded medical device',
        'Automation of the pneumatic system and Giant Magnetic Resistance (GMR) sensors.',
        'Built a C# Xamarin cross-platform application for visualizing and analyzing GMR results',
        'Build infrastructure. Built our own Yocto Linux image for an embedded system. This was achieved through Bash scripting, cross-compiling and constructing our own layers to the build. The images were built on Google Cloud Virtual Machine Instances.'
      ],
      technologies: ['C++', 'Qt', 'C#', 'Xamarin', '.Net', 'C', 'Yocto Linux', 'Embedded Systems']
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-heading numbered-heading text-xl md:text-2xl mb-16 flex items-center w-full text-lightest-slate after:content-[''] after:block after:relative after:w-full after:h-px after:ml-4 after:bg-lightest-navy"
        data-number="03"
      >
        Where I've Worked
      </motion.h2>

      
        <div className="flex flex-col md:flex-row">
          {/* Tab list */}
          <div className="md:w-32 mb-8 md:mb-0">
            <ul className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
              {jobs.map((job, i) => (
                <li key={i} className="mr-6 md:mr-0 md:mb-4">
                  <button 
                    className={`text-left font-mono text-xs px-4 py-2 border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 hover:text-green hover:bg-light-navy/30 ${
                      activeTab === i 
                        ? 'text-green border-green' 
                        : 'text-slate border-lightest-navy'
                    }`}
                    onClick={() => setActiveTab(i)}
                  >
                    {job.company}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab content */}
          <div className="md:w-2/3 md:pl-8">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeTab === i ? 1 : 0, 
                  y: activeTab === i ? 0 : 20,
                  display: activeTab === i ? 'block' : 'none'
                }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >

              <div className="bg-light-navy p-6 rounded shadow-md">
                {/* New header block: title, period, then large image below */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-green-tint text-green rounded-full mb-3">
                    {job.industry}
                  </span>
                  <h3 className="text-xl text-lightest-slate mb-1">
                    <span className="font-semibold">{job.title}</span>
                    <span className="text-green"> @ {job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-light-slate mb-4">{job.period}</p>
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} photo`}
                      className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-md mb-4"
                    />
                  )}
                </div>

                {/* company bio */}
                <div className="mb-6 p-4 bg-light-navy/30 rounded-md">
                  <p className="text-light-slate text-sm">
                    {job.companyDescription}
                  </p>
                </div>

                <ul className="mt-4">
                <h4 className="mb-2 mt-6 text-sm font-bold font-mono text-lightest-slate uppercase">
                  Role
                </h4>
                  {job.responsibilities.map((item, j) => (
                    <li 
                      key={j} 
                      className="relative pl-7 mb-2.5 before:content-['▹'] before:absolute before:left-0 before:text-green text-slate"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Accomplishments section */}
                <h4 className="mb-2 mt-6 text-sm font-bold font-mono text-lightest-slate uppercase">
                  Accomplishments
                </h4>
                <ul className="mt-4">
                  {job.accomplishments.map((item, j) => (
                    <li 
                      key={j} 
                      className="relative pl-7 mb-2.5 before:content-['▹'] before:absolute before:left-0 before:text-green text-slate"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies header */}
                <h4 className="mb-2 text-sm font-bold font-mono text-lightest-slate uppercase">
                  Technologies
                </h4>
                
                {/* Technologies list in three columns */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 list-disc ml-5 text-xs font-mono text-light-slate mb-8">
                  {job.technologies.map((tech, k) => (
                    <li key={k}>{tech}</li>
                  ))}
                </ul>
            </div>

              </motion.div>
            ))}
          
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 flex justify-center"
      >
        <a 
          href="/novi.github.io/Christopher_Novitsky_Resume.pdf"
          download="Christopher_Novitsky_Resume.pdf"
          className="px-6 py-4 border border-green rounded font-mono text-sm text-green hover:bg-green-tint transition-all duration-300 inline-flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Full Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;