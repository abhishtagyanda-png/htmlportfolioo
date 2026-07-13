import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const projectsData = [
  {
    title: "Solar System Simulator",
    flagship: true,
    description: "A flagship physics engine simulation modeling orbital mechanics and planetary motion in real-time.",
    problem: "Visualizing complex orbital mechanics and Kepler's laws requires precise calculation and performant rendering.",
    solution: "Developed a custom simulation engine using Python and Tkinter for rendering, implementing numerical integration for accurate planetary paths.",
    features: ["Interactive UI", "Kepler's Law Visualization", "Animated Asteroid Belt", "Future NASA Data Integration"],
    technologies: ["Python", "Tkinter", "Object-Oriented Programming", "Scientific Visualization"],
    github: "https://github.com/abhishtagyanda-png"
  },
  {
    title: "Railway AI Safety System",
    description: "A comprehensive safety platform for railway environments detecting potential hazards using real-time computer vision.",
    features: ["Risk Engine", "Analytics Dashboard"],
    technologies: ["Computer Vision", "YOLO", "FastAPI", "React"],
    github: "https://github.com/abhishtagyanda-png"
  },
  {
    title: "CricSenseAI",
    description: "AI-powered sports analytics platform providing heatmaps and insights for cricket matches.",
    features: ["Heatmaps", "Analytics Dashboard"],
    technologies: ["AI", "Sports Analytics", "YOLO", "ByteTrack", "React", "FastAPI"],
    github: "https://github.com/abhishtagyanda-png"
  },
  {
    title: "Portfolio Website",
    description: "A premium, space-themed personal portfolio built from scratch to tell a compelling story.",
    features: ["Responsive Design", "Framer Motion Animations", "Custom Design System"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/abhishtagyanda-png/htmlportfolioo"
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`glass p-8 rounded-2xl relative overflow-hidden group ${
      project.flagship ? 'md:col-span-2 border-accent/30 bg-navy/40' : ''
    }`}
  >
    {project.flagship && (
      <div className="absolute top-0 right-0 bg-accent text-navy text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-bl-lg">
        Flagship Project
      </div>
    )}
    <h3 className={`font-serif font-bold text-white mb-4 ${project.flagship ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
      {project.title}
    </h3>
    <p className="text-white/70 font-light mb-6 leading-relaxed max-w-3xl">
      {project.description}
    </p>

    {project.problem && project.solution && (
      <div className="mb-6 space-y-4 max-w-3xl">
        <div>
          <h4 className="text-xs uppercase tracking-widest text-accent mb-2 font-semibold">Problem</h4>
          <p className="text-sm text-white/60 font-light">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-accent mb-2 font-semibold">Solution</h4>
          <p className="text-sm text-white/60 font-light">{project.solution}</p>
        </div>
      </div>
    )}

    <div className="mb-8">
      <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3 font-semibold">Key Features</h4>
      <ul className="list-disc list-inside text-sm text-white/70 font-light space-y-1">
        {project.features.map(f => <li key={f}>{f}</li>)}
      </ul>
    </div>

    <div className="flex flex-wrap gap-2 mb-10">
      {project.technologies.map(tech => (
        <span key={tech} className="text-xs font-medium bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/80">
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-6 mt-auto absolute bottom-8 left-8">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors">
          <FaGithub size={16} /> GitHub
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors">
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading>Engineering Work</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
