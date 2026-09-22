import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';

interface InteractiveObjectToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const InteractiveObjectToast: React.FC<InteractiveObjectToastProps> = ({
  message,
  onDismiss,
}) => {
  if (!message) return null;

  return (
    <aside
      aria-label="Interactive note"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#1c1815]/90 backdrop-blur-md border border-amber-500/30 text-stone-200 shadow-2xl flex items-center space-x-3 text-xs sm:text-sm font-serif italic animate-bounce-subtle pointer-events-auto"
    >
      <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
      <span className="text-stone-100">{message}</span>
      <button
        onClick={onDismiss}
        className="p-1 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Dismiss toast"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
