import React from 'react';

export interface TimelineMoment {
  id: string;
  time: string;
  label: string;
  sectionId: string;
}

export const TIMELINE_MOMENTS: TimelineMoment[] = [
  { id: 'hero', time: '06:30', label: 'Awaken', sectionId: 'hero-section' },
  { id: 'morning', time: '06:30', label: 'Morning', sectionId: 'section-morning' },
  { id: 'getReady', time: '07:15', label: 'Get Ready', sectionId: 'section-get-ready' },
  { id: 'breakfast', time: '08:00', label: 'Breakfast', sectionId: 'section-breakfast' },
  { id: 'onTheWay', time: '08:30', label: 'On The Way', sectionId: 'section-on-the-way' },
  { id: 'focus', time: '10:00', label: 'Focus', sectionId: 'section-focus' },
  { id: 'lunch', time: '13:00', label: 'Lunch', sectionId: 'section-lunch' },
  { id: 'afternoon', time: '15:30', label: 'Afternoon', sectionId: 'section-afternoon' },
  { id: 'evening', time: '18:00', label: 'Evening', sectionId: 'section-evening' },
  { id: 'goldenHour', time: '18:30', label: 'Golden Hour', sectionId: 'section-golden-hour' },
  { id: 'homeAgain', time: '20:00', label: 'Home Again', sectionId: 'section-home-again' },
  { id: 'dinner', time: '20:30', label: 'Dinner', sectionId: 'section-dinner' },
  { id: 'slowDown', time: '22:00', label: 'Slow Down', sectionId: 'section-slow-down' },
  { id: 'goodNight', time: '23:30', label: 'Good Night', sectionId: 'section-good-night' },
];

interface TimelineNavProps {
  currentMomentIndex: number;
  scrollProgress: number;
  onSelectMoment: (index: number) => void;
}

export const TimelineNav: React.FC<TimelineNavProps> = ({
  currentMomentIndex,
  scrollProgress,
  onSelectMoment,
}) => {
  return (
    <>
      {/* Mobile Horizontal Progress Indicator with Active Time Chip */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between px-4 py-2.5 rounded-full bg-[#181513]/90 backdrop-blur-md border border-white/10 shadow-2xl text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-200 font-semibold tracking-wider">
            {TIMELINE_MOMENTS[currentMomentIndex]?.time || '06:30'}
          </span>
          <span className="text-stone-400 text-[10px] uppercase truncate max-w-[120px]">
            {TIMELINE_MOMENTS[currentMomentIndex]?.label}
          </span>
        </div>

        {/* Mini progress bar */}
        <div className="flex-1 mx-4 h-1 bg-stone-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-[#E6BE8A] transition-all duration-150 ease-out"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        <span className="text-[10px] text-stone-500 font-mono">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

      {/* Desktop Minimal Fixed Vertical Timeline on the Right */}
      <aside
        id="desktop-vertical-timeline"
        aria-label="Daily Life timeline"
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end pointer-events-auto select-none"
      >
        <div className="flex flex-col items-end space-y-2.5 py-4 px-3 rounded-2xl bg-[#141211]/50 backdrop-blur-md border border-white/5 shadow-2xl">
          {TIMELINE_MOMENTS.map((moment, idx) => {
            const isActive = idx === currentMomentIndex;
            const isPassed = idx < currentMomentIndex;

            return (
              <button
                key={`${moment.id}-${idx}`}
                onClick={() => onSelectMoment(idx)}
                className="group relative flex items-center justify-end py-0.5 px-1 focus:outline-none transition-all duration-200 cursor-pointer"
                title={`${moment.time} — ${moment.label}`}
              >
                {/* Time Label on hover or active */}
                <div
                  className={`flex items-center space-x-2 mr-3 font-mono text-[11px] tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-amber-200 font-medium scale-105 opacity-100'
                      : 'text-stone-400/50 group-hover:text-stone-200 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <span className="text-stone-400 text-[10px] uppercase font-light hidden lg:inline">
                    {moment.label}
                  </span>
                  <span>{moment.time}</span>
                </div>

                {/* Timeline Bar Indicator */}
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-7 h-1.5 bg-[#E6BE8A] shadow-[0_0_12px_rgba(230,190,138,0.7)]'
                      : isPassed
                      ? 'w-2.5 h-1 bg-stone-500/60 group-hover:w-4 group-hover:bg-amber-300/80'
                      : 'w-1.5 h-1 bg-stone-700/60 group-hover:w-3 group-hover:bg-stone-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};
