import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const techCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Frameworks",
    skills: ["React", "FastAPI", "Tailwind", "Redux"]
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "YOLO", "ByteTrack"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading>Technical Arsenal</SectionHeading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-serif font-bold text-accent mb-6 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-white/80 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
