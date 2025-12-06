import React from 'react';
import GlassSurface from './ui/GlassSurface';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <GlassSurface
        borderRadius={40}
        width="fit-content"
        height="auto"
        backgroundOpacity={0.1}
        blur={15}
        borderWidth={0.1}
        className="shadow-xl"
      >
        <div className="flex gap-6 px-8 py-3">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </GlassSurface>
    </nav>
  );
};

export default Navbar;
