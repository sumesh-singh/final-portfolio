import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';
import { cn } from '../lib/utils';
import { EXPERIENCE, PROJECTS } from '../constants';
import { Briefcase, Code2, ExternalLink } from 'lucide-react';

interface GridItemProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string[];
  tags?: string[];
  link?: string;
}

const GridItem: React.FC<GridItemProps> = ({ area, icon, title, subtitle, description, tags, link }) => {
  return (
    <div className={cn("min-h-[14rem] h-full list-none relative group", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={2}
          variant="default"
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background/80 backdrop-blur-md p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8 transition-transform duration-300 group-hover:scale-[0.99]">
          <div className="relative flex flex-1 flex-col justify-start gap-4">
            <div className="flex items-center justify-between">
                <div className="w-fit rounded-lg border-[0.75px] border-border bg-white/5 p-2 text-blue-400">
                {icon}
                </div>
                {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {title}
              </h3>
              <p className="text-sm font-medium text-blue-400/90 uppercase tracking-wider">
                {subtitle}
              </p>
              <ul className="list-disc list-inside space-y-2 pt-2">
                {description.map((d, i) => (
                  <li key={i} className="text-sm text-gray-400 leading-relaxed pl-1 marker:text-blue-500/50">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {tags.map(t => (
                <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/5 text-gray-300">
                    {t}
                </span>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Experience</h2>
        <p className="text-white/40 max-w-2xl mx-auto">My professional journey and internships.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPERIENCE.map((exp) => (
          <GridItem
            key={exp.id}
            icon={<Briefcase className="w-5 h-5" />}
            title={exp.company}
            subtitle={`${exp.role} • ${exp.period}`}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Projects</h2>
        <p className="text-white/40 max-w-2xl mx-auto">Highlights of my technical projects and development work.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((proj) => (
          <GridItem
            key={proj.id}
            icon={<Code2 className="w-5 h-5" />}
            title={proj.title}
            subtitle={proj.date}
            description={proj.description}
            tags={proj.tech}
            link={proj.link}
          />
        ))}
      </div>
    </section>
  );
};