import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.1,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </div>
  );
};

export default AnimatedStars;
