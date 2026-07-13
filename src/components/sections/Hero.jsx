import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FileText, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedStars from '../ui/AnimatedStars';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedStars />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-3xl text-left lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
                Building Software for <span className="text-accent italic font-light">Science</span>, <span className="text-accent italic font-light">AI</span> & <span className="text-accent italic font-light">Space Technology</span>.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl tracking-wide">
                Second-year Computer Science student at Delhi Technological University passionate about Scientific Computing, Computer Vision, Artificial Intelligence and Computational Astrophysics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="group cursor-pointer flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(74,144,226,0.3)]"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://github.com/abhishtagyanda-png"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.2em] border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abhishta-gyanda-60307b383/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.2em] border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.2em] border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                <FileText size={18} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-1/3 flex flex-col items-center justify-center mt-12 lg:mt-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-500"></div>
              <img 
                src="/profile.jpg.jpeg" 
                alt="Profile" 
                className="relative z-10 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
