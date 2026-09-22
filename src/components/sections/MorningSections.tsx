import React from 'react';
import { Clock, Check, Sparkles, Coffee } from 'lucide-react';
import { DAILY_IMAGES } from '../../data/images';
import { ImageWithFallback } from '../ImageWithFallback';

export const MorningSections: React.FC = () => {
  const morningImg = DAILY_IMAGES.morning;
  const getReadyImg = DAILY_IMAGES.getReady;
  const breakfastImg = DAILY_IMAGES.breakfast;

  const rituals = [
    { num: '01', title: 'Brush', desc: 'Cold water, fresh slate' },
    { num: '02', title: 'Shower', desc: 'Awakening heat & steam' },
    { num: '03', title: 'Dress', desc: 'Crisp linen & selected watch' },
    { num: '04', title: 'Pack', desc: 'Keys, notebook & essentials' },
    { num: '05', title: 'Leave', desc: 'Stepping into the new light' },
  ];

  return (
    <>
      {/* SECTION 01 — MORNING (06:30 AM) */}
      <section
        id="section-morning"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#121110] via-[#161413] to-[#181614] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              {/* Time Pill */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>06:30 AM</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-400">CHAPTER 01</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF6F0] mb-3 leading-[1.05]">
                GOOD MORNING.
              </h2>
              <p className="font-serif italic text-xl sm:text-2xl text-amber-100/80 font-normal">
                “Some mornings begin slowly.”
              </p>
            </div>

            {/* Small Horizontal Timeline Requirement: 06:30 AM | WAKE UP */}
            <div className="flex items-center space-x-3 p-3.5 px-5 rounded-2xl bg-[#1d1a18]/70 border border-white/5 backdrop-blur-md self-start md:self-auto">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-amber-300 font-semibold tracking-wider">
                  06:30 AM
                </span>
                <span className="text-[11px] font-mono tracking-widest text-stone-400 uppercase">
                  WAKE UP
                </span>
              </div>
              <div className="h-6 w-[1px] bg-stone-700" />
              <div className="flex items-center space-x-1.5 text-xs text-stone-300 font-light italic">
                <span>The quietest ten minutes</span>
              </div>
            </div>
          </div>

          {/* Large Lifestyle Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
            <ImageWithFallback
              src={morningImg.url}
              fallbackSrc={morningImg.fallbackUrl}
              alt={morningImg.alt}
              containerClassName="w-full h-[420px] sm:h-[580px] lg:h-[640px]"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out brightness-[0.92] contrast-[1.02]"
              overlayGradient="bg-gradient-to-t from-[#141211]/90 via-transparent to-transparent"
            />

            {/* Editorial Caption Tag in Corner */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-300 gap-2">
              <div className="bg-[#141211]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Morning bedroom • Sunlight through curtains • Coffee & alarm clock</span>
              </div>
              <span className="text-[11px] text-stone-400 font-mono tracking-widest uppercase hidden sm:inline">
                A SLOW AWAKENING
              </span>
            </div>
          </div>

          {/* Narrative Paragraph */}
          <div className="mt-10 max-w-2xl text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            <p>
              The house is still resting in soft twilight. Before notifications rush in and the world demands answers, the morning asks for nothing. A quiet breath, warm sheets, and the slow golden slant of sunlight climbing the wall.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02 — GET READY (07:15 AM) */}
      <section
        id="section-get-ready"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#181614] via-[#1a1816] to-[#191612] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Time & Chapter Header */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-8">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>07:15 AM</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-400">CHAPTER 02</span>
          </div>

          {/* Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Image showing Mirror, Skincare, Perfume, Comb, Clothes, Watch */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <ImageWithFallback
                  src={getReadyImg.url}
                  fallbackSrc={getReadyImg.fallbackUrl}
                  alt={getReadyImg.alt}
                  containerClassName="w-full h-[460px] sm:h-[560px]"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-[0.95]"
                  overlayGradient="bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />

                <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-stone-300">
                  Mirror • Skincare • Perfume • Watch
                </div>
              </div>
            </div>

            {/* Right: Text & List */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF6F0] mb-3 leading-[1.08]">
                GET READY.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-amber-100/80 font-normal mb-8 leading-relaxed">
                “The little rituals that make us feel ready.”
              </p>

              <p className="text-stone-300 text-sm leading-relaxed font-light mb-8">
                Cold water splash on the face. The familiar click of the watch clasp against the wrist. Spray of amber perfume. These small tactile habits transform who we were in sleep into who we are in the day.
              </p>

              {/* Ritual Checklist */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono tracking-widest text-amber-300/80 uppercase mb-2">
                  THE MORNING SEQUENCE
                </div>
                {rituals.map((r) => (
                  <div
                    key={r.num}
                    className="p-3 px-4 rounded-xl bg-[#201d1a]/80 border border-white/5 hover:border-amber-500/20 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3.5">
                      <span className="font-mono text-xs text-amber-400/80">{r.num}</span>
                      <span className="font-serif text-base text-stone-200 group-hover:text-amber-100 transition-colors">
                        {r.title}
                      </span>
                    </div>
                    <span className="text-xs font-sans text-stone-400 font-light">
                      {r.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — BREAKFAST (08:00 AM) */}
      <section
        id="section-breakfast"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#191612] via-[#1a1714] to-[#171816] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>08:00 AM</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-400">CHAPTER 03</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#FAF6F0] mb-3 leading-[1.08]">
              FIRST CUP.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-amber-100/80 font-normal">
              “Coffee. Breakfast. A few quiet minutes.”
            </p>
          </div>

          {/* Wide Lifestyle Photograph with Steam Effect Overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <ImageWithFallback
              src={breakfastImg.url}
              fallbackSrc={breakfastImg.fallbackUrl}
              alt={breakfastImg.alt}
              containerClassName="w-full h-[400px] sm:h-[540px] lg:h-[600px]"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              overlayGradient="bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />

            {/* CSS Animated Steam Effect overlay */}
            <div className="absolute bottom-24 left-16 sm:left-24 pointer-events-none flex flex-col items-center">
              <div className="relative w-16 h-28">
                {/* 3 Steam Trails */}
                <div className="absolute bottom-0 left-3 w-3 h-16 bg-gradient-to-t from-white/30 via-white/15 to-transparent rounded-full blur-[3px] steam-1" />
                <div className="absolute bottom-0 left-7 w-3.5 h-20 bg-gradient-to-t from-white/35 via-white/20 to-transparent rounded-full blur-[3px] steam-2" />
                <div className="absolute bottom-0 left-11 w-3 h-14 bg-gradient-to-t from-white/25 via-white/10 to-transparent rounded-full blur-[3px] steam-3" />
              </div>
              <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-200 mt-2">
                Fresh Roast • Hot Steam
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-300 gap-2">
              <div className="bg-[#141210]/85 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Toast • Fruit • Fresh Pour-Over • Morning Sunlight
              </div>
              <span className="text-[11px] text-stone-400 font-mono tracking-widest uppercase hidden sm:inline">
                A PAUSE BEFORE THE WORLD
              </span>
            </div>
          </div>

          <div className="mt-8 max-w-2xl text-stone-300 text-sm leading-relaxed font-light">
            <p>
              The golden crust of sourdough, the aroma of ground Arabica beans, and the warmth of a heavy ceramic mug in two hands. Nothing urgent can cross this table for the next twelve minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
