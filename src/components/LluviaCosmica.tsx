// src/components/LluviaCosmica.tsx
import React, { useEffect, useRef } from 'react';

interface LluviaProps {
  IconoActual: string | null;
}

interface Particula {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export const LluviaCosmica: React.FC<LluviaProps> = ({ IconoActual }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !IconoActual) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let idAnimacion: number;
    let particulas: Particula[] = [];
    let iconoCache: HTMLCanvasElement | null = null;
    const numeroParticulas = 25;

    // --- 1. Ajustar tamaño del canvas con devicePixelRatio ---
    const ajustarTamano = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    ajustarTamano();

    let timeoutResize: number;
    const resizeDebounced = () => {
      window.clearTimeout(timeoutResize);
      timeoutResize = window.setTimeout(ajustarTamano, 150);
    };
    window.addEventListener('resize', resizeDebounced);

    // --- 2. Crear partículas ---
    const crearParticulas = () => {
      const ancho = window.innerWidth;
      const alto = window.innerHeight;
      particulas = [];
      for (let i = 0; i < numeroParticulas; i++) {
        particulas.push({
          x: Math.random() * ancho,
          y: Math.random() * alto,
          size: Math.random() * 16 + 14,
          speed: Math.random() * 0.7 + 0.4,
          opacity: Math.random() * 0.3 + 0.15,
        });
      }
    };

    // --- 3. Bucle de animación ---
    let ultimoTiempo = performance.now();

    const animar = (tiempoActual: number) => {
      const delta = Math.min((tiempoActual - ultimoTiempo) / 16.67, 3);
      ultimoTiempo = tiempoActual;

      const ancho = window.innerWidth;
      const alto = window.innerHeight;

      ctx.clearRect(0, 0, ancho, alto);

      if (iconoCache && particulas.length > 0) {
        for (let i = 0; i < particulas.length; i++) {
          const p = particulas[i];
          p.y += p.speed * delta;

          if (p.y > alto) {
            p.y = -p.size;
            p.x = Math.random() * ancho;
            p.speed = Math.random() * 0.7 + 0.4;
            p.opacity = Math.random() * 0.3 + 0.15;
          }

          ctx.globalAlpha = p.opacity;
          ctx.drawImage(iconoCache, p.x, p.y, p.size, p.size);
        }
        ctx.globalAlpha = 1;
      }

      idAnimacion = requestAnimationFrame(animar);
    };

    // --- 4. Cargar imagen y pre-renderizar con filtro dorado ---
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = IconoActual;

    const iniciar = () => {
      // Pre-renderizamos el icono en un canvas offscreen con el filtro dorado
      const TAMANO_CACHE = 64;
      const offscreen = document.createElement('canvas');
      offscreen.width = TAMANO_CACHE;
      offscreen.height = TAMANO_CACHE;

      const octx = offscreen.getContext('2d');
      if (!octx) return;

      octx.filter =
        'brightness(0) saturate(100%) invert(78%) sepia(35%) saturate(550%) hue-rotate(355deg) brightness(95%) contrast(90%)';
      octx.drawImage(img, 0, 0, TAMANO_CACHE, TAMANO_CACHE);

      iconoCache = offscreen;
      crearParticulas();
      ultimoTiempo = performance.now();
      idAnimacion = requestAnimationFrame(animar);
    };

    if (img.complete && img.naturalWidth > 0) {
      iniciar();
    } else {
      img.onload = iniciar;
      img.onerror = () => {
        console.warn('No se pudo cargar el icono para la lluvia cósmica:', IconoActual);
      };
    }

    // Pausar si la pestaña no está visible
    const manejarVisibilidad = () => {
      if (document.hidden) {
        cancelAnimationFrame(idAnimacion);
      } else {
        ultimoTiempo = performance.now();
        idAnimacion = requestAnimationFrame(animar);
      }
    };
    document.addEventListener('visibilitychange', manejarVisibilidad);

    return () => {
      cancelAnimationFrame(idAnimacion);
      window.removeEventListener('resize', resizeDebounced);
      document.removeEventListener('visibilitychange', manejarVisibilidad);
    };
  }, [IconoActual]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
};