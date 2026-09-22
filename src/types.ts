export interface DayScene {
  id: string;
  timeString: string;       // e.g. "06:30 AM"
  hour: number;             // e.g. 6.5
  title: string;            // e.g. "GOOD MORNING."
  tagline: string;          // e.g. "Another ordinary day begins."
  category: 'dawn' | 'morning' | 'commute' | 'focus' | 'pause' | 'afternoon' | 'sunset' | 'evening' | 'night' | 'sleep';
  narrative: string[];      // 2-3 poetic editorial paragraphs
  sensoryNotes: {
    visual: string;
    sound: string;
    atmosphere: string;
  };
  interactivityHint?: string;
  actionLabel?: string;
  lightingDescription: string;
  palette: {
    bg: string;
    accent: string;
    text: string;
    subtext: string;
    ambient3d: number;
    sunColor3d: number;
    fogColor3d: number;
  };
}

export interface DayProgressState {
  currentSceneIndex: number;
  scrollProgress: number;   // 0 to 1
  currentTimeString: string;
  currentTitle: string;
  ambientLightFactor: number;
}
