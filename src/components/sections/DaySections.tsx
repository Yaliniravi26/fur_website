import React from 'react';
import { Clock, Compass, BookOpen, Layers, Laptop, Coffee, Sparkles } from 'lucide-react';
import { DAILY_IMAGES, TRAVEL_STRIP_IMAGES } from '../../data/images';
import { ImageWithFallback } from '../ImageWithFallback';

export const DaySections: React.FC = () => {
  const onTheWayImg = DAILY_IMAGES.onTheWay;
  const focusImg = DAILY_IMAGES.focus;
  const lunchImg = DAILY_IMAGES.lunch;
  const afternoonImg = DAILY_IMAGES.afternoon;

  const focusCards = [
    {
      title: 'FOCUS',
      tag: 'DEEP WORK',
      desc: 'Headphones on, distractions silenced, entering undisturbed flow.',
      icon: Laptop,
    },
    {
      title: 'CREATE',
      tag: 'IDEATION',
      desc: 'Fountain pen on fresh pages, shaping concepts into tangible reality.',
      icon: Layers,
    },
    {
      title: 'LEARN',
      tag: 'ABSORB',
      desc: 'Pages referenced, new questions opened, quiet cognitive expansion.',
      icon: BookOpen,
    },
  ];

  return (
    <>
      {/* SECTION 04 — ON THE WAY (08:30 AM) */}
      <section
        id="section-on-the-way"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#171816] via-[#161719] to-[#151719] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>08:30 AM</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-400">CHAPTER 04</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FAF6F0] mb-3 leading-[1.05]">
            ON THE WAY.
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-amber-100/80 font-normal">
            “Between where we were and where we’re going.”
          </p>
        </div>

        {/* Full-Width City / Travel Hero Image */}
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-12 group relative">
          <ImageWithFallback
            src={onTheWayImg.url}
            fallbackSrc={onTheWayImg.fallbackUrl}
            alt={onTheWayImg.alt}
            containerClassName="w-full h-[440px] sm:h-[580px] lg:h-[640px]"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out brightness-[0.9]"
            overlayGradient="bg-gradient-to-t from-black/80 via-transparent to-black/30"
          />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-stone-200 flex items-center space-x-2">
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>Road • Transit • Pedestrians • Morning Light • City Pulse</span>
          </div>
        </div>

        {/* Horizontal Scrolling Photo Strip Requirement */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-[11px] font-mono tracking-widest text-stone-400 uppercase">
              TRANSIT SNAPSHOTS • HORIZONTAL ROLL
            </span>
            <span className="text-[11px] font-mono text-amber-300/80 hidden sm:inline">
              ← SWIPE OR SCROLL →
            </span>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar cursor-grab active:cursor-grabbing">
            {TRAVEL_STRIP_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 w-64 sm:w-72 rounded-2xl overflow-hidden bg-stone-900 border border-white/10 group shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={item.url}
                    fallbackSrc={item.fallbackUrl}
                    alt={item.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="font-serif text-sm text-[#FAF6F0] font-medium">{item.title}</div>
                    <div className="text-[10px] font-mono text-stone-300 tracking-wider uppercase">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — WORK / STUDY (10:00 AM) */}
      <section
        id="section-focus"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#151719] via-[#161718] to-[#171613] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header & Animated Clock */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>10:00 AM</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-400">CHAPTER 05</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#FAF6F0] mb-3 leading-[1.05]">
                FOCUS.
              </h2>
              <p className="font-serif italic text-xl sm:text-2xl text-amber-100/80 font-normal">
                “Hours disappear when we’re busy building something.”
              </p>
            </div>

            {/* Subtle Animated 2D Clock Widget */}
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#1d2024]/80 border border-white/10 backdrop-blur-md shadow-xl self-start md:self-auto">
              <div className="relative w-12 h-12 rounded-full border border-amber-400/40 bg-stone-950 flex items-center justify-center">
                {/* Center dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 z-10" />
                {/* Hour hand */}
                <div className="absolute w-[2px] h-3.5 bg-stone-200 bottom-6 animate-clock-hr" />
                {/* Minute hand */}
                <div className="absolute w-[1.5px] h-5 bg-amber-400 bottom-6 animate-clock-min" />
              </div>
              <div className="flex flex-col font-mono text-xs">
                <span className="text-stone-200 font-semibold tracking-wider">10:00 AM</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest">FLOW STATE</span>
              </div>
            </div>
          </div>

          {/* Large Workspace Photography */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-12 group">
            <ImageWithFallback
              src={focusImg.url}
              fallbackSrc={focusImg.fallbackUrl}
              alt={focusImg.alt}
              containerClassName="w-full h-[420px] sm:h-[560px]"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              overlayGradient="bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-stone-300">
              Laptop • Notebook • Pen • Desk • Coffee • Headphones
            </div>
          </div>

          {/* Small Requirement Cards: FOCUS, CREATE, LEARN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl bg-[#1b1d20]/80 border border-white/5 hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-amber-300/80 uppercase">
                      {card.tag}
                    </span>
                    <Icon className="w-4 h-4 text-stone-400 group-hover:text-amber-300 transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#FAF6F0] mb-2 font-normal">
                    {card.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06 — LUNCH (01:00 PM) */}
      <section
        id="section-lunch"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#171613] via-[#181613] to-[#181512] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>01:00 PM</span>
              <span className="text-stone-500">•</span>
              <span className="text-stone-400">CHAPTER 06</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#FAF6F0] mb-3 leading-[1.08]">
              TAKE A BREAK.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-amber-100/80 font-normal">
              “Even busy days need a pause.”
            </p>
          </div>

          {/* Large Centered Image with Text Overlay Requirement */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group max-w-5xl mx-auto">
            <ImageWithFallback
              src={lunchImg.url}
              fallbackSrc={lunchImg.fallbackUrl}
              alt={lunchImg.alt}
              containerClassName="w-full h-[460px] sm:h-[600px]"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out brightness-[0.85]"
              overlayGradient="bg-gradient-to-t from-black/85 via-black/30 to-black/40"
            />

            {/* Centered Editorial Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
              <span className="font-mono text-xs text-amber-300 uppercase tracking-[0.25em] mb-3">
                MIDDAY SUSTENANCE
              </span>
              <div className="font-serif text-3xl sm:text-5xl text-[#FAF6F0] font-light max-w-xl leading-tight mb-4">
                Plate. Cutlery. Cool water. Quiet conversation.
              </div>
              <p className="text-stone-300 text-xs sm:text-sm font-light max-w-md leading-relaxed">
                Step away from the screen. Taste the olive oil and fresh bread. Remember that work is what we do, not who we are.
              </p>
            </div>

            {/* Bottom details label */}
            <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-stone-300">
              Lunch • Plate • Cutlery • Water • Table
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — AFTERNOON (03:30 PM) */}
      <section
        id="section-afternoon"
        className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#181512] via-[#191512] to-[#1A1411] border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text & Calmer Editorial */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-stone-900/80 border border-amber-500/20 text-amber-200/90 font-mono text-xs tracking-widest uppercase mb-4">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>03:30 PM</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-400">CHAPTER 07</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#FAF6F0] mb-3 leading-[1.08]">
                STILL GOING.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-amber-100/80 font-normal mb-6">
                “The day is moving faster than we realize.”
              </p>

              <div className="space-y-4 text-stone-300 text-sm font-light leading-relaxed mb-8">
                <p>
                  The angle of the sun has changed completely. Honey-hued light stretches across the wooden floorboards, touching the rim of a ceramic tea mug and the edges of an open notebook.
                </p>
                <p>
                  The second wind arrives not as lightning, but as steady patience. A few more tasks to polish, a few emails to close.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#201a16]/80 border border-white/5 flex items-center space-x-3 text-xs font-mono text-stone-300">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>Steaming herbal tea • Long afternoon sun shadows</span>
              </div>
            </div>

            {/* Right: Lifestyle Image showing Desk, Window, Sunlight, Coffee/Tea, Notebook */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <ImageWithFallback
                  src={afternoonImg.url}
                  fallbackSrc={afternoonImg.fallbackUrl}
                  alt={afternoonImg.alt}
                  containerClassName="w-full h-[440px] sm:h-[560px]"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out brightness-[0.95]"
                  overlayGradient="bg-gradient-to-t from-black/60 via-transparent to-transparent"
                />
                <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-stone-300">
                  Desk • Window • Warm Afternoon Sunlight • Tea • Notebook
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
