import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const timelineData = [
  {
    year: "2025",
    events: ["Started Computer Science at DTU", "C language", "Exploring hackathons"]
  },
  {
    year: "2026",
    events: ["Built first simulations", "Solar System Simulator", "Hackathons", "Railway AI", "CricSenseAI", "International Astronomical Search Collaboration"]
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeading align="left">Trajectory</SectionHeading>
        
        <div className="space-y-12 border-l border-white/10 pl-8 ml-2 mt-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute top-1.5 -left-[41px] w-4 h-4 rounded-full bg-navy border-2 border-accent shadow-[0_0_10px_rgba(74,144,226,0.5)]"></div>
              
              <h3 className="text-2xl font-serif font-bold text-accent mb-6">
                {item.year}
              </h3>
              <ul className="space-y-4 text-white/70 font-light">
                {item.events.map((event, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent/50 mt-1.5 text-[10px]">■</span>
                    <span className="text-lg">{event}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
