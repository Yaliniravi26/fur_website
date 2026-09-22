import React from 'react';
import { X, BookOpen, Clock, Sparkles, Sun, Moon, ArrowRight } from 'lucide-react';
import { DAY_SCENES } from '../data/scenesData';

interface StorySummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToScene: (index: number) => void;
}

export const StorySummaryModal: React.FC<StorySummaryModalProps> = ({
  isOpen,
  onClose,
  onJumpToScene,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl bg-[#171412] border border-amber-900/30 text-stone-100 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/20 text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF6F0]">
                A Day in Chapters
              </h2>
              <p className="text-xs font-mono text-stone-400 tracking-wider">
                14 MOMENTS • 06:30 AM TO 11:30 PM
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Diary Entries List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <p className="text-xs text-stone-300/80 italic font-serif leading-relaxed border-l-2 border-amber-500/40 pl-3 py-1">
            “Nothing extraordinary happened today. But somehow, it was beautiful.”
          </p>

          <div className="space-y-3 pt-2">
            {DAY_SCENES.map((scene, idx) => (
              <div
                key={scene.id}
                onClick={() => {
                  onJumpToScene(idx);
                  onClose();
                }}
                className="group p-3.5 rounded-2xl bg-[#1e1a17]/60 hover:bg-[#25201c] border border-white/5 hover:border-amber-500/30 transition-all duration-300 cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-amber-300/80 w-16 shrink-0">
                    {scene.timeString}
                  </span>
                  <div>
                    <div className="font-serif text-sm text-stone-200 group-hover:text-amber-200 transition-colors">
                      {scene.title}
                    </div>
                    <div className="text-[11px] text-stone-400 font-light truncate max-w-[280px] sm:max-w-md">
                      {scene.tagline}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-xs text-stone-500 group-hover:text-amber-300 transition-colors">
                  <span className="hidden sm:inline font-mono text-[10px] uppercase">Jump</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 bg-[#141210] flex items-center justify-between text-xs font-mono text-stone-400">
          <span>DAILY LIFE — Cinematic Diary</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
