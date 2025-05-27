'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  FaAngular, 
  FaReact, 
  FaVuejs, 
  FaJs, 
  FaCss3Alt, 
  FaSass, 
  FaGitAlt,
  FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiRedux, 
  SiJest, 
  SiCypress, 
  SiStorybook 
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'Angular', icon: <FaAngular className="text-[#dd0031]" /> },
        { name: 'React', icon: <FaReact className="text-[#61dafb]" /> },
        { name: 'Vue.js', icon: <FaVuejs className="text-[#42b883]" /> },
        { name: 'RxJS', icon: <FaCode className="text-[#b7178c]" /> },
        { name: 'Nx', icon: <FaCode className="text-[#143055]" /> },
        { name: 'NgRx/Redux', icon: <SiRedux className="text-[#764abc]" /> },
        { name: 'Stencil.js', icon: <FaJs className="text-[#f0db4f]" /> },
        { name: 'Qwik', icon: <FaJs className="text-[#f0db4f]" /> },
      ]
    },
    {
      name: 'Languages & Styling',
      skills: [
        { name: 'JavaScript', icon: <FaJs className="text-[#f0db4f]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#264de4]" /> },
        { name: 'SCSS/SASS', icon: <FaSass className="text-[#cc6699]" /> },
      ]
    },
    {
      name: 'Testing & Tools',
      skills: [
        { name: 'Jest', icon: <SiJest className="text-[#c21325]" /> },
        { name: 'Cypress', icon: <SiCypress className="text-[#fa52a0]" /> },
        { name: 'Storybook', icon: <SiStorybook className="text-[#ff4785]" /> },
        { name: 'Git', icon: <FaGitAlt className="text-[#f05032]" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="section-heading">Skills & Technologies</span>
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-semibold mb-6 text-[var(--primary)]">{category.name}</h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#222] transition-colors"
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="text-sm text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-[var(--text-secondary)] italic">
              "I'm always learning and exploring new technologies to stay at the forefront of frontend development."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom useInView hook
function useInView(
  ref: React.RefObject<HTMLElement | null>,
  options: IntersectionObserverInit & { once?: boolean; amount?: number }
) {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      
      if (entry.isIntersecting && options.once && ref.current) {
        observer.unobserve(ref.current);
      }
    }, options);
    
    const currentRef = ref.current;
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);
  
  return isInView;
}

export default Skills;
