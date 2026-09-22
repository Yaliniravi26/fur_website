import React, { useState } from 'react';
import { Sparkles, Check, Info } from 'lucide-react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

export const MaterialsSection: React.FC = () => {
  const materialsData = Object.values(LUMIERE_IMAGES.materials);
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);

  return (
    <section
      id="materials"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#F5F2EB] text-[#1F1B18] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>THE TACTILE ARCHIVE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] leading-[1.08]">
              Details Make the <br />
              <span className="italic font-normal text-[#8C8072]">Difference</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#5C534A] font-light leading-relaxed">
            We reject synthetic imitations. Our studio curates noble, natural substances—materials that breathe, age gracefully, and possess inherent geological and botanical poetry.
          </p>
        </div>

        {/* 6 Material Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {materialsData.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;
            return (
              <div
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`group cursor-pointer rounded-2xl overflow-hidden p-3 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1F1B18] text-[#FAF8F5] shadow-xl -translate-y-1'
                    : 'bg-[#FAF8F5] text-[#1F1B18] hover:bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#C5A880]/50'
                }`}
              >
                {/* Texture Image Box */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-[#2A2420]">
                  <ImageWithFallback
                    src={mat.url}
                    fallbackSrc={mat.fallbackUrl}
                    alt={mat.alt}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#C5A880] text-[#141210] flex items-center justify-center shadow-md">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  )}
                </div>

                <div>
                  <h3
                    className={`font-serif text-base sm:text-lg font-normal mb-1 ${
                      isSelected ? 'text-[#FAF8F5]' : 'text-[#1F1B18]'
                    }`}
                  >
                    {mat.title}
                  </h3>
                  <div
                    className={`text-[10px] font-mono tracking-widest uppercase ${
                      isSelected ? 'text-[#C5A880]' : 'text-[#8C8072]'
                    }`}
                  >
                    ARCHITECTURAL FINISH
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Material Spotlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#EAE3D9] shadow-lg flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-[#241F1B] shrink-0 border border-[#EAE3D9]">
            <ImageWithFallback
              src={selectedMaterial.url}
              fallbackSrc={selectedMaterial.fallbackUrl}
              alt={selectedMaterial.alt}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="text-xs font-mono text-[#C5A880] uppercase tracking-[0.25em] mb-2 font-semibold">
              SPECIFICATION FOCUS
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1F1B18] font-normal mb-3">
              {selectedMaterial.title}
            </h3>
            <p className="text-base text-[#524941] font-light leading-relaxed mb-6">
              {selectedMaterial.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE3D9] text-xs font-mono text-[#8C8072]">
              <div>
                <span className="block text-[#1F1B18] font-semibold">ORIGIN</span>
                Ethically Sourced Quarries & Mills
              </div>
              <div>
                <span className="block text-[#1F1B18] font-semibold">FINISH TREATMENT</span>
                Non-toxic, Matte Organic Sealer
              </div>
              <div>
                <span className="block text-[#1F1B18] font-semibold">LONGEVITY</span>
                Designed for Multi-generational Aging
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
