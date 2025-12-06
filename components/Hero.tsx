import React from 'react';
import Lightning from './ui/Lightning';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Lightning 
            hue={220}
            speed={1}
            intensity={1.2}
            size={1.1}
            className="w-full h-full opacity-80 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      </div>
      
      <div className="z-10 text-center px-4 max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider">
             MCA STUDENT & AI DEVELOPER
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Sumesh Singh<br/>
            <span className="text-white/40">Kotiwale</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Enthusiastic student developer with strong foundations in algorithms and AI. 
            Eager to solve complex challenges through clean code and scalable solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;