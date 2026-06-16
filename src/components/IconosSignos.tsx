// src/components/IconosSignos.tsx
import React from 'react';

interface IconoProps {
  className?: string;
}

// ==========================================================================
// COMPONENTES SVG INDIVIDUALES (Optimizados y Simétricos)
// ==========================================================================

export const AriesIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <path 
      className="trazo-signo"
      d="M32,48 L32,24 C32,16 20,12 12,20 M32,24 C32,16 44,12 52,20" 
      fill="none" 
      stroke="var(--dorado-principal)" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
  </svg>
);

export const TauroIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      {/* Círculo base, ligeramente desplazado abajo para dar espacio a los cuernos */}
      <circle cx="32" cy="39" r="12" />
      {/* Cuernos curvos y estilizados que nacen del lomo del círculo */}
      <path d="M12,18 C18,12 20,27 32,27 C44,27 46,12 52,18" />
    </g>
  </svg>
);

export const GeminisIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <path 
      className="trazo-signo"
      d="M16,12 C28,8 36,8 48,12 M16,52 C28,56 36,56 48,52 M24,14 L24,50 M40,14 L40,50 M28,14 L28,50 M36,14 L36,50" 
      fill="none" 
      stroke="var(--dorado-principal)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CancerIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="24" r="6" />
      <path d="M20,18 C30,18 52,18 52,30" />
      <circle cx="44" cy="40" r="6" />
      <path d="M44,46 C34,46 12,46 12,34" />
    </g>
  </svg>
);

export const LeoIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      {/* Círculo inicial perfecto abajo a la izquierda */}
      <circle cx="22" cy="38" r="7" />
      {/* Melena alta y cola vertical estilizada */}
      <path d="M29,38 C28,26 31,12 42,12 C51,12 51,26 44,38 C40,45 42,52 48,52" />
    </g>
  </svg>
);

export const VirgoIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <path 
      className="trazo-signo"
      // Dibujamos las tres patas verticales con sus curvas superiores y el lazo cruzado clásico
      d="M18,18 L18,44 M18,24 C18,16 26,16 26,24 L26,44 M26,24 C26,16 34,16 34,24 L34,42 C34,48 44,48 44,38 C44,30 36,30 36,40 C36,46 40,50 44,50" 
      fill="none" 
      stroke="var(--dorado-principal)" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const LibraIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14,35 L24,35 A 8 8 0 0 1 40,35 L50,35" />
      <path d="M14,47 L50,47" />
    </g>
  </svg>
);

export const EscorpioIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      {/* Estructura base de la "m" con las tres patas simétricas */}
      <path d="M16,18 L16,44 M16,24 C16,16 24,16 24,24 L24,44 M24,24 C24,16 32,16 32,24 L32,38" />
      {/* Cola de escorpión: curva envolvente fluida y ascendente */}
      <path d="M32,36 C32,48 42,48 44,38" />
      {/* Punta de la flecha/aguijón apuntando arriba a la derecha */}
      <path d="M39,41 L44,36 L47,43" />
    </g>
  </svg>
);

export const SagitarioIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16,48 L48,16" />
      <path d="M32,16 L48,16 L48,32" />
      <path d="M22,22 L42,42" />
    </g>
  </svg>
);

export const CapricornioIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <path 
      className="trazo-signo"
      d="M17,21 L25,41 L31,23 C33,15 41,15 43,23 L43,36 C43,44 52,44 52,36 C52,29 44,29 43,37 C42,44 38,49 31,50" 
      fill="none" 
      stroke="var(--dorado-principal)" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const AcuarioIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12,24 L22,14 L32,24 L42,14 L52,24" />
      <path d="M12,42 L22,32 L32,42 L42,32 L52,42" />
    </g>
  </svg>
);

export const PiscisIcon: React.FC<IconoProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="trazo-signo" fill="none" stroke="var(--dorado-principal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18,12 C28,20 28,44 18,52" />
      <path d="M46,12 C36,20 36,44 46,52" />
      <path d="M12,32 L52,32" />
    </g>
  </svg>
);

// ==========================================================================
// DICCIONARIO DE MAPEO MATEMÁTICO (Fácil Integración en PantallaAstral)
// ==========================================================================

export const DiccionarioIconos: Record<string, React.FC<IconoProps>> = {
  aries: AriesIcon,
  tauro: TauroIcon,
  geminis: GeminisIcon,
  cancer: CancerIcon,
  leo: LeoIcon,
  virgo: VirgoIcon,
  libra: LibraIcon,
  escorpio: EscorpioIcon,
  sagitario: SagitarioIcon,
  capricornio: CapricornioIcon,
  acuario: AcuarioIcon,
  piscis: PiscisIcon,
};