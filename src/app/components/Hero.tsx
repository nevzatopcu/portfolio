'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaStackOverflow, FaMedium, FaEnvelope, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm <span className="text-[var(--primary)]">Nevzat Topçu</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-[var(--text-secondary)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Frontend Developer
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Building modern web experiences with Angular, React, and cutting-edge frontend technologies.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a 
                  href="#about" 
                  className="px-6 py-3 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--secondary)] transition-colors duration-300 inline-flex items-center"
                >
                  About Me
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a 
                  href="mailto:nevzatopcu@gmail.com" 
                  className="px-6 py-3 border border-[var(--border-color)] rounded-md hover:border-[var(--primary)] transition-colors duration-300 inline-flex items-center"
                >
                  Contact Me
                  <FaEnvelope className="ml-2" />
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <a 
                  href="https://www.linkedin.com/in/nevzattopcu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon text-[var(--text-secondary)] text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://stackoverflow.com/users/10377603/nevzatopcu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon text-[var(--text-secondary)] text-2xl"
                  aria-label="Stack Overflow"
                >
                  <FaStackOverflow />
                </a>
                <a 
                  href="https://nevzatopcu.medium.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon text-[var(--text-secondary)] text-2xl"
                  aria-label="Medium"
                >
                  <FaMedium />
                </a>
                {/*<a */}
                {/*  href="tel:+905433431790" */}
                {/*  className="social-icon text-[var(--text-secondary)] text-2xl"*/}
                {/*  aria-label="Phone"*/}
                {/*>*/}
                {/*  <FaPhone />*/}
                {/*</a>*/}
                <a 
                  href="mailto:nevzat@nevzatopcu.com"
                  className="social-icon text-[var(--text-secondary)] text-2xl"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--primary)] p-1">
                {/* Replace with your actual profile image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-30 flex items-center justify-center">
                  <Image
                      fill={true}
                      src="/nevzat.jpg"
                      className={"size-full object-cover"}
                      alt="Picture of the author"
                  />
                  <span className="text-6xl font-bold">NT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
