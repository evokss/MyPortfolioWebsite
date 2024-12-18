import React, { useMemo } from "react";

// Seeded random number generator
const mulberry32 = (a) => {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// Utility function to generate consistent stars
const generateStars = (count, seed = 42) => {
  const random = mulberry32(seed);

  return Array.from({ length: count }, (_, index) => {
    const size = Math.floor(random() * 2) + 1; // 1-2px
    const left = Math.floor(random() * 100);
    const top = Math.floor(random() * 100);
    const animationDelay = Math.floor(random() * 5);

    return {
      id: index,
      size,
      left,
      top,
      animationDelay,
    };
  });
};

export const StarryBackground = ({ children, starCount = 100 }) => {
  // Use useMemo to ensure consistent star generation
  const stars = useMemo(() => generateStars(starCount), [starCount]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-gray-900 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white dark:bg-gray-300 rounded-full opacity-70 animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
};
