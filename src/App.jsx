import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Timeline from './components/sections/Timeline';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      {/* Global persistent starfield — sits behind everything, covers all sections */}
      <div id="star-canvas" aria-hidden="true">
        <div className="stars-small-1" />
        <div className="stars-small-2" />
        <div className="stars-medium-1" />
        <div className="stars-medium-2" />
        <div className="stars-large-1" />
        <div className="stars-large-2" />
      </div>

      <div className="relative z-10 min-h-screen text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Timeline />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
