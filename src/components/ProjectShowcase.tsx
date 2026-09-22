import React from 'react';
import { ArrowUpRight, Sparkles, Compass, MapPin, Layers, Ruler } from 'lucide-react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectShowcaseProps {
  onInquireShowcase: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onInquireShowcase }) => {
  const showcaseImage = LUMIERE_IMAGES.projectShowcase;

  const projectDetails = [
    { label: 'PROJECT', value: 'Casa Aurelia', icon: Sparkles },
    { label: 'LOCATION', value: 'Contemporary Residence', icon: MapPin },
    { label: 'AREA', value: '3,200 sq.ft.', icon: Ruler },
    { label: 'SCOPE', value: 'Complete Interior Design', icon: Layers },
  ];

  return (
    <section
      id="showcase"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#F5F2EB] text-[#1F1B18] overflow-hidden border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Top Title & Intro */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>FEATURED ARCHITECTURAL SHOWCASE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#1F1B18] leading-[1.04] mb-6">
            A Home Designed <br />
            <span className="italic font-normal text-[#8C8072]">Around You</span>
          </h2>
          <p className="font-sans text-[#5C534A] text-base sm:text-lg font-light leading-relaxed">
            Casa Aurelia is a masterwork in volumetric balance. Conceived as a multi-generational sanctuary, every transition—from the sculptural floating timber staircase to double-height honed limestone walls—celebrates uninterrupted views and warm daylight.
          </p>
        </div>

        {/* Large Editorial Villa Visual Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3D9] mb-12 group">
          <ImageWithFallback
            src={showcaseImage.url}
            fallbackSrc={showcaseImage.fallbackUrl}
            alt={showcaseImage.alt}
            containerClassName="w-full h-[520px] sm:h-[680px] lg:h-[760px]"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            overlayGradient="bg-gradient-to-t from-[#1F1B18]/85 via-transparent to-black/30"
          />

          {/* Magazine Overlay Box at Bottom Left */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-[#FAF8F5]">
            <div className="bg-[#1F1B18]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 max-w-xl">
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#C5A880] uppercase block mb-2">
                MAGAZINE MONOGRAPH • ISSUE 04
              </span>
              <div className="font-serif italic text-xl sm:text-2xl text-[#FAF8F5] leading-snug mb-3">
                “Light isn’t merely illumination here; it is the fundamental building material that shapes the experience of time.”
              </div>
              <p className="text-xs text-[#D4C8BC] font-light leading-relaxed">
                Featuring floating cantilevered white oak treads, custom recessed floor lighting channels, and seamless slab transitions.
              </p>
            </div>

            <button
              onClick={onInquireShowcase}
              className="px-7 py-4 rounded-full bg-[#C5A880] hover:bg-[#D4B993] text-[#141210] font-mono text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2.5 shadow-xl hover:scale-105 self-start md:self-auto shrink-0"
            >
              <span>Request Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project Details Grid (4 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9]">
          {projectDetails.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#8C8072] uppercase tracking-[0.2em] mb-2">
                  <Icon className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{detail.label}</span>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-[#1F1B18] font-normal leading-tight">
                  {detail.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
