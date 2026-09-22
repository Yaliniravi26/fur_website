import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

interface SignatureProjectsProps {
  onSelectProject: (project: typeof PROJECTS_DATA[0]) => void;
  onViewAllProjects: () => void;
}

export const SignatureProjects: React.FC<SignatureProjectsProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Apartment', 'Workspace', 'Dining'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#1F1B18] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] leading-[1.06]">
              Thoughtfully Designed. <br />
              <span className="italic font-normal text-[#8C8072]">Beautifully Executed.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1F1B18] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#F2ECE3] text-[#6B6156] hover:bg-[#EAE3D9] hover:text-[#1F1B18]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Different Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Elegant Hover Zoom */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1E1B18] border border-[#EAE3D9] aspect-[4/3] sm:aspect-[16/11] mb-5 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <ImageWithFallback
                  src={project.image.url}
                  fallbackSrc={project.image.fallbackUrl}
                  alt={project.image.alt}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  overlayGradient="bg-gradient-to-t from-[#1F1B18]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
                />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#1F1B18]/75 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#E8DFD5] uppercase border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action Badge */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#1F1B18] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
                  <ArrowUpRight className="w-4 h-4 text-[#1F1B18] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-mono text-[#E8DFD5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{project.location}</span>
                  <span className="text-[#C5A880]">{project.area}</span>
                </div>
              </div>

              {/* Project Information */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1F1B18] font-normal group-hover:text-[#9E7E52] transition-colors leading-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8C8072] font-mono tracking-wider uppercase mb-2">
                    {project.category} • {project.year}
                  </p>
                  <p className="text-xs text-[#6B6156] font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-1 pl-3">
                  <span className="w-8 h-8 rounded-full border border-[#EAE3D9] group-hover:border-[#C5A880] flex items-center justify-center text-[#8C8072] group-hover:text-[#C5A880] transition-colors shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center pt-4">
          <button
            onClick={onViewAllProjects}
            className="px-9 py-4 rounded-full bg-[#1F1B18] hover:bg-[#342D28] text-[#FAF8F5] font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer inline-flex items-center space-x-3 shadow-md hover:shadow-xl hover:scale-[1.02]"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </button>
        </div>
      </div>
    </section>
  );
};
