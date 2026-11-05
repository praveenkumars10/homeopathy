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

    let animId: number | null = null;
    let isRunning = true;
    let isScrolling = false;
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    let isDocumentVisible = !document.hidden;

    // Detect mobile for particle scaling
    const isMobile = window.innerWidth < 768;
    const MAX_PARTICLES = isMobile ? 40 : 70;
    const PARTICLES_PER_BURST = isMobile ? 18 : 34;

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];

    // Canvas sizing: Mobile gets 1.0 DPR for max GPU efficiency, Desktop capped at 1.25
    const resize = () => {
      const dpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Scroll throttle: pause new launches during rapid scrolling for locked 60/120 FPS
    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
      }, 250);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Visibility change: suspend RAF when tab is hidden
    const handleVisibility = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible && !animId) {
        animId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Burst creation — zero expensive shadowBlur, lightweight clean arcs
    const burstAt = (x: number, y: number, palette?: string[], customCount?: number) => {
      if (particles.length > MAX_PARTICLES) return;

      const colors = palette || FESTIVE_PALETTES[Math.floor(Math.random() * FESTIVE_PALETTES.length)];
      const count = customCount || PARTICLES_PER_BURST;
      const baseSpeed = isMobile ? 2.2 + Math.random() * 2.2 : 2.5 + Math.random() * 3.0;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = baseSpeed * (0.35 + Math.random() * 0.85);
        const color = colors[i % colors.length];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          alpha: 1,
          decay: isMobile ? 0.02 + Math.random() * 0.015 : 0.014 + Math.random() * 0.014,
          size: isMobile ? 1.6 + Math.random() * 1.4 : 1.8 + Math.random() * 1.8,
        });
      }
    };

    const launchRocket = (startX?: number, targetX?: number, targetY?: number) => {
      if (isScrolling || !isDocumentVisible) return;
      if (rockets.length >= (isMobile ? 1 : 2)) return;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = startX ?? w * 0.15 + Math.random() * (w * 0.7);
      const endX = targetX ?? x + (Math.random() - 0.5) * (w * 0.15);
      const endY = targetY ?? h * 0.15 + Math.random() * (h * 0.35);
      const dy = endY - h;
      const dx = endX - x;
      const steps = isMobile ? 32 : 38;
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

      // Ensure animation loop is running
      if (!animId) {
        animId = requestAnimationFrame(loop);
      }
    };

    // User click / tap to burst crackers
    const handleCanvasClick = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      burstAt(clientX, clientY, undefined, isMobile ? 22 : 40);
      if (!animId) {
        animId = requestAnimationFrame(loop);
      }
    };

    canvas.addEventListener("click", handleCanvasClick, { passive: true });
    canvas.addEventListener("touchstart", handleCanvasClick, { passive: true });

    // Gentle recurring auto-rocket timer (spaced out every 5.5s to 7.5s, avoids CPU overload)
    let autoLaunchTimeout: ReturnType<typeof setTimeout> | null = null;
    const scheduleNextRocket = (delayMs: number) => {
      if (!isRunning) return;
      autoLaunchTimeout = setTimeout(() => {
        if (!isRunning) return;
        if (!isScrolling && isDocumentVisible && document.visibilityState === "visible") {
          launchRocket();
        }
        // Next launch in 5.5 - 7.5 seconds
        scheduleNextRocket(5500 + Math.random() * 2000);
      }, delayMs);
    };

    // Delay first rocket so it doesn't fight with the intro splash screen
    scheduleNextRocket(4200);

    // Optimized Animation Loop
    const loop = () => {
      if (!isRunning || !isDocumentVisible) {
        animId = null;
        return;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;

      // Fast clear
      ctx.clearRect(0, 0, w, h);

      // If nothing on screen, sleep RAF to preserve 100% CPU/battery
      if (rockets.length === 0 && particles.length === 0) {
        animId = null;
        return;
      }

      // 1. Update & render rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        const prevX = r.x;
        const prevY = r.y;

        r.x += r.vx;
        r.y += r.vy;

        // Lightweight motion streak (zero array allocation)
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(r.x, r.y);
        ctx.strokeStyle = "rgba(255, 215, 0, 0.75)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Rocket head spark
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        // Apex reached -> burst!
        if (r.y <= r.targetY || r.vy >= 0) {
          burstAt(r.x, r.y, r.palette);
          rockets.splice(i, 1);
        }
      }

      // 2. Update & render burst particles (High-speed 2D batching, zero shadowBlur)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.055; // gentle gravity
        p.vx *= 0.98;  // air resistance
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

      animId = requestAnimationFrame(loop);
    };

    return () => {
      isRunning = false;
      if (animId) cancelAnimationFrame(animId);
      if (scrollTimer) clearTimeout(scrollTimer);
      if (autoLaunchTimeout) clearTimeout(autoLaunchTimeout);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
      canvas.removeEventListener("click", handleCanvasClick);
      canvas.removeEventListener("touchstart", handleCanvasClick);
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
