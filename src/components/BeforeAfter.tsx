import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal, Sparkles, ArrowLeftRight } from 'lucide-react';
import { LUMIERE_IMAGES } from '../data/interiorImages';
import { ImageWithFallback } from './ImageWithFallback';

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImg = LUMIERE_IMAGES.before;
  const afterImg = LUMIERE_IMAGES.after;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <section
      id="before-after"
      className="relative py-28 sm:py-36 px-5 sm:px-8 lg:px-12 bg-[#FAF8F5] text-[#1F1B18] border-b border-[#EAE3D9] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#C5A880] uppercase mb-4 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>TRANSFORMATION STUDY</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1F1B18] leading-[1.08] mb-4">
            From Ordinary to <br />
            <span className="italic font-normal text-[#8C8072]">Extraordinary</span>
          </h2>

          <p className="font-sans text-[#6B6156] text-sm sm:text-base font-light leading-relaxed">
            Drag the comparison slider to experience how architectural re-zoning, intentional lighting, and noble finishes redefine domestic living.
          </p>
        </div>

        {/* Draggable Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] shadow-2xl border border-[#EAE3D9] cursor-ew-resize group"
        >
          {/* AFTER Image (Full background layer) */}
          <div className="absolute inset-0 w-full h-full">
            <ImageWithFallback
              src={afterImg.url}
              fallbackSrc={afterImg.fallbackUrl}
              alt={afterImg.alt}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            {/* After Tag */}
            <div className="absolute top-6 right-6 z-10 px-4 py-1.5 rounded-full bg-[#1F1B18]/85 backdrop-blur-md border border-white/10 text-[#D8C3A5] font-mono text-xs tracking-widest uppercase">
              AFTER — LUMIÈRE RENOVATION
            </div>
          </div>

          {/* BEFORE Image (Clipped Left Layer) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}>
              <ImageWithFallback
                src={beforeImg.url}
                fallbackSrc={beforeImg.fallbackUrl}
                alt={beforeImg.alt}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover brightness-[0.88] grayscale-[25%]"
              />
            </div>
            {/* Before Tag */}
            <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-[#1F1B18]/85 backdrop-blur-md border border-white/10 text-stone-300 font-mono text-xs tracking-widest uppercase">
              BEFORE — PREVIOUS LAYOUT
            </div>
          </div>

          {/* Divider Handle Line */}
          <div
            className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center Draggable Knob */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FAF8F5] border-2 border-[#1F1B18] shadow-2xl flex items-center justify-center text-[#1F1B18] transition-transform duration-150 group-hover:scale-110">
              <ArrowLeftRight className="w-4 h-4 text-[#1F1B18]" />
            </div>
          </div>

          {/* Bottom Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-[#1F1B18]/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#E8DFD5] tracking-widest uppercase hidden sm:block">
            DRAG TO REVEAL TRANSFORMATION
          </div>
        </div>
      </div>
    </section>
  );
};
