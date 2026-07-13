import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <SectionHeading>Initiate Contact</SectionHeading>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-white/70 font-light mb-12 leading-relaxed"
        >
          Whether you're exploring the cosmos of computational astrophysics or building the next generation of intelligent systems, I'm always open to discussing new opportunities and challenging problems.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="mailto:abhishtagyanda@example.com"
            className="group flex items-center gap-3 glass px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white/10 transition-colors border-white/10"
          >
            <Mail className="text-accent group-hover:text-white transition-colors" size={20} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/abhishta-gyanda-60307b383/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 glass px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white/10 transition-colors border-white/10"
          >
            <FaLinkedin className="text-accent group-hover:text-white transition-colors" size={20} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/abhishtagyanda-png"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 glass px-8 py-4 rounded-full w-full sm:w-auto hover:bg-white/10 transition-colors border-white/10"
          >
            <FaGithub className="text-accent group-hover:text-white transition-colors" size={20} />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
