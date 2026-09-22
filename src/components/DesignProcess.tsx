import React, { useState } from 'react';
import { Compass, Lightbulb, PenTool, Hammer, KeyRound, Check } from 'lucide-react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

export const DesignProcess: React.FC = () => {
  const processImage = LUMIERE_IMAGES.process;
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      headline: 'Understanding your lifestyle, needs and vision.',
      description: 'We listen deeply to your daily routines, aesthetic yearnings, storage requirements, and spatial aspirations during an in-depth creative briefing.',
      icon: Compass,
      duration: 'Week 1–2',
    },
    {
      num: '02',
      title: 'CONCEPT',
      headline: 'Developing the design direction.',
      description: 'Translating emotional narratives into cohesive mood boards, lighting strategies, spatial diagrams, and curated physical material palettes.',
      icon: Lightbulb,
      duration: 'Week 3–4',
    },
    {
      num: '03',
      title: 'DESIGN',
      headline: 'Creating layouts, materials and details.',
      description: 'Comprehensive architectural millwork drawings, MEP integration, fixture schedules, photorealistic 2D renders, and technical specifications.',
      icon: PenTool,
      duration: 'Week 5–8',
    },
    {
      num: '04',
      title: 'BUILD',
      headline: 'Bringing the design to life.',
      description: 'Rigorous on-site supervision, collaborating with master joiners, stonemasons, and engineers to ensure exact execution down to the millimeter.',
      icon: Hammer,
      duration: 'Month 3–6',
    },
    {
      num: '05',
      title: 'REVEAL',
      headline: 'Delivering a finished space you love.',
      description: 'Turnkey styling, bespoke art installation, ambient lighting programming, and delivering the keys to your calm, elevated home.',
      icon: KeyRound,
      duration: 'Completion',
    },
  ];

  return (
    <section
      id="process"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#1F1B18] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 5-Step Clean Timeline */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>METHODOLOGY & EXECUTION</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] mb-12 leading-[1.08]">
              Our Process
            </h2>

            {/* Timeline Steps List with Minimal Lines */}
            <div className="relative pl-6 sm:pl-8 space-y-8 border-l border-[#E2D8CC]">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className="relative group cursor-pointer"
                  >
                    {/* Minimal Node on the Timeline Line */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'border-[#C5A880] bg-[#1F1B18] scale-125'
                          : 'border-[#CBBBAA] bg-[#FAF8F5] group-hover:border-[#C5A880]'
                      }`}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />}
                    </div>

                    <div
                      className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-[#F5F1EA] border border-[#E0D7CC] shadow-sm'
                          : 'bg-transparent border border-transparent hover:bg-[#F8F5F0]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-xs text-[#C5A880] font-semibold tracking-widest">
                            {step.num}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B18] font-normal tracking-wide">
                            {step.title}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono text-[#8C8072] tracking-wider uppercase">
                          {step.duration}
                        </span>
                      </div>

                      <div className="font-serif italic text-base text-[#524941] mb-2 font-normal">
                        “{step.headline}”
                      </div>

                      <p className="text-xs sm:text-sm text-[#6B6156] font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Interior Architecture Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#EAE3D9] group mb-6">
              <ImageWithFallback
                src={processImage.url}
                fallbackSrc={processImage.fallbackUrl}
                alt={processImage.alt}
                containerClassName="w-full h-[460px] sm:h-[580px]"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                overlayGradient="bg-gradient-to-t from-[#1F1B18]/70 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5 right-5 bg-[#1F1B18]/85 backdrop-blur-md p-4 rounded-xl border border-white/10 text-[#FAF8F5]">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-[#C5A880] uppercase tracking-widest mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>STUDIO ATELIER • DRAWINGS & MATERIAL SPEC</span>
                </div>
                <div className="font-serif text-sm font-light text-[#E8DFD5]">
                  Every joint, reveal gap, and lighting angle is coordinated before physical construction commences.
                </div>
              </div>
            </div>

            {/* Studio Commitment Pill */}
            <div className="p-5 rounded-2xl bg-[#F5F2EB] border border-[#EAE3D9] flex items-center justify-between text-xs font-mono text-[#6B6156]">
              <span>FIXED TIMELINES & TRANSPARENT PROCUREMENT</span>
              <span className="text-[#C5A880]">✦ 100% QUALITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
