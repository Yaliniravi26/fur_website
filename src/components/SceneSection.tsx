import React, { useState } from 'react';
import { DayScene } from '../types';
import {
  Clock,
  Sparkles,
  Volume2,
  Eye,
  Wind,
  Coffee,
  Sun,
  Moon,
  ChevronDown,
  RotateCcw,
  ArrowDown,
  CheckCircle2,
  Heart,
} from 'lucide-react';

interface SceneSectionProps {
  scene: DayScene;
  index: number;
  totalScenes: number;
  onNextScene: () => void;
  onRestartDay: () => void;
  onInteractiveAction: (actionName: string) => void;
}

export const SceneSection: React.FC<SceneSectionProps> = ({
  scene,
  index,
  totalScenes,
  onNextScene,
  onRestartDay,
  onInteractiveAction,
}) => {
  const isHero = index === 0;
  const isFinal = index === totalScenes - 1;
  const [interacted, setInteracted] = useState(false);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleAction = () => {
    setInteracted(true);
    if (scene.actionLabel) {
      setActionFeedback(`— ${scene.actionLabel.toLowerCase()} experienced`);
      setTimeout(() => setActionFeedback(null), 3500);
    }
    onInteractiveAction(scene.id);
  };

  return (
    <section
      id={`scene-${scene.id}`}
      data-scene-index={index}
      className="relative min-h-screen w-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-24 select-none"
    >
      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Timestamp & Milestone Tag */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-900/60 backdrop-blur-md border border-white/10 text-amber-200/90 font-mono text-xs tracking-widest uppercase">
            <Clock className="w-3 h-3 text-amber-300" />
            <span>{scene.timeString}</span>
          </div>

          <span className="text-[11px] font-mono tracking-widest text-stone-400 uppercase">
            CHAPTER {String(index + 1).padStart(2, '0')} / {String(totalScenes).padStart(2, '0')}
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF6F0] mb-3 leading-[1.08]">
          {scene.title}
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-2xl text-amber-100/80 max-w-2xl mb-8 leading-relaxed">
          “{scene.tagline}”
        </p>

        {/* Prose narrative */}
        <div className="space-y-4 max-w-2xl text-stone-300/90 text-sm sm:text-base leading-relaxed font-light mb-8">
          {scene.narrative.map((paragraph: string, pIdx: number) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
        </div>

        {/* Sensory Details Card (Editorial Visual, Sound, Atmosphere) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-[#141211]/60 backdrop-blur-md border border-white/5 max-w-3xl mb-8 text-xs font-mono">
          <div className="flex items-start space-x-2.5">
            <Eye className="w-4 h-4 text-amber-300/80 shrink-0 mt-0.5" />
            <div>
              <div className="text-stone-400/80 uppercase tracking-wider text-[10px] mb-0.5">Visual</div>
              <div className="text-stone-200/90 font-sans leading-normal text-xs">{scene.sensoryNotes.visual}</div>
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <Volume2 className="w-4 h-4 text-amber-300/80 shrink-0 mt-0.5" />
            <div>
              <div className="text-stone-400/80 uppercase tracking-wider text-[10px] mb-0.5">Sound</div>
              <div className="text-stone-200/90 font-sans leading-normal text-xs">{scene.sensoryNotes.sound}</div>
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <Wind className="w-4 h-4 text-amber-300/80 shrink-0 mt-0.5" />
            <div>
              <div className="text-stone-400/80 uppercase tracking-wider text-[10px] mb-0.5">Atmosphere</div>
              <div className="text-stone-200/90 font-sans leading-normal text-xs">{scene.sensoryNotes.atmosphere}</div>
            </div>
          </div>
        </div>

        {/* Interactive Actions & Progression */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Main Context Action */}
          {scene.actionLabel && !isFinal && (
            <button
              onClick={handleAction}
              className={`px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center space-x-2 shadow-lg ${
                interacted
                  ? 'bg-amber-900/40 text-amber-200 border border-amber-600/40'
                  : 'bg-[#E6BE8A] hover:bg-[#edd0a6] text-[#1a1715] font-semibold hover:scale-105 shadow-amber-950/40'
              }`}
            >
              {interacted ? <CheckCircle2 className="w-4 h-4 text-amber-300" /> : <Sparkles className="w-4 h-4" />}
              <span>{scene.actionLabel}</span>
            </button>
          )}

          {/* Hero Start CTA */}
          {isHero && (
            <button
              onClick={onNextScene}
              className="px-7 py-3.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-white/10 text-stone-200 font-mono text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center space-x-2 hover:border-amber-400/40"
            >
              <span>CONTINUE SCROLLING</span>
              <ArrowDown className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
            </button>
          )}

          {/* Final 11:30 PM Scene: Tomorrow circular restart */}
          {isFinal && (
            <div className="space-y-4 w-full max-w-md pt-4">
              <div className="p-6 rounded-3xl bg-[#141211]/80 backdrop-blur-lg border border-amber-500/20 shadow-2xl">
                <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400 mb-1">
                  TOMORROW
                </div>
                <div className="font-serif text-3xl text-stone-100 mb-2">
                  06:30 AM
                </div>
                <p className="text-stone-300 text-xs leading-relaxed mb-5 font-light">
                  A new day will arrive with clean light and fresh possibilities. The circle begins anew.
                </p>
                <button
                  onClick={onRestartDay}
                  className="w-full py-3.5 rounded-full bg-[#E6BE8A] hover:bg-[#edd0a6] text-[#141211] font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.02]"
                >
                  <RotateCcw className="w-4 h-4 text-[#141211]" />
                  <span>BEGIN TOMORROW → 06:30 AM</span>
                </button>
              </div>
            </div>
          )}

          {/* Action Feedback Prompt */}
          {actionFeedback && (
            <span className="text-xs font-serif italic text-amber-300/90 animate-fade-in">
              {actionFeedback}
            </span>
          )}

          {/* Subtle 3D Interaction Hint */}
          {scene.interactivityHint && !isFinal && (
            <span className="text-[11px] font-mono text-stone-400/60 hidden lg:inline-block">
              ✦ {scene.interactivityHint}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};
