import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  aspectRatio?: string;
  overlayGradient?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  aspectRatio,
  overlayGradient,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#1E1B18] ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#1B1816] text-[#A69B8F] text-center border border-white/5">
          <span className="font-serif italic text-sm text-[#D7CEC3]">{alt}</span>
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C8072] uppercase mt-2">
            LUMIÈRE ARCHITECTURAL ARCHIVE
          </span>
        </div>
      )}

      {/* Optional gradient overlay for text legibility */}
      {overlayGradient && (
        <div className={`absolute inset-0 pointer-events-none ${overlayGradient}`} />
      )}
    </div>
  );
};
