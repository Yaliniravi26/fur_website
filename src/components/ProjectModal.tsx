import React from 'react';
import { X, ArrowRight, MapPin, Calendar, Maximize, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectModalProps {
  project: typeof PROJECTS_DATA[0] | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] text-[#1F1B18] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3D9] my-8 flex flex-col">
        {/* Top Header */}
        <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between bg-[#F5F2EB]">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
              PORTFOLIO MONOGRAPH • {project.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1B18] font-normal">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-[#EAE3D9] text-[#1F1B18] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[75vh]">
          {/* Main Visual */}
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#1E1B18] border border-[#EAE3D9] shadow-lg">
            <ImageWithFallback
              src={project.image.url}
              fallbackSrc={project.image.fallbackUrl}
              alt={project.image.alt}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#F5F2EB] border border-[#EAE3D9] text-xs font-mono">
            <div>
              <span className="text-[#8C8072] block uppercase mb-1">Location</span>
              <span className="text-[#1F1B18] font-medium font-sans text-sm">{project.location}</span>
            </div>
            <div>
              <span className="text-[#8C8072] block uppercase mb-1">Total Area</span>
              <span className="text-[#1F1B18] font-medium font-sans text-sm">{project.area}</span>
            </div>
            <div>
              <span className="text-[#8C8072] block uppercase mb-1">Year Completed</span>
              <span className="text-[#1F1B18] font-medium font-sans text-sm">{project.year}</span>
            </div>
            <div>
              <span className="text-[#8C8072] block uppercase mb-1">Typology</span>
              <span className="text-[#1F1B18] font-medium font-sans text-sm">{project.category}</span>
            </div>
          </div>

          {/* Architectural Statement */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B18] font-normal">
              Architectural Concept & Spatial Dialogue
            </h3>
            <p className="text-sm sm:text-base text-[#524941] font-light leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm text-[#6B6156] font-light leading-relaxed">
              Every detail—from the recessed floor channels and hidden flush doors to the tailored custom millwork—was modeled and crafted to maintain acoustic stillness and maximize natural atmospheric diffusion.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#EAE3D9] bg-[#F5F2EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#8C8072]">
            LUMIÈRE ARCHITECTURAL RESIDENCES
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire(project.title);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1F1B18] hover:bg-[#342D28] text-[#FAF8F5] text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Inquire About Similar Space</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
          </button>
        </div>
      </div>
    </div>
  );
};
