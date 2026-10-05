// src/components/IconosSignos.tsx
import React from 'react';
import '../App.css'

interface IconoSignoProps {
  id?: string;
  ruta?: string;
  className?: string;
  alt?: string;
}

/**
 * Componente unificado para renderizar los iconos SVG almacenados en /public/signos/
 */
export const IconoSigno: React.FC<IconoSignoProps> = ({ id, ruta, className, alt }) => {
  const srcIcono = ruta || (id ? `/signos/${id.toLowerCase()}.svg` : '');

  return (
    <img 
      src={srcIcono} 
      alt={alt || 'Signo zodiacal'} 
      className={className} 
    />
  );
};

// ==========================================================================
// DICCIONARIO DE RUTAS (Para mantener compatibilidad con PantallaAstral)
// ==========================================================================

export const DiccionarioIconos: Record<string, string> = {
  aries: '/signos/aries.svg',
  tauro: '/signos/tauro.svg',
  geminis: '/signos/geminis.svg',
  cancer: '/signos/cancer.svg',
  leo: '/signos/leo.svg',
  virgo: '/signos/virgo.svg',
  libra: '/signos/libra.svg',
  escorpio: '/signos/escorpio.svg',
  sagitario: '/signos/sagitario.svg',
  capricornio: '/signos/capricornio.svg',
  acuario: '/signos/acuario.svg',
  piscis: '/signos/piscis.svg',
};