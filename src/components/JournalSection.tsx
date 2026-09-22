import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, BookOpen, X } from 'lucide-react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

interface ArticleData {
  id: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  image: typeof LUMIERE_IMAGES.journal01;
}

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

  const articles: ArticleData[] = [
    {
      id: 'calm-living-room',
      title: 'How to Create a Calm Living Room',
      readTime: '4 min read',
      date: 'Autumn 2026',
      excerpt: 'Why low-profile furniture, indirect ambient lighting, and acoustic softening matter more than decorative trends.',
      content: [
        'The modern home is constantly assaulted by cognitive noise—chattering screens, pinging devices, and chaotic exterior stimuli. A living room should serve not as a showcase for guests, but as an acoustic and visual sanctuary for decompression.',
        'Begin by lowering the center of visual gravity. Low-profile seating with deep cushions invites horizontal relaxation and grounds the room. Keep vertical surfaces quiet: unadorned lime wash or textured plaster reflects light with soft matte diffusion rather than harsh specular glare.',
        'Lighting must be layered across three distinct planes: floor-level uplights for soft ambient perimeter glows, mid-level table lamps with linen diffusers for reading, and zero harsh overhead downlights.',
      ],
      image: LUMIERE_IMAGES.journal01,
    },
    {
      id: 'right-materials',
      title: 'The Art of Choosing the Right Materials',
      readTime: '6 min read',
      date: 'Summer 2026',
      excerpt: 'Exploring the tactile dialogue between raw travertine, unvarnished white oak, and hand-finished bronze.',
      content: [
        'True luxury is never loud; it is tactile. When an owner brushes their fingers against a hand-chiseled travertine hearth or grips a solid cast-brass door pull, their body registers authentic geological and metallurgical permanence.',
        'When selecting a palette, contrast densities: pair the cool, porous solidity of stone with the warm, resilient fibrousness of quartersawn white oak. Balance both with the softness of unbleached Belgian linen and heavyweight bouclé upholstery.',
        'Never choose materials that fear age. The mark of noble design is that after ten years of daily family touch, the space looks more dignified than the day it was unveiled.',
      ],
      image: LUMIERE_IMAGES.journal02,
    },
    {
      id: 'design-principles',
      title: '5 Timeless Interior Design Principles',
      readTime: '5 min read',
      date: 'Spring 2026',
      excerpt: 'Essential spatial maxims that outlast seasonal fads: proportion, light, flow, restraint, and authenticity.',
      content: [
        '1. Respect the Volumetric Proportion: Furniture should be scaled to room volume, preserving wide circulation lanes.',
        '2. Choreograph Natural Light: Window apertures should be unobstructed, allowing changing daylight to mark the passage of hours.',
        '3. Functional Concealment: Daily operational clutter must have dedicated, custom-tailored architectural cabinetry.',
        '4. The Power of Restraint: What you leave out of a room is as vital as what you place into it. Negative space is oxygen.',
        '5. Authentic Patina: Cherish authentic materials over imitation veneers.',
      ],
      image: LUMIERE_IMAGES.journal03,
    },
  ];

  return (
    <section
      id="journal"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#1F1B18] border-b border-[#EAE3D9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>EDITORIAL ARCHIVE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] leading-[1.08]">
              Notes on <br />
              <span className="italic font-normal text-[#8C8072]">Beautiful Living</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#6B6156] font-light leading-relaxed">
            Essays on architectural proportion, spatial psychology, and the art of cultivating peaceful domestic environments.
          </p>
        </div>

        {/* 3 Editorial Articles with DIFFERENT Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/11] mb-5 bg-[#1E1B18] border border-[#EAE3D9] shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <ImageWithFallback
                    src={art.image.url}
                    fallbackSrc={art.image.fallbackUrl}
                    alt={art.image.alt}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#1F1B18]/75 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#E8DFD5] uppercase border border-white/10">
                      {art.readTime}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-3 text-xs font-mono text-[#8C8072] mb-2 uppercase tracking-wider">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>ESSAY</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-[#1F1B18] font-normal leading-snug group-hover:text-[#9E7E52] transition-colors mb-3">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#6B6156] font-light leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              {/* Read Article Link */}
              <div className="pt-4 border-t border-[#EAE3D9] flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[#1F1B18] group-hover:text-[#C5A880] transition-colors">
                <span>Read Essay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reading Lightbox Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#FAF8F5] text-[#1F1B18] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#EAE3D9]">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between bg-[#F5F2EB]">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#C5A880] uppercase tracking-widest">
                <BookOpen className="w-4 h-4" />
                <span>LUMIÈRE JOURNAL • {selectedArticle.date}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full hover:bg-[#EAE3D9] text-[#1F1B18] transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#201C18] border border-[#EAE3D9]">
                <ImageWithFallback
                  src={selectedArticle.image.url}
                  fallbackSrc={selectedArticle.image.fallbackUrl}
                  alt={selectedArticle.image.alt}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1B18] font-normal leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#524941] font-light leading-relaxed">
                {selectedArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#EAE3D9] bg-[#F5F2EB] flex items-center justify-between text-xs font-mono text-[#8C8072]">
              <span>Curated by Lumière Interiors Studio</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-full bg-[#1F1B18] text-[#FAF8F5] hover:bg-[#342D28] transition-colors cursor-pointer"
              >
                Close Essay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
