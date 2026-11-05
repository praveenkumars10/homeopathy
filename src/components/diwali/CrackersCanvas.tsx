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
  sparkle?: boolean;
}

interface Flash {
  x: number;
  y: number;
  radius: number;
  alpha: number;
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
  // Royal Saffron & Pure Gold
  ["#FFD700", "#FFA500", "#FF8C00", "#FFF8DC", "#F59E0B"],
  // Crimson Firecracker Red
  ["#FF1493", "#FF3B30", "#DC2626", "#FF9999", "#F43F5E"],
  // Emerald Starburst
  ["#00FF88", "#10B981", "#34D399", "#A7F3D0", "#A3E635"],
  // Electric Cyan & Royal Peacock
  ["#00F5FF", "#38BDF8", "#0284C7", "#E0F2FE", "#818CF8"],
  // Vibrant Festive Magenta
  ["#FF00A0", "#D946EF", "#C084FC", "#F472B6", "#FAF5FF"],
];

export function CrackersCanvas({
  className = "w-full h-full",
  autoLaunch = true,
  launchInterval = 1000,
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
    const PARTICLES_PER_BURST = isMobile ? 32 : 46;
    const MAX_PARTICLES = isMobile ? 90 : 140;

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];
    const flashes: Flash[] = [];

    const resize = () => {
      const dpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const createExplosion = (x: number, y: number, colors: string[]) => {
      // 1. Bright White Core Flash (authenticity visual)
      flashes.push({ x, y, radius: isMobile ? 12 : 16, alpha: 0.95 });

      // 2. Main High-Visibility Shell Particles
      const count = PARTICLES_PER_BURST;
      const baseSpeed = isMobile ? 2.8 + Math.random() * 2.4 : 3.2 + Math.random() * 3.2;

      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) break;
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
          decay: isMobile ? 0.018 + Math.random() * 0.014 : 0.013 + Math.random() * 0.012,
          size: isMobile ? 2.2 + Math.random() * 1.6 : 2.5 + Math.random() * 2.0,
        });
      }

      // 3. Shimmering Golden Sparklers (Anar / Phuljhadi embers)
      const sparkCount = isMobile ? 10 : 16;
      for (let j = 0; j < sparkCount; j++) {
        if (particles.length >= MAX_PARTICLES) break;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (baseSpeed * 0.8);
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: "#FFFBEB",
          alpha: 1,
          decay: 0.02 + Math.random() * 0.02,
          size: 1.5,
          sparkle: true,
        });
      }
    };

    const spawnRocket = (startX?: number, targetX?: number, targetY?: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const x = startX ?? w * 0.12 + Math.random() * (w * 0.76);
      const endX = targetX ?? x + (Math.random() - 0.5) * (w * 0.15);
      
      // On mobile, explode in the upper 40% open sky so it's 100% visible!
      const endY = targetY ?? (isMobile ? h * 0.08 + Math.random() * (h * 0.32) : h * 0.12 + Math.random() * (h * 0.36));
      const dy = endY - h;
      const dx = endX - x;
      const steps = isMobile ? 26 : 32;

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

    // Initial dual rocket burst
    spawnRocket(canvas.clientWidth * 0.3);
    setTimeout(() => spawnRocket(canvas.clientWidth * 0.7), 350);

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

      // 1. Draw Flash Bursts
      for (let f = flashes.length - 1; f >= 0; f--) {
        const flash = flashes[f];
        ctx.beginPath();
        ctx.arc(flash.x, flash.y, flash.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flash.alpha})`;
        ctx.fill();

        flash.radius += 3.5;
        flash.alpha -= 0.18;
        if (flash.alpha <= 0) {
          flashes.splice(f, 1);
        }
      }

      // 2. Update & Draw Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        const prevX = r.x;
        const prevY = r.y;

        r.x += r.vx;
        r.y += r.vy;

        // Vivid golden trail
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(r.x, r.y);
        ctx.strokeStyle = "#FDE047";
        ctx.lineWidth = isMobile ? 2.5 : 3.0;
        ctx.stroke();

        // White rocket apex head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        if (r.y <= r.targetY || r.vy >= 0) {
          createExplosion(r.x, r.y, r.burstColors);
          rockets.splice(i, 1);
        }
      }

      // 3. Update & Draw Shell Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.055; // natural gravity
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = Math.max(0, p.alpha);

        // Outer jewel-tone ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // White glowing hot core (makes particles POP vividly)
        if (!p.sparkle && p.size > 2.0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
        }
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
