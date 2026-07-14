import React from 'react';
import Navbar from './components/layout/Navbar';
import CinematicStarfield from './components/ui/CinematicStarfield';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';

import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      {/* Global cinematic starfield — canvas-based, sits behind all content */}
      <CinematicStarfield />

      <div className="relative z-10 min-h-screen text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <TechStack />

          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
