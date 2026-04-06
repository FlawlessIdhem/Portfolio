"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type HeroRevealPortraitProps = {
  baseImage: string;
  revealImage: string;
  className?: string;
};

type Point = {
  x: number;
  y: number;
  life: number;
};

export default function HeroRevealPortrait({
  baseImage,
  revealImage,
  className = "",
}: HeroRevealPortraitProps) {
  const [trail, setTrail] = useState<Point[]>([]);
  const isHoveringRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setTrail((prev) => {
      const next = [...prev, { x, y, life: 1 }];
      return next.slice(-18);
    });
  };

  useEffect(() => {
    const tick = () => {
      setTrail((prev) =>
        prev
          .map((point) => ({
            ...point,
            life: point.life - (isHoveringRef.current ? 0.007 : 0.014),
          }))
          .filter((point) => point.life > 0)
      );

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const wormMask = useMemo(() => {
  if (trail.length === 0) return "";

  return trail
    .map((point, index) => {
      const t = index / Math.max(trail.length - 1, 1);
      const size = 8 + t * 10;
      const fade = size + 10;

      const solid = Math.max(0, Math.min(100, size * point.life));
      const soft = Math.max(solid + 6, fade * point.life + 8);

      return `radial-gradient(circle at ${point.x}% ${point.y}%, black 0%, black ${solid}%, transparent ${soft}%)`;
    })
    .join(",");
}, [trail]);

  return (
    <div
      className={`absolute bottom-[190px] left-1/2 w-[100%] max-w-none -translate-x-1/2 ${className}`}
      onMouseEnter={() => {
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
      }}
      onMouseMove={handleMove}
    >
      <div className="relative">
        <img
          src={baseImage}
          alt="Base portrait"
          className="block w-full select-none"
          draggable={false}
        />

        <div
        className="absolute inset-0"
        style={{
            WebkitMaskImage: wormMask || undefined,
            maskImage: wormMask || undefined,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            opacity: trail.length > 0 ? 1 : 0,
            
        }}
        >
          <img
            src={revealImage}
            alt="Reveal portrait"
            className="block h-full w-full -translate-y-2 scale-[1.1] select-none object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}