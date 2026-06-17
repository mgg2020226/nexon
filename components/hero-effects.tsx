"use client";

import { useMemo, useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  floatX: number;
  floatY: number;
  colorIndex: number;
}

const PARTICLE_COLORS = ["#50CEFF", "#133ED8", "#020367"];

export function HeroEffects({ particleCount }: { particleCount: number }) {
  const [hydrated, setHydrated] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 12 + 14,
        delay: Math.random() * 6,
        floatX: (Math.random() - 0.5) * 70,
        floatY: (Math.random() - 0.5) * 70,
        colorIndex: i % 3,
      })),
    [particleCount]
  );
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const card = glowRef.current?.closest("[data-hero-card]") as HTMLElement | null;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Mouse-follow glow sentinel — used to locate the card via closest() */}
      <div ref={glowRef} aria-hidden className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), rgba(80,206,255,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Floating particles */}
      {hydrated && particles.map((p) => (
        <div
          key={p.id}
          aria-hidden
          className="absolute rounded-full pointer-events-none z-10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: PARTICLE_COLORS[p.colorIndex],
            opacity: 0.35,
            filter: "blur(1px)",
            animation: `bgHeroFloat ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            "--float-x": `${p.floatX}px`,
            "--float-y": `${p.floatY}px`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}
