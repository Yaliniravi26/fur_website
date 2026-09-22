import React from 'react';
import { Home, Maximize2, Armchair, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      num: '01',
      title: 'RESIDENTIAL INTERIORS',
      tagline: 'Turnkey architectural transformations',
      desc: 'Complete interior design for apartments, villas and homes.',
      deliverables: ['Spatial Concept & 3D Visuals', 'Architectural Millwork', 'Lighting & MEP Planning', 'Site Execution Management'],
      icon: Home,
    },
    {
      num: '02',
      title: 'SPACE PLANNING',
      tagline: 'Flow, balance and ergonomic clarity',
      desc: 'Thoughtful layouts that maximize comfort and functionality.',
      deliverables: ['Circulation Diagrams', 'Zoning & Sightline Studies', 'Storage Optimization', 'Custom Built-in Architecture'],
      icon: Maximize2,
    },
    {
      num: '03',
      title: 'CUSTOM FURNISHING',
      tagline: 'Bespoke craftsmanship & curations',
      desc: 'Furniture and details designed specifically for your space.',
      deliverables: ['Tailored Joinery & Millwork', 'Curated Art & Sculptures', 'Fine Fabric & Upholstery', 'Handcrafted Dining Suites'],
      icon: Armchair,
    },
    {
      num: '04',
      title: 'RENOVATION & STYLING',
      tagline: 'Elevating existing architectural souls',
      desc: 'Transform existing spaces with refined materials and finishes.',
      deliverables: ['Structural Material Overhauls', 'Surface & Finish Refinements', 'Atmospheric Lighting Scenes', 'Curated Accessorization'],
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#F5F2EB] text-[#1F1B18] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>STUDIO SERVICES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] leading-[1.08]">
              Designed Around <br className="hidden sm:block" />
              <span className="italic font-normal text-[#8C8072]">Your Life</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#6B6156] font-light leading-relaxed">
            From comprehensive whole-estate commissions to surgical interior renovations, our studio brings rigorous architectural discipline and tactile warmth to every square foot.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesList.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.num}
                className="group relative p-8 sm:p-9 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#C5A880]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Line Icon */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EFEAE2]">
                    <span className="font-mono text-xs text-[#C5A880] tracking-widest font-semibold">
                      {svc.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#F5F2EB] group-hover:bg-[#C5A880]/10 text-[#8C8072] group-hover:text-[#C5A880] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1F1B18] font-normal tracking-wide mb-2 leading-tight group-hover:text-[#9E7E52] transition-colors">
                    {svc.title}
                  </h3>
                  <div className="text-[11px] font-mono tracking-wider text-[#A69B8F] uppercase mb-4">
                    {svc.tagline}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-[#5C534A] font-light leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Deliverables tags */}
                  <ul className="space-y-1.5 mb-8">
                    {svc.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-[#8C8072] flex items-center space-x-2">
                        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Service Link */}
                <button
                  onClick={() => onSelectService(svc.title)}
                  className="pt-4 border-t border-[#EFEAE2] text-xs font-mono tracking-[0.16em] uppercase text-[#1F1B18] group-hover:text-[#C5A880] flex items-center justify-between transition-colors cursor-pointer w-full text-left"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
