import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: 'Every detail feels intentional. Our home finally feels like it belongs to us.',
      author: 'Ananya R.',
      role: 'Residential Client',
      project: 'Lumen Residence — Penthouse',
      rating: 5,
    },
    {
      quote: 'I loved how the team balanced functionality with a beautiful, timeless design.',
      author: 'Arjun M.',
      role: 'Villa Project',
      project: 'Casa Aurelia — Estate',
      rating: 5,
    },
    {
      quote: 'The entire process was thoughtful, professional and incredibly smooth.',
      author: 'Meera S.',
      role: 'Apartment Project',
      project: 'Urban Retreat — Duplex',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#F5F2EB] text-[#1F1B18] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>CLIENT REPUTATION</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] leading-[1.08] mb-4">
            Spaces Our <br className="hidden sm:block" />
            <span className="italic font-normal text-[#8C8072]">Clients Love</span>
          </h2>

          <p className="font-sans text-[#6B6156] text-sm sm:text-base font-light leading-relaxed">
            Quiet words from the patrons who reside in the environments we’ve shaped.
          </p>
        </div>

        {/* 3 Luxury Minimalist Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#C5A880]/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating in Champagne Gold */}
                <div className="flex items-center space-x-1 mb-6 text-[#C5A880]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-xl sm:text-2xl text-[#1F1B18] font-light leading-snug mb-8">
                  “{rev.quote}”
                </p>
              </div>

              {/* Author & Project info */}
              <div className="pt-6 border-t border-[#EAE3D9]">
                <div className="font-serif text-base text-[#1F1B18] font-medium">
                  — {rev.author}
                </div>
                <div className="text-xs font-mono text-[#8C8072] tracking-wider uppercase mt-0.5">
                  {rev.role}
                </div>
                <div className="text-[11px] font-mono text-[#A69B8F] mt-1">
                  {rev.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
