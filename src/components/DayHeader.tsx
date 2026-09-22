import React, { useState } from 'react';
import { Volume2, VolumeX, Clock, Compass, Sparkles, BookOpen } from 'lucide-react';
import { DAY_SCENES } from '../data/scenesData';
import { dailySoundscape } from '../utils/dailySoundscape';

interface DayHeaderProps {
  currentSceneIndex: number;
  scrollProgress: number;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  onOpenStorySummary: () => void;
}

export const DayHeader: React.FC<DayHeaderProps> = ({
  currentSceneIndex,
  scrollProgress,
  isAudioPlaying,
  onToggleAudio,
  onOpenStorySummary,
}) => {
  const [volume, setVolume] = useState(0.35);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const currentScene = DAY_SCENES[currentSceneIndex] || DAY_SCENES[0];

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    dailySoundscape.setVolume(val);
  };

  return (
    <>
      {/* Top 24-Hour Horizon Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-stone-900 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-200/60 via-[#E6BE8A] to-amber-500 transition-all duration-150 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
        />
      </div>

      <header
        id="daily-life-header"
        className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between pointer-events-none bg-gradient-to-b from-[#100E0D]/80 via-[#100E0D]/40 to-transparent backdrop-blur-[2px]"
      >
        {/* Left: Brand & Day Indicator */}
        <div className="flex items-center space-x-3 pointer-events-auto">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-serif tracking-[0.25em] text-xs sm:text-sm font-semibold uppercase text-stone-100">
                DAILY LIFE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
            </div>
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-stone-400/80 uppercase mt-0.5">
              <span>MONDAY</span>
              <span>•</span>
              <span className="text-amber-300/80">DAY 01</span>
            </div>
          </div>
        </div>

        {/* Center: Live Time & Milestone */}
        <div className="pointer-events-auto hidden sm:flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#181513]/70 backdrop-blur-md border border-white/5 shadow-lg">
          <Clock className="w-3.5 h-3.5 text-amber-300/80 animate-spin-slow" />
          <div className="flex items-baseline space-x-2">
            <span className="font-mono text-xs font-semibold text-stone-100 tracking-wider">
              {currentScene.timeString}
            </span>
            <span className="text-[10px] font-serif italic text-stone-400 tracking-wide">
              {currentScene.title}
            </span>
          </div>
        </div>

        {/* Right: Ambient Audio & Story Controls */}
        <div className="flex items-center space-x-2 sm:space-y-0 sm:space-x-3 pointer-events-auto">
          {/* Audio Soundscape Control */}
          <div className="relative flex items-center">
            <button
              onClick={onToggleAudio}
              onMouseEnter={() => setShowVolumeSlider(true)}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                isAudioPlaying
                  ? 'bg-amber-950/40 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(212,163,115,0.25)]'
                  : 'bg-[#181513]/60 border-white/5 text-stone-400 hover:text-stone-200 hover:border-white/10'
              }`}
              title={isAudioPlaying ? 'Mute ambient soundscape' : 'Enable ambient soundscape'}
              aria-label="Toggle Soundscape"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                  {/* Subtle Audio Wave Bars */}
                  <span className="hidden md:flex items-center space-x-0.5 h-3">
                    <span className="w-0.5 h-2 bg-amber-300 animate-pulse rounded-full" />
                    <span className="w-0.5 h-3 bg-amber-300/80 animate-pulse rounded-full delay-75" />
                    <span className="w-0.5 h-1.5 bg-amber-300/60 animate-pulse rounded-full delay-150" />
                  </span>
                </>
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-stone-500" />
              )}
            </button>

            {/* Volume slider popover on hover */}
            {showVolumeSlider && isAudioPlaying && (
              <div
                onMouseLeave={() => setShowVolumeSlider(false)}
                className="absolute right-0 top-full mt-2 py-2 px-3 rounded-xl bg-[#1a1715]/95 backdrop-blur-md border border-white/10 shadow-2xl flex items-center space-x-2"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 accent-amber-400 cursor-pointer h-1 bg-stone-700 rounded-lg appearance-none"
                  aria-label="Volume slider"
                />
                <span className="text-[10px] font-mono text-stone-400 w-6">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            )}
          </div>

          {/* Daily Diary Summary Button */}
          <button
            onClick={onOpenStorySummary}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#181513]/60 hover:bg-[#201c19] border border-white/5 hover:border-white/10 text-stone-300 hover:text-stone-100 transition-all duration-300 cursor-pointer flex items-center space-x-1.5"
            title="Read Daily Diary Summary"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-300/80" />
            <span className="hidden sm:inline font-mono text-[11px] tracking-wider uppercase">
              Diary
            </span>
          </button>
        </div>
      </header>
    </>
  );
};
