import React from 'react';
import { ReactLenis } from 'lenis/react';
import Scene3D from './components/Scene3D';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ExperienceSection, ProjectSection } from './components/CardGrid';
import Footer from './components/Footer';
import { EDUCATION, SKILLS, CERTIFICATIONS, ACHIEVEMENTS } from './constants';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import LaserFlow from './components/ui/LaserFlow';
import { GlassEffect, GlassFilter } from './components/ui/liquid-glass';

const EducationSection = () => (
  <section id="education" className="relative py-24 px-4 overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <video 
            className="w-full h-full object-cover opacity-100"
            autoPlay 
            loop 
            muted 
            playsInline
        >
            <source src="https://www.pexels.com/download/video/4779866/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Education</h2>
        </div>
        {/* SVG Filter Definition */}
        <GlassFilter />
        
        <div className="grid gap-6">
        {EDUCATION.map((edu) => (
            <GlassEffect 
            key={edu.id} 
            className="rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors p-6 md:p-8"
            >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
                <div className="flex gap-5 items-start">
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                    <p className="text-lg text-white/60 mt-1">{edu.degree}</p>
                    <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400">
                    {edu.grade}
                    </div>
                </div>
                </div>
                <div className="pl-16 md:pl-0">
                <span className="font-mono text-sm text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {edu.year}
                </span>
                </div>
            </div>
            </GlassEffect>
        ))}
        </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="relative py-32 px-4 overflow-hidden">
     <div className="absolute inset-0 z-0">
        <LaserFlow
           color="#3b82f6"
           flowSpeed={0.4}
           wispDensity={1.5}
           className="opacity-60"
        />
        <div className="absolute inset-0 bg-background/80" />
     </div>

     <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {[...SKILLS.languages, ...SKILLS.frameworks].map(skill => (
            <div key={skill} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm md:text-base font-medium hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all cursor-default shadow-lg shadow-black/20 backdrop-blur-sm">
                {skill}
            </div>
            ))}
        </div>
     </div>
  </section>
);

const CertificationsSection = () => (
  <section className="py-24 px-4 max-w-5xl mx-auto relative z-10">
    <div className="grid md:grid-cols-2 gap-12">
        <div>
            <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                    <li key={i} className="flex gap-3 text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                        <span>{cert}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-4">
                {ACHIEVEMENTS.map((ach, i) => (
                    <li key={i} className="flex gap-3 text-white/70">
                         <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2.5 shrink-0" />
                        <span>{ach}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  </section>
);

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full bg-background text-foreground selection:bg-blue-500/30 selection:text-blue-100">
        <Scene3D />
        <Navbar />
        
        <main className="relative z-0 flex flex-col">
          <Hero />
          <ExperienceSection />
          <ProjectSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;