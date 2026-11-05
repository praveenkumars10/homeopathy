"use client";

import React, { useEffect, useRef } from "react";

interface CrackersCanvasProps {
  className?: string;
  autoLaunch?: boolean;
  launchInterval?: number;
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  size: number;
  flicker: boolean;
  trail: { x: number; y: number }[];
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  trail: { x: number; y: number }[];
  burstColors: string[];
}

const DIWALI_COLOR_PALETTES = [
  // Royal Gold & Saffron
  ["#FFD700", "#FFA500", "#FF8C00", "#FFF8DC", "#F59E0B"],
  // Ruby Red & Rose Gold
  ["#FF1493", "#FF4500", "#DC2626", "#FFB6C1", "#F43F5E"],
  // Emerald Green & Lime
  ["#10B981", "#059669", "#34D399", "#A7F3D0", "#84CC16"],
  // Majestic Violet & Cyan
  ["#A855F7", "#8B5CF6", "#06B6D4", "#E879F9", "#38BDF8"],
  // Multi-color Celebration
  ["#F59E0B", "#EF4444", "#10B981", "#3B82F6", "#EC4899", "#FDE047"],
];

export function CrackersCanvas({
  className = "w-full h-full",
  autoLaunch = true,
  launchInterval = 1100,
  interactive = true,
}: CrackersCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;
    let lastLaunchTime = Date.now();

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const createExplosion = (x: number, y: number, colors: string[]) => {
      const count = 75 + Math.floor(Math.random() * 55);
      const baseSpeed = 2.5 + Math.random() * 3.5;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = baseSpeed * (0.35 + Math.random() * 0.85);
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          alpha: 1,
          decay: 0.012 + Math.random() * 0.016,
          size: 1.8 + Math.random() * 2.2,
          flicker: Math.random() > 0.4,
          trail: [],
        });
      }

      // Add a golden ring or crackling sparklers (phuljhadi sparks)
      const sparkles = 25;
      for (let j = 0; j < sparkles; j++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (baseSpeed * 1.35);
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: "#FFFBEB",
          alpha: 1,
          decay: 0.02 + Math.random() * 0.03,
          size: 1.2,
          flicker: true,
          trail: [],
        });
      }
    };

    const launchRocket = (startX?: number, targetX?: number, targetY?: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const x = startX ?? w * 0.15 + Math.random() * w * 0.7;
      const endX = targetX ?? x + (Math.random() - 0.5) * (w * 0.2);
      const endY = targetY ?? h * 0.12 + Math.random() * h * 0.35;
      const dy = endY - h;
      const dx = endX - x;
      const steps = 40 + Math.random() * 15;

      const palette = DIWALI_COLOR_PALETTES[Math.floor(Math.random() * DIWALI_COLOR_PALETTES.length)];

      rockets.push({
        x,
        y: h,
        targetY: endY,
        vx: dx / steps,
        vy: dy / steps,
        color: palette[0],
        trail: [],
        burstColors: palette,
      });
    };

    // Launch a couple initially
    launchRocket();
    setTimeout(() => launchRocket(), 350);
    setTimeout(() => launchRocket(), 700);

    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Burst immediate firecracker at touch/click + launch an extra rocket
      const palette = DIWALI_COLOR_PALETTES[Math.floor(Math.random() * DIWALI_COLOR_PALETTES.length)];
      createExplosion(x, y, palette);
      launchRocket(x + (Math.random() - 0.5) * 100, x, Math.max(50, y - 80));
    };

    if (interactive) {
      canvas.addEventListener("click", handleClick);
    }

    const render = () => {
      if (!isRunning) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // Semi-transparent clear creates motion trails for crackers
      ctx.clearRect(0, 0, w, h);

      // Auto-launch rockets
      const now = Date.now();
      if (autoLaunch && now - lastLaunchTime > launchInterval) {
        launchRocket();
        if (Math.random() > 0.45) {
          // Double rocket launch
          setTimeout(() => launchRocket(), 200);
        }
        lastLaunchTime = now;
      }

      // 1. Update & draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 7) r.trail.shift();

        r.x += r.vx;
        r.y += r.vy;

        // Draw rocket trail
        ctx.beginPath();
        for (let j = 0; j < r.trail.length; j++) {
          const pt = r.trail[j];
          ctx.strokeStyle = `rgba(255, 215, 0, ${(j / r.trail.length) * 0.7})`;
          ctx.lineWidth = 2.5;
          if (j === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        // Draw rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFF";
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Has rocket reached apex or target?
        if (r.y <= r.targetY || r.vy >= 0) {
          createExplosion(r.x, r.y, r.burstColors);
          rockets.splice(i, 1);
        }
      }

      // 2. Update & draw explosion particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.055; // gentle gravity
        p.vx *= 0.982; // air drag
        p.vy *= 0.982;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle spark
        const flickerAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.4 : p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, flickerAlpha);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        // Draw subtle trailing spark
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let t = 1; t < p.trail.length; t++) {
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
          }
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size * 0.6;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        canvas.removeEventListener("click", handleClick);
      }
    };
  }, [autoLaunch, launchInterval, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`block select-none ${className}`}
      style={{ touchAction: "none" }}
    />
  );
}

