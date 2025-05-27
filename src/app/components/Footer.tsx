'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaStackOverflow, FaMedium, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0a0a0a] pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-6 md:mb-0"
            >
              <Link href="#home" className="text-white hover:text-primary">
                <span className="text-[var(--primary)]">N</span>evzat <span className="text-[var(--primary)]">T</span>opçu
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-6"
            >
              <a 
                href="https://www.linkedin.com/in/nevzattopcu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-[var(--text-secondary)] text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://stackoverflow.com/users/10377603/nevzatopcu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-[var(--text-secondary)] text-xl"
                aria-label="Stack Overflow"
              >
                <FaStackOverflow />
              </a>
              <a 
                href="https://nevzatopcu.medium.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon text-[var(--text-secondary)] text-xl"
                aria-label="Medium"
              >
                <FaMedium />
              </a>
              <a 
                href="mailto:nevzatopcu@gmail.com" 
                className="social-icon text-[var(--text-secondary)] text-xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:+905433431790" 
                className="social-icon text-[var(--text-secondary)] text-xl"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </motion.div>
          </div>
          
          <div className="border-t border-[var(--border-color)] pt-6 flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Nevzat Topçu. All rights reserved.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-[var(--primary)] group-hover:text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
