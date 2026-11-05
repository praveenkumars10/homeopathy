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
  palette: string[];
}

const FESTIVE_PALETTES = [
  // Royal Golden Saffron
  ["#FFD700", "#F59E0B", "#FBBF24", "#FEF08A", "#D97706"],
  // Ruby Red & Rose Gold
  ["#FF2A2A", "#DC2626", "#F43F5E", "#FDA4AF", "#FFE4E6"],
  // Emerald Green & Mint
  ["#00E676", "#10B981", "#059669", "#34D399", "#A7F3D0"],
  // Peacock Blue & Electric Cyan
  ["#00F5FF", "#38BDF8", "#0284C7", "#3B82F6", "#E0F2FE"],
  // Majestic Violet & Magenta
  ["#D946EF", "#A855F7", "#EC4899", "#C084FC", "#FAF5FF"],
];

export function InteractiveCrackersOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number | null = null;
    let isRunning = true;
    let isScrolling = false;
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    let autoLaunchInterval: ReturnType<typeof setInterval> | null = null;

    const isMobile = window.innerWidth < 768;
    const PARTICLES_PER_BURST = isMobile ? 28 : 42;
    const MAX_PARTICLES = isMobile ? 80 : 130;

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];
    const flashes: Flash[] = [];

    // Canvas sizing: 1.0 DPR on mobile for max FPS, capped at 1.25 on desktop
    const resize = () => {
      const dpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Scroll throttle: keep scroll at 120 FPS
    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
      }, 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Burst creation with bright core & sparkling embers (Zero shadowBlur)
    const burstAt = (x: number, y: number, palette?: string[], customCount?: number) => {
      if (particles.length > MAX_PARTICLES) return;

      const colors = palette || FESTIVE_PALETTES[Math.floor(Math.random() * FESTIVE_PALETTES.length)];
      const count = customCount || PARTICLES_PER_BURST;
      const baseSpeed = isMobile ? 2.8 + Math.random() * 2.4 : 3.2 + Math.random() * 3.0;

      // 1. Brief flash ring
      flashes.push({ x, y, radius: isMobile ? 10 : 15, alpha: 0.9 });

      // 2. Main shell particles
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
          size: isMobile ? 2.2 + Math.random() * 1.5 : 2.5 + Math.random() * 2.0,
        });
      }

      // 3. Shimmering phuljhadi embers
      const sparkCount = isMobile ? 8 : 14;
      for (let j = 0; j < sparkCount; j++) {
        if (particles.length >= MAX_PARTICLES) break;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (baseSpeed * 0.75);
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: "#FFFBEB",
          alpha: 1,
          decay: 0.022 + Math.random() * 0.018,
          size: 1.5,
          sparkle: true,
        });
      }

      if (!animId) {
        animId = requestAnimationFrame(loop);
      }
    };

    const launchRocket = (startX?: number, targetX?: number, targetY?: number) => {
      // Don't launch while intro splash is active, while tab is hidden, or while rapidly scrolling
      if (document.getElementById("diwali-intro-splash") || isScrolling || document.hidden) return;
      if (rockets.length >= (isMobile ? 2 : 3)) return;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = startX ?? w * 0.15 + Math.random() * (w * 0.7);
      const endX = targetX ?? x + (Math.random() - 0.5) * (w * 0.15);
      
      // On mobile, explode in upper 45% of screen so it's always clearly visible
      const endY = targetY ?? (isMobile ? h * 0.10 + Math.random() * (h * 0.35) : h * 0.12 + Math.random() * (h * 0.38));
      const dy = endY - h;
      const dx = endX - x;
      const steps = isMobile ? 28 : 34;
      const palette = FESTIVE_PALETTES[Math.floor(Math.random() * FESTIVE_PALETTES.length)];

      rockets.push({
        x,
        y: h,
        targetY: endY,
        vx: dx / steps,
        vy: dy / steps,
        color: palette[0],
        palette,
      });

      if (!animId) {
        animId = requestAnimationFrame(loop);
      }
    };

    // Global pointer down: tap anywhere on screen to burst crackers!
    const handlePointerDown = (e: PointerEvent) => {
      if (document.getElementById("diwali-intro-splash")) return;

      const target = e.target as HTMLElement | null;
      // If clicking interactive buttons, inputs, links, don't hijack
      if (target && (target.closest("button") || target.closest("a") || target.closest("input") || target.closest("select") || target.closest("textarea"))) {
        return;
      }

      burstAt(e.clientX, e.clientY, undefined, isMobile ? 30 : 45);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    // Auto-launch rockets at an exciting, active pace (every 2.6s - 3.4s)
    autoLaunchInterval = setInterval(() => {
      if (!document.getElementById("diwali-intro-splash") && !isScrolling && !document.hidden) {
        launchRocket();
      }
    }, 2800);

    // Animation Loop
    const loop = () => {
      if (!isRunning || document.hidden) {
        animId = null;
        return;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Sleep when nothing on screen
      if (rockets.length === 0 && particles.length === 0 && flashes.length === 0) {
        animId = null;
        return;
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

        // Vivid golden rocket trail
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(r.x, r.y);
        ctx.strokeStyle = "#FDE047";
        ctx.lineWidth = isMobile ? 2.5 : 3.0;
        ctx.stroke();

        // White glowing rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        if (r.y <= r.targetY || r.vy >= 0) {
          burstAt(r.x, r.y, r.palette);
          rockets.splice(i, 1);
        }
      }

      // 3. Update & Draw Shell Particles
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

        ctx.globalAlpha = Math.max(0, p.alpha);

        // Outer jewel-tone ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // White hot inner core for high contrast & vivid radiance
        if (!p.sparkle && p.size > 2.0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(loop);
    };

    return () => {
      isRunning = false;
      if (animId) cancelAnimationFrame(animId);
      if (scrollTimer) clearTimeout(scrollTimer);
      if (autoLaunchInterval) clearInterval(autoLaunchInterval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointerdown", handlePointerDown);
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
