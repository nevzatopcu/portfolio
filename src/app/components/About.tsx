'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="section-heading">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 h-full"
            >
              <div className="card p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Profile</h3>
                <p className="text-[var(--text-secondary)] mb-6 flex-grow">
                  While contributing to companies with my knowledge and experience, I aim to improve my professional
                  skills and specialize in my field. I'm passionate about creating modern, responsive, and user-friendly web applications.
                </p>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-[var(--primary)] mr-3" />
                    <div>
                      <p className="text-sm text-[var(--text-secondary)]">Date of Birth</p>
                      <p>August 29, 1995</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-[var(--primary)] mr-3" />
                    <div>
                      <p className="text-sm text-[var(--text-secondary)]">Location</p>
                      <p>Ankara, Turkey</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 h-full"
            >
              <div className="card p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">My Approach</h3>
                <div className="flex-grow">
                  <p className="text-[var(--text-secondary)] mb-4">
                    I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
                  </p>
                  <p className="text-[var(--text-secondary)] mb-4">
                    With expertise in Angular, RxJS, and state management, I create scalable and maintainable frontend architectures.
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    I'm passionate about sharing knowledge through community involvement and technical writing, as seen in my publications and community leadership with Ng Turkey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--primary)]">Organizations</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-[var(--primary)] pl-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">Ng Turkey, Community Lead</h4>
                    <span className="text-sm text-[var(--text-secondary)]">Mar 2023 – Mar 2024</span>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Lead of the Ng Turkey Team that supports Angular community via arranging webinars and creating
                    educational materials.
                  </p>
                  <a 
                    href="https://twitter.com/ngTurkiye" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline mt-2 inline-block"
                  >
                    twitter.com/ngTurkiye
                  </a>
                </div>
                
                <div className="border-l-2 border-[var(--primary)] pl-4">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-medium">Ng Turkey, Team Member</h4>
                    <span className="text-sm text-[var(--text-secondary)]">Apr 2021 – present</span>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Member of the Ng Turkey Team that supports Angular community via arranging webinars and creating
                    educational materials.
                  </p>
                  <a 
                    href="https://twitter.com/ngTurkiye" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline mt-2 inline-block"
                  >
                    twitter.com/ngTurkiye
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

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

export default About;
