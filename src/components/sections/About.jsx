import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading align="left">The Story</SectionHeading>
        
        <div className="space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            I’ve always been curious about how complex systems work—whether it’s the logic behind software or the physics that governs the universe. That curiosity led me to explore programming not just as a tool for building applications, but as a way to model, simulate, and better understand real-world phenomena.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building projects has become my way of learning. From developing a Solar System Simulator to creating AI-powered solutions during hackathons, I enjoy turning ideas into software that combines analytical thinking with practical engineering. I’m particularly drawn to <span className="text-white font-medium">scientific computing</span>, <span className="text-white font-medium">computer vision</span>, and <span className="text-white font-medium">simulation</span>, where code can transform data and theory into interactive, meaningful experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My long-term goal is to work at the intersection of <span className="text-accent italic">Software Engineering</span>, <span className="text-accent italic">Computational Astrophysics</span>, and <span className="text-accent italic">Space Technology</span>—building software that advances scientific discovery and solves challenging engineering problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
