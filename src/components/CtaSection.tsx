import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

interface CtaSectionProps {
  onStartConversation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartConversation }) => {
  const ctaImage = LUMIERE_IMAGES.finalCta;

  return (
    <section
      id="cta"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#141210] text-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dramatic Dark Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-6 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>COMMISSION INQUIRY</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#FAF8F5] mb-6 leading-[1.04] text-balance">
              Let's Design <br />
              <span className="italic font-normal text-[#E8DFD5]">Your Dream Space.</span>
            </h2>

            <p className="font-sans text-[#D4C8BC] text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10">
              Tell us about your space, your lifestyle and what you imagine for it. We'll help turn that vision into something real.
            </p>

            <div>
              <button
                onClick={onStartConversation}
                className="px-9 py-4 rounded-full bg-[#C5A880] hover:bg-[#D4B993] text-[#141210] font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer inline-flex items-center space-x-3 shadow-2xl hover:scale-105"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 text-[#141210]" />
              </button>
            </div>

            <div className="mt-14 pt-8 border-t border-white/10 flex items-center space-x-6 text-xs font-mono text-[#A69B8F] uppercase tracking-wider">
              <span>✦ Direct Principal Architect Consult</span>
              <span>✦ Non-obligatory Initial Study</span>
            </div>
          </div>

          {/* Right Column: Unique Luxury Architectural Foyer / Staircase Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5]">
              <ImageWithFallback
                src={ctaImage.url}
                fallbackSrc={ctaImage.fallbackUrl}
                alt={ctaImage.alt}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.9]"
                overlayGradient="bg-gradient-to-t from-[#141210]/80 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-[#E8DFD5] text-xs font-mono">
                <span className="text-[#C5A880] block mb-1">ARCHITECTURAL FOYER • PRIVATE RESIDENCE</span>
                “Where structure transforms into intimate feeling.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
