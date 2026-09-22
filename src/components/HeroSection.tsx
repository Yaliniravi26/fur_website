import React from 'react';
import { ArrowDown, Clock, Sparkles } from 'lucide-react';
import { DAILY_IMAGES } from '../data/images';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroSectionProps {
  onBeginDay: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBeginDay }) => {
  const heroImg = DAILY_IMAGES.hero;

  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#131110] text-[#FAF6F0]"
    >
      {/* Background Image Container with Slow Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full animate-slow-zoom scale-105 transition-transform duration-1000 ease-out">
          <ImageWithFallback
            src={heroImg.url}
            fallbackSrc={heroImg.fallbackUrl}
            alt={heroImg.alt}
            priority={true}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.04]"
          />
        </div>

        {/* Sophisticated Editorial Vignette & Warm Tint Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-[#121110]/50" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(18,17,16,0.65)_100%]" />
        <div className="absolute inset-0 bg-amber-950/10 mix-blend-color" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        {/* Morning Milestone Pill */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-stone-900/70 backdrop-blur-md border border-white/10 text-amber-200/90 text-xs font-mono tracking-widest uppercase mb-8 shadow-xl">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>06:30 AM • DAWN IN THE CITY</span>
        </div>

        {/* Main Large Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#FAF6F0] mb-6 leading-[0.95] select-none">
          DAILY LIFE
        </h1>

        {/* Sub-headline */}
        <div className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-amber-100/90 tracking-wide font-normal max-w-2xl mb-6 leading-tight">
          EVERY ORDINARY DAY<br className="hidden sm:inline" /> HAS A STORY.
        </div>

        {/* Description */}
        <p className="font-sans text-stone-300/90 text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light">
          “From the first alarm to the last light, every day is made of little moments.”
        </p>

        {/* Call to Action Button */}
        <button
          onClick={onBeginDay}
          className="group px-8 py-4 rounded-full bg-[#E6BE8A] hover:bg-[#ebd3b2] text-[#141210] font-mono text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center space-x-3 shadow-2xl hover:shadow-amber-500/20 hover:scale-[1.03]"
        >
          <span>BEGIN THE DAY</span>
          <ArrowDown className="w-4 h-4 text-[#141210] group-hover:translate-y-1 transition-transform" />
        </button>

        {/* Visual Cue of Atmosphere */}
        <div className="mt-16 flex items-center space-x-4 text-[11px] font-mono text-stone-400/80 tracking-widest uppercase">
          <span>01 / 14 CHAPTERS</span>
          <span>•</span>
          <span className="text-amber-300/80">MORNING BEDROOM</span>
        </div>
      </div>

      {/* Floating Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
          SCROLL TO LIVE THE DAY
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-amber-300/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
