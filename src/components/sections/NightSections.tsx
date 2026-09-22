import React from 'react';
import { Clock, Moon, BookOpen, RotateCcw, Sparkles } from 'lucide-react';
import { DAILY_IMAGES } from '../../data/images';
import { ImageWithFallback } from '../ImageWithFallback';

interface NightSectionsProps {
  onRestartDay: () => void;
}

export const NightSections: React.FC<NightSectionsProps> = ({ onRestartDay }) => {
  const slowDownImg = DAILY_IMAGES.slowDown;
  const goodNightImg = DAILY_IMAGES.goodNight;

  return (
    <>
      {/* SECTION 12 — SLOW DOWN (10:00 PM) */}
      <section
        id="section-slow-down"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#121010] via-[#100F0F] to-[#0E0D0E] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text - Animations slower here */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/90 border border-white/10 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>10:00 PM</span>
                <span className="text-stone-600">•</span>
                <span className="text-stone-400">CHAPTER 12</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF6F0] mb-3 leading-[1.08]">
                SLOW DOWN.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-amber-100/80 font-normal mb-6">
                “Tomorrow can wait.”
              </p>

              <div className="space-y-4 text-stone-300/90 text-sm font-light leading-relaxed mb-8">
                <p>
                  Returning to the room where dawn first broke. The bed is turned down with cool linen sheets waiting. Phone placed face down on the nightstand, notifications muted.
                </p>
                <p>
                  Reading three pages of a paperback under the soft halo of the reading light until words gently dissolve into dreaminess.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#191616]/80 border border-white/5 flex items-center space-x-3 text-xs font-mono text-stone-300">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Bed • Book • Bedside Lamp • Soft Curtains • Night Light</span>
              </div>
            </div>

            {/* Right: Quiet Bedroom Photograph */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                <ImageWithFallback
                  src={slowDownImg.url}
                  fallbackSrc={slowDownImg.fallbackUrl}
                  alt={slowDownImg.alt}
                  containerClassName="w-full h-[440px] sm:h-[560px]"
                  className="w-full h-full object-cover brightness-[0.8] contrast-[1.05] transition-all duration-1000"
                  overlayGradient="bg-gradient-to-t from-black/80 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-stone-300">
                  Quiet Bedroom • Bedside Reading • Lamp Light
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SECTION — GOOD NIGHT (11:30 PM) */}
      <section
        id="section-good-night"
        className="relative min-h-screen py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-[#0B0A0C] border-t border-white/5 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* Background Image: Dark cinematic bedroom with solitary glowing lamp */}
        <div className="absolute inset-0 z-0 opacity-40">
          <ImageWithFallback
            src={goodNightImg.url}
            fallbackSrc={goodNightImg.fallbackUrl}
            alt={goodNightImg.alt}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover brightness-[0.55] contrast-[1.2]"
            overlayGradient="bg-gradient-to-t from-[#0B0A0C] via-[#0B0A0C]/80 to-[#0B0A0C]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center">
          {/* Subtle Circular Animation Container */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8 flex items-center justify-center">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/40 animate-cycle-spin" />
            {/* Middle glowing aura */}
            <div className="absolute inset-3 rounded-full border border-amber-500/20 bg-amber-950/20 animate-pulse-glow" />
            {/* Center Moon / Time */}
            <div className="flex flex-col items-center justify-center z-10">
              <Moon className="w-6 h-6 text-amber-300 mb-1" />
              <span className="font-mono text-xs text-amber-200 tracking-wider">11:30 PM</span>
            </div>
          </div>

          {/* Time Display */}
          <div className="font-mono text-xs sm:text-sm tracking-[0.3em] text-amber-400 uppercase mb-3">
            11:30 PM • MIDNIGHT PEACE
          </div>

          {/* GOOD NIGHT Heading */}
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#FAF6F0] mb-4 leading-none select-none">
            GOOD NIGHT.
          </h2>

          {/* Tagline */}
          <p className="font-serif italic text-2xl sm:text-3xl text-amber-100/90 font-light max-w-lg mb-8 leading-relaxed">
            “Another ordinary day, beautifully lived.”
          </p>

          {/* Final Message Callout Box */}
          <div className="my-6 p-6 sm:p-8 rounded-3xl bg-[#141214]/80 backdrop-blur-md border border-amber-500/20 max-w-xl shadow-2xl">
            <p className="font-serif italic text-lg sm:text-xl text-stone-200 leading-relaxed font-light mb-4">
              “Nothing extraordinary happened today.<br />
              And somehow, it was beautiful.”
            </p>
            <div className="text-[11px] font-mono tracking-widest text-amber-300/80 uppercase">
              THE STORY OF AN ORDINARY DAY • COMPLETE
            </div>
          </div>

          {/* Tomorrow circular restart */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-[11px] font-mono tracking-[0.25em] text-stone-400 uppercase mb-2">
              SEE YOU TOMORROW.
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-amber-200 font-normal mb-6">
              06:30 AM
            </span>

            <button
              onClick={onRestartDay}
              className="group px-8 py-4 rounded-full bg-[#E6BE8A] hover:bg-[#ebd3b2] text-[#141210] font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center space-x-3 shadow-2xl hover:scale-105"
            >
              <RotateCcw className="w-4 h-4 text-[#141210] group-hover:-rotate-90 transition-transform duration-500" />
              <span>BEGIN TOMORROW → 06:30 AM</span>
            </button>
          </div>
        </div>

        {/* Ambient Footer */}
        <div className="relative z-10 mt-20 pt-8 border-t border-white/5 w-full max-w-4xl text-center text-xs font-mono text-stone-500 tracking-wider">
          DAILY LIFE © 24-HOUR VISUAL DIARY • NO 3D • CRAFTED WITH EDITORIAL CARE
        </div>
      </section>
    </>
  );
};
