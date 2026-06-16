// src/components/PantallaAstral.tsx
import { useTemporadaAstral } from '../hooks/useTemporadaAstral';
import React, { useState } from 'react'; // 👈 Añadimos useState para la prueba
import { DiccionarioIconos } from './IconosSignos';
import { LluviaCosmica } from './LluviaCosmica';

export const PantallaAstral: React.FC = () => {
  const { signoActual } = useTemporadaAstral();
  
  // 🔬 ESTADO DE PRUEBA: Inicializa con el ID del hook o "geminis" por defecto
  const [signoDePrueba, setSignoDePrueba] = useState<string>('');

  if (!signoActual) {
    return (
      <div className="cargando">
        <p>Calculando la alineación de los astros...</p>
      </div>
    );
  }

  // Si hay un signo de prueba seleccionado, usamos ese ID; si no, el del hook real
  const idActivo = signoDePrueba || signoActual.id;
  const IconoSignoActivo = DiccionarioIconos[idActivo];

  const estiloDinamicoAltasPrestaciones = {
    '--bg-signo-1': signoActual.colorFondo1,
    '--bg-signo-2': signoActual.colorFondo2,
    '--destello-signo': signoActual.colorDestello,
  } as React.CSSProperties;

  return (
    <div className="escenario-astral" style={estiloDinamicoAltasPrestaciones}>
      
      {/* Selector flotante temporal para desarrollo (puedes borrarlo después) */}
      <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 100, display: 'flex', gap: '5px', flexWrap: 'wrap', maxWidth: '300px' }}>
        {Object.keys(DiccionarioIconos).map((id) => (
          <button 
            key={id} 
            onClick={() => setSignoDePrueba(id)}
            style={{
              padding: '4px 8px',
              background: idActivo === id ? 'var(--dorado-principal)' : '#222',
              color: idActivo === id ? '#000' : '#fff',
              border: '1px solid var(--dorado-principal)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '11px'
            }}
          >
            {id.toUpperCase()}
          </button>
        ))}
      </div>

      <LluviaCosmica IconoActual={IconoSignoActivo || null} />

    {/* Contenedor Principal de la Tarjeta */}
      <main className="tarjeta-astral">
        {IconoSignoActivo && <IconoSignoActivo className="svg-signo-fondo" />}

        <section>
          <h1>Temporada de {signoDePrueba ? signoDePrueba.toUpperCase() : signoActual.nombre}</h1>
          <h2>"{signoActual.fraseClave}"</h2>
        </section>

        <section>
          <ul>
            <li><strong>Elemento:</strong> {signoActual.elemento}</li>
            <li><strong>Planeta Regente:</strong> {signoActual.planetaRegente}</li>
            <li>
              <strong>Período:</strong> Del {signoActual.fechaInicio.dia}/{signoActual.fechaInicio.mes} al {signoActual.fechaFin.dia}/{signoActual.fechaFin.mes}
            </li>
          </ul>
        </section>

        <section>
          <h3>Predicción del ciclo</h3>
          <p>{signoActual.prediccionBase}</p>
        </section>
      </main>
    </div>
  );
};