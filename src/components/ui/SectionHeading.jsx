import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, align = 'center' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
        {children}
      </h2>
      <div className={`h-1 w-20 bg-accent ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionHeading;
