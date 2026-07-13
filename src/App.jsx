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
    <div className="bg-background min-h-screen text-white font-sans selection:bg-accent selection:text-white relative">
      <Navbar />
      <main className="relative z-10">
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
  );
}

export default App;
