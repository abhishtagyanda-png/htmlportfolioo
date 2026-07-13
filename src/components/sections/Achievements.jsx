import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Trophy, Medal, Star } from 'lucide-react';

const achievementsData = [
  {
    title: "Winner",
    event: "Reel the Deal (Coding Ninjas × IIT Delhi)",
    icon: <Trophy className="text-yellow-500" size={24} />
  },
  {
    title: "Selected",
    event: "International Astronomical Search Collaboration",
    icon: <Star className="text-accent" size={24} />
  },
  {
    title: "Round 2",
    event: "Smart India Hackathon",
    icon: <Medal className="text-white/60" size={24} />
  },
  {
    title: "Round 2",
    event: "Hack4Delhi",
    icon: <Medal className="text-white/60" size={24} />
  },
  {
    title: "Round 2",
    event: "ET Hackathon",
    icon: <Medal className="text-white/60" size={24} />
  },
  {
    title: "Participant",
    event: "Bharatiya Antariksh Hackathon",
    icon: <Star className="text-white/40" size={24} />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading>Milestones</SectionHeading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors border-white/5"
            >
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-white/80 font-light text-sm leading-relaxed">
                  {item.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
