'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaMedium, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const publications = [
    {
      title: 'What is new in Angular 14',
      date: '24 May 2022',
      description: 'I described the features of Angular 14.',
      link: 'https://nevzatopcu.medium.com/what-is-new-in-angular-14-d31edf91fd3e'
    },
    {
      title: 'What is new in Angular 14.2',
      date: '13 Oct 2022',
      description: 'I described the features of Angular 14.2',
      link: 'https://medium.com/@nevzatopcu/what-is-new-in-angular-14-2-3d7daa553eee'
    },
    {
      title: 'Angular Child Components with Reactive Forms',
      date: '08 Jun 2021',
      description: 'I described and summarized the benefits of the ControlContainer provider in Reactive Forms.',
      link: 'https://nevzatopcu.medium.com/angular-child-components-with-reactive-forms-fbf4563b304c'
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
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="section-heading">Publications</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]"></div>
                <div className="absolute top-0 left-0 w-0 h-full bg-[var(--primary)] opacity-10 group-hover:w-full transition-all duration-500"></div>
                
                <div className="flex flex-wrap md:flex-nowrap items-start gap-4 relative">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <FaMedium className="text-[var(--primary)] text-xl" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{pub.title}</h3>
                      <div className="flex items-center mt-1 md:mt-0">
                        <FaCalendarAlt className="text-[var(--text-secondary)] mr-2" />
                        <span className="text-sm text-[var(--text-secondary)]">{pub.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-[var(--text-secondary)] mb-4">{pub.description}</p>
                    
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[var(--primary)] hover:underline"
                    >
                      Read on Medium
                      <FaExternalLinkAlt className="ml-2 text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <a 
              href="https://nevzatopcu.medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--secondary)] transition-colors duration-300"
            >
              View All Publications
              <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
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

export default Publications;
