'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Kortext',
      period: 'Nov 2022 – present',
      location: 'Remote, UK',
      description: 'Worked on the library portal where librarians and admins can manage their university\'s library.',
      achievements: [
        'Monorepo architecture using Nx & Angular 17+',
        'Elf & NgRx Signal State',
        'Internationalization',
        'RTL Support',
        'Gradually migrate Vue 2 App to Angular using module federation'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'WinnowPro',
      period: 'Aug 2021 – Nov 2022',
      location: 'Remote, US',
      description: 'Worked on a project that provides the ability to manage all the digital marketing operations of a company in a single dashboard.',
      achievements: [
        'Monorepo architecture using Nx & Angular 12+',
        'NgRx State Management',
        'Third-party integrations e.g. Facebook, Google Ads, Google My Business'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Altay Software Defence Inc',
      period: 'Feb 2019 – Aug 2021',
      location: 'Ankara, Turkey',
      description: 'Worked on a governmental project that aims to open and perform the vital activities of businesses.',
      achievements: [
        'Monorepo Architecture using Nx & Angular 7+',
        'Workflow management that uses bpmn-js with custom elements and properties',
        'Custom form builder & renderer library which has more than 10 different form item components and provides the ability to apply validations, server-side answer source, visibility and filtering dependencies'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="section-heading">Work Experience</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]"></div>
                <div className="absolute top-0 left-0 w-0 h-full bg-[var(--primary)] opacity-10 group-hover:w-full transition-all duration-500"></div>
                
                <div className="flex flex-wrap justify-between items-start mb-4 relative">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-4">
                      <FaBriefcase className="text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <h4 className="text-lg text-[var(--primary)]">{exp.company}</h4>
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="flex items-center justify-end mb-1">
                      <FaCalendarAlt className="text-[var(--text-secondary)] mr-2" />
                      <span className="text-sm text-[var(--text-secondary)]">{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-end">
                      <FaMapMarkerAlt className="text-[var(--text-secondary)] mr-2" />
                      <span className="text-sm text-[var(--text-secondary)]">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-[var(--text-secondary)] mb-4 relative">{exp.description}</p>
                
                <ul className="space-y-2 relative">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[var(--primary)] mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom useInView hook
function useInView(ref, options) {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      
      if (entry.isIntersecting && options.once) {
        observer.unobserve(ref.current);
      }
    }, options);
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  
  return isInView;
}

export default Experience;
