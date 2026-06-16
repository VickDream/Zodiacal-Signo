// src/components/LluviaCosmica.tsx
import React, { useEffect, useRef } from 'react';

interface LluviaProps {
  IconoActual: React.FC<{ className?: string }> | null;
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
  const svgContenedorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const svgContenedor = svgContenedorRef.current;
    if (!canvas || !svgContenedor) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let idAnimacion: number;
    let particulas: Particula[] = [];
    const numeroParticulas = 25; // Cantidad de iconos flotando simultáneamente

    // 1. Ajustar el tamaño del canvas a la pantalla completa
    const ajustarTamano = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    ajustarTamano();
    window.addEventListener('resize', ajustarTamano);

    const imgIcono = new Image();
    
    // 2. Capturar el SVG real y forzarle dimensiones/colores válidos para Canvas
    const svgElemento = svgContenedor.querySelector('svg');
    if (svgElemento) {
      const s = new XMLSerializer();
      let svgString = s.serializeToString(svgElemento);
      
      // RECTIFICACIÓN CLAVE: Inyectamos dimensiones fijas y estilos globales para que el Canvas sepa cómo pintarlo
      svgString = svgString.replace(
        '<svg',
        '<svg width="64" height="64" style="color: #dfb76c; stroke: #dfb76c; fill: none;"'
      );

      // Agregamos estilos internos para asegurar que todo path o g interlineado sea dorado y visible
      const estilosInyectados = `
        <style>
          path, g, circle, .trazo-signo { 
            stroke: #dfb76c !important; 
            fill: none !important; 
            stroke-width: 3.5 !important;
          }
        </style>
      `;
      svgString = svgString.replace('>', `>${estilosInyectados}`);
      
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      imgIcono.src = URL.createObjectURL(blob);
    }

    // 3. Inicializar el pool de partículas
    const crearParticulas = () => {
      particulas = [];
      for (let i = 0; i < numeroParticulas; i++) {
        particulas.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, // Distribuidas inicialmente por toda la pantalla
          size: Math.random() * 16 + 14,    // Tamaños sutiles entre 14px y 30px
          speed: Math.random() * 0.7 + 0.4, // Velocidad suave de caída hacia abajo
          opacity: Math.random() * 0.18 + 0.05, // Opacidades bajas (5% al 23%) para quedarse de fondo
        });
      }
    };

    imgIcono.onload = () => {
      crearParticulas();
    };

    // 4. Loop de animación a 60fps
    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (imgIcono.complete && particulas.length > 0) {
        particulas.forEach((p) => {
          p.y += p.speed;

          // Si sale por abajo, resetea arriba
          if (p.y > canvas.height) {
            p.y = -p.size;
            p.x = Math.random() * canvas.width;
            p.speed = Math.random() * 0.7 + 0.4;
            p.opacity = Math.random() * 0.18 + 0.05;
          }

          ctx.globalAlpha = p.opacity;
          ctx.drawImage(imgIcono, p.x, p.y, p.size, p.size);
        });
      }

      idAnimacion = requestAnimationFrame(animar);
    };

    animar();

    return () => {
      cancelAnimationFrame(idAnimacion);
      window.removeEventListener('resize', ajustarTamano);
      if (imgIcono.src) {
        URL.revokeObjectURL(imgIcono.src);
      }
    };
  }, [IconoActual]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1, // Por detrás de tu tarjeta astral (z-index: 2)
          pointerEvents: 'none',
        }}
      />
      
      {/* Contenedor auxiliar oculto */}
      <div 
        ref={svgContenedorRef} 
        style={{ display: 'none' }}
        aria-hidden="true"
      >
        {IconoActual && <IconoActual />}
      </div>
    </>
  );
};