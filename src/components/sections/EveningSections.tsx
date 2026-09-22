import React from 'react';
import { Clock, Sunset, Lamp, UtensilsCrossed, Sparkles } from 'lucide-react';
import { DAILY_IMAGES } from '../../data/images';
import { ImageWithFallback } from '../ImageWithFallback';

export const EveningSections: React.FC = () => {
  const eveningImg = DAILY_IMAGES.evening;
  const goldenHourImg = DAILY_IMAGES.goldenHour;
  const homeAgainImg = DAILY_IMAGES.homeAgain;
  const dinnerImg = DAILY_IMAGES.dinner;

  return (
    <>
      {/* SECTION 08 — EVENING (06:00 PM) - Major Visual Transition */}
      <section
        id="section-evening"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#1A1411] via-[#1B1310] to-[#19110F] border-t border-amber-900/20"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-200 font-mono text-xs tracking-widest uppercase mb-4">
                <Sunset className="w-3.5 h-3.5 text-amber-400" />
                <span>06:00 PM</span>
                <span className="text-amber-700">•</span>
                <span className="text-amber-300/80">CHAPTER 08</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FFF3E8] mb-3 leading-[1.05]">
                THE DAY SOFTENS.
              </h2>
              <p className="font-serif italic text-xl sm:text-2xl text-amber-200/90 font-normal">
                “Somewhere between work and home, everything becomes quieter.”
              </p>
            </div>

            <div className="p-3.5 px-5 rounded-2xl bg-[#251914]/80 border border-amber-500/20 backdrop-blur-md self-start md:self-auto font-mono text-xs text-amber-200">
              WARM ORANGE • TERRACOTTA • GOLDEN SKY
            </div>
          </div>

          {/* Large Sunset Photograph with Slow Zoom Effect */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 group">
            <div className="w-full h-[440px] sm:h-[600px] lg:h-[660px] overflow-hidden">
              <ImageWithFallback
                src={eveningImg.url}
                fallbackSrc={eveningImg.fallbackUrl}
                alt={eveningImg.alt}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000 ease-out brightness-[0.92] contrast-[1.05]"
                overlayGradient="bg-gradient-to-t from-[#19110F]/90 via-transparent to-black/30"
              />
            </div>

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-amber-100 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Golden Sky • Road • Architecture • Trees • People Silhouettes</span>
            </div>
          </div>

          <div className="mt-8 max-w-2xl text-stone-300 text-sm leading-relaxed font-light">
            <p>
              The laptop clicks shut. The office door swings closed. Stepping outside, the atmosphere has surrendered the harshness of midday. The sky is soaked in peach and terracotta, and street lamps ignite one by one like quiet lanterns guiding everyone home.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 09 — GOLDEN HOUR (06:30 PM) - Immersive & Minimal */}
      <section
        id="section-golden-hour"
        className="relative min-h-[85vh] flex items-center justify-center py-24 px-4 sm:px-8 bg-[#19110F] overflow-hidden border-t border-amber-500/10"
      >
        {/* Full-bleed background image with warm ambient gradient */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={goldenHourImg.url}
            fallbackSrc={goldenHourImg.fallbackUrl}
            alt={goldenHourImg.alt}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover brightness-[0.75] contrast-[1.08]"
            overlayGradient="bg-gradient-to-t from-[#19110F] via-black/40 to-[#19110F]"
          />
        </div>

        {/* Minimal Centered Typography Requirement */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/30 text-amber-300 font-mono text-xs tracking-widest uppercase mb-6">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>06:30 PM • HORIZON</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#FFF4E8] mb-6 leading-none select-none">
            GOLDEN HOUR.
          </h2>

          <p className="font-serif italic text-2xl sm:text-3xl text-amber-200/90 font-light max-w-xl mx-auto leading-relaxed">
            “Maybe ordinary days are beautiful after all.”
          </p>
        </div>
      </section>

      {/* SECTION 10 — HOME AGAIN (08:00 PM) - Warm Brown Tones */}
      <section
        id="section-home-again"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#19110F] via-[#161210] to-[#141211] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Warm Image of Living Room, Sofa, Lamp, Book, Coffee Table */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-900/30 group">
                <ImageWithFallback
                  src={homeAgainImg.url}
                  fallbackSrc={homeAgainImg.fallbackUrl}
                  alt={homeAgainImg.alt}
                  containerClassName="w-full h-[460px] sm:h-[580px]"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out brightness-[0.9]"
                  overlayGradient="bg-gradient-to-t from-black/70 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-amber-200 flex items-center space-x-2">
                  <Lamp className="w-3.5 h-3.5 text-amber-400" />
                  <span>Living Room • Sofa • Lamp • Book • Coffee Table</span>
                </div>
              </div>
            </div>

            {/* Right: Text in Warm Brown Tones */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-950/50 border border-amber-600/20 text-amber-200 font-mono text-xs tracking-widest uppercase mb-4">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>08:00 PM</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-400">CHAPTER 10</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF3EB] mb-3 leading-[1.08]">
                HOME AGAIN.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-amber-200/90 font-normal mb-6">
                “The outside world gets quieter.”
              </p>

              <div className="space-y-4 text-stone-300 text-sm font-light leading-relaxed mb-8">
                <p>
                  Keys dropped into the ceramic dish by the doorway. Shoes slipped off. The warm click of the reading lamp illuminating the woven throw and the dog-eared novel.
                </p>
                <p>
                  No meetings left. No demands. The four walls hold your personal sanctuary, safe and unhurried.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1f1915]/80 border border-amber-500/10 text-xs font-mono text-amber-300/90 flex items-center space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Deep Brown • Warm Lamp Yellow • Quiet Sanctuary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — DINNER (08:30 PM) */}
      <section
        id="section-dinner"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#141211] via-[#131110] to-[#121010] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>08:30 PM</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-400">CHAPTER 11</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#FAF6F0] mb-3 leading-[1.08]">
              ONE MORE MEAL.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-amber-100/80 font-normal">
              “Small moments become memories.”
            </p>
          </div>

          {/* Dinner Photography Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <ImageWithFallback
              src={dinnerImg.url}
              fallbackSrc={dinnerImg.fallbackUrl}
              alt={dinnerImg.alt}
              containerClassName="w-full h-[420px] sm:h-[560px]"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out brightness-[0.88]"
              overlayGradient="bg-gradient-to-t from-black/80 via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-stone-300 flex items-center space-x-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-300" />
              <span>Dinner Table • Food • Plate • Glass • Warm Ambient Lights</span>
            </div>
          </div>

          <div className="mt-8 max-w-2xl text-stone-300 text-sm leading-relaxed font-light">
            <p>
              Warm food shared across candlelight or savored in peaceful solitary stillness. A glass of wine catching ruby reflections, laughter echoing softly, and the day drawing to its gentle resting place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
