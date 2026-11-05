"use client";

import React, { useEffect, useRef } from "react";

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
  palette: string[];
}

const FESTIVE_PALETTES = [
  // Royal Golden Saffron
  ["#FFD700", "#F59E0B", "#FBBF24", "#FEF08A", "#D97706"],
  // Ruby Red & Rose
  ["#EF4444", "#DC2626", "#F43F5E", "#FDA4AF", "#FFE4E6"],
  // Emerald Green & Mint
  ["#10B981", "#059669", "#34D399", "#6EE7B7", "#A7F3D0"],
  // Peacock Blue & Electric Cyan
  ["#06B6D4", "#3B82F6", "#60A5FA", "#38BDF8", "#E0F2FE"],
  // Majestic Violet & Magenta
  ["#A855F7", "#EC4899", "#C084FC", "#F472B6", "#FAF5FF"],
];

export function InteractiveCrackersOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let isRunning = true;
    let lastAutoLaunch = Date.now();

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const burstAt = (x: number, y: number, palette?: string[], count = 65) => {
      const colors = palette || FESTIVE_PALETTES[Math.floor(Math.random() * FESTIVE_PALETTES.length)];
      const baseSpeed = 2.4 + Math.random() * 3.6;

      // Main explosion ring & chrysanthemum sparks
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
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

      // Crackling gold sparklers / phuljhadi sparks
      const sparkCount = 20;
      for (let j = 0; j < sparkCount; j++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (baseSpeed * 1.3);
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
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = startX ?? w * 0.1 + Math.random() * (w * 0.8);
      const endX = targetX ?? x + (Math.random() - 0.5) * (w * 0.2);
      const endY = targetY ?? h * 0.12 + Math.random() * (h * 0.38);
      const dy = endY - h;
      const dx = endX - x;
      const steps = 38 + Math.random() * 14;
      const palette = FESTIVE_PALETTES[Math.floor(Math.random() * FESTIVE_PALETTES.length)];

      rockets.push({
        x,
        y: h,
        targetY: endY,
        vx: dx / steps,
        vy: dy / steps,
        color: palette[0],
        trail: [],
        palette,
      });
    };

    // Auto-launch initial burst
    setTimeout(() => launchRocket(), 300);
    setTimeout(() => launchRocket(), 800);
    setTimeout(() => launchRocket(), 1400);

    // Event listener for user click (or trigger from floating button)
    const handleCanvasClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      burstAt(x, y, undefined, 75);
      launchRocket(x + (Math.random() - 0.5) * 80, x, Math.max(80, y - 100));
    };
    canvas.addEventListener("click", handleCanvasClick);

    const loop = () => {
      if (!isRunning) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // AUTOMATIC CRACKERS: Launch a new rocket automatically every 1.6 to 2.2 seconds!
      const now = Date.now();
      if (now - lastAutoLaunch > 1750 + Math.random() * 700) {
        launchRocket();
        // Occasional double rocket burst
        if (Math.random() > 0.4) {
          setTimeout(() => launchRocket(), 280);
        }
        lastAutoLaunch = now;
      }

      // 1. Update & draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 7) r.trail.shift();

        r.x += r.vx;
        r.y += r.vy;

        // Draw trail
        ctx.beginPath();
        for (let j = 0; j < r.trail.length; j++) {
          const pt = r.trail[j];
          ctx.strokeStyle = `rgba(255, 215, 0, ${(j / r.trail.length) * 0.75})`;
          ctx.lineWidth = 2.5;
          if (j === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        // Draw glowing rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // When rocket reaches target height -> BURST!
        if (r.y <= r.targetY || r.vy >= 0) {
          burstAt(r.x, r.y, r.palette);
          rockets.splice(i, 1);
        }
      }

      // 2. Update & draw burst particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 5) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.052; // gentle realistic gravity
        p.vx *= 0.982; // air drag
        p.vy *= 0.982;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const flickerAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.4 : p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, flickerAlpha);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        // Trailing sparks
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

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  return (
    <canvas
      id="diwali-interactive-canvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60] w-full h-full"
      style={{ touchAction: "none" }}
    />
  );
}
