import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onStartProject }) => {
  const heroImage = LUMIERE_IMAGES.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#141210] text-[#FAF8F5] pt-24 pb-16 lg:py-0"
    >
      {/* Background Image Container with Slow Subtle Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full animate-subtle-zoom scale-105 transition-transform duration-1000 ease-out">
          <ImageWithFallback
            src={heroImage.url}
            fallbackSrc={heroImage.fallbackUrl}
            alt={heroImage.alt}
            priority={true}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover brightness-[0.72] contrast-[1.05]"
          />
        </div>

        {/* Sophisticated Editorial Vignette & Warm Tint Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141210]/95 via-[#141210]/75 to-transparent sm:w-3/4 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-[#141210]/40" />
        <div className="absolute inset-0 bg-[#3A2B1D]/10 mix-blend-color" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Small Label */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#1F1B18]/70 backdrop-blur-md border border-[#C5A880]/30 text-[#D8C3A5] text-xs font-mono tracking-[0.25em] uppercase mb-6 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>INTERIOR DESIGN STUDIO</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#FAF8F5] mb-6 leading-[1.02] text-balance">
            Beautiful Spaces <br />
            <span className="italic font-normal text-[#E8DFD5]">for a Better Life</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-[#D4C8BC] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
            We create refined interiors that balance beauty, comfort and functionality — designed around the way you live.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-5">
            <button
              onClick={onExploreProjects}
              className="px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#D4B993] text-[#141210] font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-3 shadow-xl hover:shadow-[#C5A880]/20 hover:scale-[1.02]"
            >
              <span>Explore Our Projects</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#141210]" />
            </button>

            <button
              onClick={onStartProject}
              className="px-8 py-4 rounded-full bg-[#1F1B18]/80 hover:bg-[#2A2420] text-[#FAF8F5] border border-white/15 hover:border-[#C5A880]/40 font-mono text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2.5 backdrop-blur-sm"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>

          {/* Editorial Specs Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-[11px] font-mono tracking-[0.2em] text-[#A69B8F] uppercase">
            <div>
              <span className="text-white block text-sm font-serif">14+ Years</span>
              Architectural Practice
            </div>
            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-white block text-sm font-serif">85+ Spaces</span>
              Bespoke Residences
            </div>
            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-white block text-sm font-serif">100% Custom</span>
              Material Curation
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Scroll Indicator */}
      <div className="absolute bottom-6 right-8 hidden lg:flex items-center space-x-3 text-xs font-mono tracking-widest text-[#A69B8F] uppercase">
        <span>Scroll to Explore</span>
        <div className="w-8 h-[1px] bg-[#C5A880]/60" />
      </div>
    </section>
  );
};
