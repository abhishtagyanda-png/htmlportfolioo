import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="font-serif text-xl md:text-2xl italic text-white/70 mb-8 font-light flex flex-col gap-4">
          <p>"The universe is big. Might as well write good code while exploring it."</p>
          <p className="text-lg text-white/50">"We are made of star-stuff."</p>
        </div>
        <div className="h-px w-16 bg-white/10 mx-auto mb-8"></div>
        <p className="text-xs text-white/40 tracking-[0.2em] uppercase font-semibold">
          © {new Date().getFullYear()} Abhishta Gyanda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
