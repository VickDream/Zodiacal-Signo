// src/components/PantallaAstral.tsx
import { useTemporadaAstral } from '../hooks/useTemporadaAstral';
import { usePrediccionMensual } from '../hooks/usePrediccionMensual';
import React, { useState, useEffect } from 'react';
import { DiccionarioIconos } from './IconosSignos';
import { LluviaCosmica } from './LluviaCosmica';
import { signos } from '../data/signos';
import '../styles/PantallaAstral.css';

export const PantallaAstral: React.FC = () => {
  const { signoActual } = useTemporadaAstral();
  const [signoDePrueba, setSignoDePrueba] = useState<string>('');
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  // ⬇️ TODOS los hooks van arriba, antes de cualquier return condicional

  const idActivo = signoDePrueba || signoActual?.id || 'aries';
  const rutaIconoActivo = DiccionarioIconos[idActivo] || DiccionarioIconos['aries'];

  // ✨ El signo que se debe mostrar: si hay uno seleccionado manualmente, ese;
  // si no, el signo actual según la fecha
  const signoMostrado = signoDePrueba ? signos[signoDePrueba] : signoActual;

  const { texto: prediccionMensual, cargando: cargandoPrediccion } =
    usePrediccionMensual(idActivo, signoMostrado?.prediccionBase || '');

  useEffect(() => {
    setMenuAbierto(false);
  }, [signoDePrueba]);

  // ⬇️ Return condicional DESPUÉS de todos los hooks
  if (!signoActual || !signoMostrado) {
    return (
      <div className="pantalla-cargando">
        <div className="estrellas-fondo">
          <span className="estrella" style={{ top: '15%', left: '20%', animationDelay: '0s' }}></span>
          <span className="estrella" style={{ top: '25%', left: '80%', animationDelay: '0.5s' }}></span>
          <span className="estrella" style={{ top: '70%', left: '15%', animationDelay: '1s' }}></span>
          <span className="estrella" style={{ top: '80%', left: '75%', animationDelay: '1.5s' }}></span>
          <span className="estrella" style={{ top: '40%', left: '10%', animationDelay: '2s' }}></span>
          <span className="estrella" style={{ top: '60%', left: '90%', animationDelay: '2.5s' }}></span>
        </div>

        <div className="spinner-cosmico">
          <div className="aura-cosmica"></div>
          <div className="anillo-exterior"></div>
          <div className="anillo-interior"></div>
          <div className="punto-central"></div>
          <div className="orbita orbita-1"><div className="particula"></div></div>
          <div className="orbita orbita-2"><div className="particula"></div></div>
        </div>

        <p className="texto-cargando">Calculando la alineación de los astros...</p>
      </div>
    );
  }

  const estiloDinamicoAltasPrestaciones = {
    '--bg-signo-1': signoMostrado.colorFondo1,
    '--bg-signo-2': signoMostrado.colorFondo2,
    '--destello-signo': signoMostrado.colorDestello,
  } as React.CSSProperties;

  return (
    <div className="escenario-astral" style={estiloDinamicoAltasPrestaciones}>

      <LluviaCosmica IconoActual={rutaIconoActivo} />

      <div className="panel-derecho">
        <img src={rutaIconoActivo} alt={idActivo} className="icono-giratorio" />
      </div>

      <main className="tarjeta-astral">
        <section className="tarjeta-header">
          <h1>Temporada de {signoMostrado.nombre}</h1>
          <h2>"{signoMostrado.fraseClave}"</h2>
        </section>

        <section className="tarjeta-detalles">
          <ul>
            <li><strong>Elemento:</strong> {signoMostrado.elemento}</li>
            <li><strong>Planeta Regente:</strong> {signoMostrado.planetaRegente}</li>
            <li>
              <strong>Período:</strong> Del {signoMostrado.fechaInicio.dia}/{signoMostrado.fechaInicio.mes} al{' '}
              {signoMostrado.fechaFin.dia}/{signoMostrado.fechaFin.mes}
            </li>
          </ul>
        </section>

        <section className="tarjeta-prediccion">
          <h3>Predicción del ciclo</h3>
          {cargandoPrediccion ? (
            <p className="prediccion-cargando">Consultando los astros...</p>
          ) : (
            <p>{prediccionMensual}</p>
          )}
        </section>
      </main>

      <button
        className="btn-toggle-mobile"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? '✕' : '☰'}
      </button>

      <aside className={`panel-izquierdo ${menuAbierto ? 'abierto' : ''}`}>
        <div className="lista-signos">
          {Object.keys(DiccionarioIconos).map((id) => (
            <button
              key={id}
              onClick={() => setSignoDePrueba(id)}
              className={`btn-signo ${idActivo === id ? 'activo' : ''}`}
            >
              {id.toUpperCase()}
            </button>
          ))}
        </div>
      </aside>

    </div>
  );
};