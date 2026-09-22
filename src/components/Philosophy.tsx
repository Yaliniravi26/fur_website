import React from 'react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

export const Philosophy: React.FC = () => {
  const diningImage = LUMIERE_IMAGES.philosophy;

  const features = [
    {
      num: '01',
      title: 'PERSONAL',
      desc: 'Designed around your lifestyle.',
      detail: 'Every spatial proportion, sightline, and lighting scene reflects your personal rhythms and domestic rituals.',
    },
    {
      num: '02',
      title: 'TIMELESS',
      desc: 'Materials and details made to last.',
      detail: 'Authentic stone, solid hardwoods, and unlacquered metals that develop graceful patinas with age.',
    },
    {
      num: '03',
      title: 'FUNCTIONAL',
      desc: 'Beauty that works beautifully.',
      detail: 'Concealed engineering, ergonomic acoustics, and effortless circulation serving daily human ease.',
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#1F1B18] overflow-hidden border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & Feature Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>OUR PHILOSOPHY</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] mb-6 leading-[1.08]">
              Spaces that feel <br />
              <span className="italic font-normal text-[#8C8072]">like you.</span>
            </h2>

            {/* Philosophy Lead Text */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#524941] font-light leading-relaxed mb-6">
              “We believe great interiors are not simply beautiful. They should feel natural, personal and timeless.”
            </p>

            <p className="text-[#6B6156] text-sm sm:text-base font-light leading-relaxed mb-12">
              Architecture should not impose an ego; it should provide a serene, tactile canvas for the life lived within it. We strip away decorative excess to honor natural illumination, volumetric proportion, and the quiet luxury of authentic materials.
            </p>

            {/* 3 Small Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#EAE3D9]">
              {features.map((item) => (
                <div key={item.num} className="group">
                  <div className="font-mono text-xs text-[#C5A880] tracking-widest font-semibold mb-2">
                    {item.num}
                  </div>
                  <h3 className="font-serif text-lg text-[#1F1B18] font-normal tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#524941] font-medium leading-snug mb-2">
                    {item.desc}
                  </p>
                  <p className="text-[11px] text-[#8C8072] font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sophisticated Dining Room Image (DIFFERENT from hero) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#EAE3D9] group">
              <ImageWithFallback
                src={diningImage.url}
                fallbackSrc={diningImage.fallbackUrl}
                alt={diningImage.alt}
                containerClassName="w-full h-[520px] sm:h-[620px]"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                overlayGradient="bg-gradient-to-t from-[#1F1B18]/70 via-transparent to-transparent"
              />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#FAF8F5]">
                <div className="bg-[#1F1B18]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>Sophisticated Dining • Natural Light • Neutral Palette</span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#D8C3A5] hidden sm:inline">
                  CURATED AMBIENCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
