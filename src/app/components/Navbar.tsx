'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium, FaStackOverflow } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Publications', href: '#publications' },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/nevzattopcu/', 
      icon: <FaLinkedin className="w-5 h-5" /> 
    },
    { 
      name: 'Stack Overflow', 
      href: 'https://stackoverflow.com/users/10377603/nevzatopcu', 
      icon: <FaStackOverflow className="w-5 h-5" /> 
    },
    { 
      name: 'Medium', 
      href: 'https://nevzatopcu.medium.com', 
      icon: <FaMedium className="w-5 h-5" /> 
    },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#home" className="text-white hover:text-primary">
              <span className="text-[var(--primary)]">N</span>evzat <span className="text-[var(--primary)]">T</span>opçu
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link 
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-[var(--text-secondary)]"
                  whileHover={{ y: -3, color: 'var(--primary)' }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end justify-center">
                <span 
                  className={`block h-0.5 bg-white transition-all duration-300 ease-out ${
                    mobileMenuOpen ? 'w-6 transform rotate-45 translate-y-1' : 'w-6'
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 bg-white mt-1 transition-all duration-300 ease-out ${
                    mobileMenuOpen ? 'opacity-0' : 'w-4'
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 bg-white mt-1 transition-all duration-300 ease-out ${
                    mobileMenuOpen ? 'w-6 transform -rotate-45 -translate-y-1' : 'w-5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 bg-[#121212]/95 backdrop-blur-md">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-white transition-colors block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-[var(--border-color)]">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-[var(--text-secondary)]"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
