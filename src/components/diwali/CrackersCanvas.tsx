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
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
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
  launchInterval = 1200,
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

    const isMobile = window.innerWidth < 768;
    const PARTICLES_PER_BURST = isMobile ? 22 : 44;
    const MAX_PARTICLES = isMobile ? 55 : 100;

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];

    const resize = () => {
      const dpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const createExplosion = (x: number, y: number, colors: string[]) => {
      if (particles.length > MAX_PARTICLES) return;

      const count = PARTICLES_PER_BURST;
      const baseSpeed = isMobile ? 2.3 + Math.random() * 2.2 : 2.6 + Math.random() * 3.0;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
        const speed = baseSpeed * (0.35 + Math.random() * 0.85);
        const color = colors[i % colors.length];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          alpha: 1,
          decay: isMobile ? 0.022 + Math.random() * 0.015 : 0.015 + Math.random() * 0.014,
          size: isMobile ? 1.6 + Math.random() * 1.4 : 1.8 + Math.random() * 1.8,
        });
      }
    };

    const spawnRocket = (startX?: number, targetX?: number, targetY?: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const x = startX ?? w * 0.15 + Math.random() * (w * 0.7);
      const endX = targetX ?? x + (Math.random() - 0.5) * (w * 0.2);
      const endY = targetY ?? h * 0.15 + Math.random() * (h * 0.35);
      const dy = endY - h;
      const dx = endX - x;
      const steps = isMobile ? 28 : 34;

      const palette = DIWALI_COLOR_PALETTES[Math.floor(Math.random() * DIWALI_COLOR_PALETTES.length)];

      rockets.push({
        x,
        y: h,
        targetY: endY,
        vx: dx / steps,
        vy: dy / steps,
        color: palette[0],
        burstColors: palette,
      });
    };

    // Initial festive burst
    spawnRocket();
    setTimeout(() => spawnRocket(), 450);

    const handleClick = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const colors = DIWALI_COLOR_PALETTES[Math.floor(Math.random() * DIWALI_COLOR_PALETTES.length)];
      createExplosion(x, y, colors);
    };

    if (interactive) {
      canvas.addEventListener("click", handleClick, { passive: true });
      canvas.addEventListener("touchstart", handleClick, { passive: true });
    }

    const render = () => {
      if (!isRunning) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      // Auto-launch rockets
      const now = Date.now();
      if (autoLaunch && now - lastLaunchTime > launchInterval) {
        if (rockets.length < (isMobile ? 2 : 3)) {
          spawnRocket();
        }
        lastLaunchTime = now;
      }

      // 1. Update & draw rockets (Zero shadowBlur)
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        const prevX = r.x;
        const prevY = r.y;

        r.x += r.vx;
        r.y += r.vy;

        // Motion trail
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(r.x, r.y);
        ctx.strokeStyle = "rgba(255, 215, 0, 0.75)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#FFF";
        ctx.fill();

        if (r.y <= r.targetY || r.vy >= 0) {
          createExplosion(r.x, r.y, r.burstColors);
          rockets.splice(i, 1);
        }
      }

      // 2. Update & draw explosion particles (Zero shadowBlur)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.055;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        canvas.removeEventListener("click", handleClick);
        canvas.removeEventListener("touchstart", handleClick);
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
