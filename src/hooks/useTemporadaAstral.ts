import { useState, useEffect } from 'react';
import { listaSignos } from '../data/signos';
import type { SignoZodiacal, FechaAstrologica } from '../types/astral';

// Función pura que evalúa si el día y mes de hoy caen dentro de un rango zodiacal
const verificarRangoFecha = (
  mesActual: number,
  diaActual: number,
  inicio: FechaAstrologica,
  fin: FechaAstrologica
): boolean => {
  // Caso especial: El signo cruza el año nuevo (ej. Capricornio de Diciembre a Enero)
  if (inicio.mes > fin.mes) {
    return (
      (mesActual === inicio.mes && diaActual >= inicio.dia) ||
      (mesActual === fin.mes && diaActual <= fin.dia)
    );
  }

  // Caso estándar: El rango ocurre dentro del mismo mes
  if (mesActual === inicio.mes && mesActual === fin.mes) {
    return diaActual >= inicio.dia && diaActual <= fin.dia;
  }

  // Caso común: El rango cruza dos meses diferentes (ej. Aries de Marzo a Abril)
  return (
    (mesActual === inicio.mes && diaActual >= inicio.dia) ||
    (mesActual === fin.mes && diaActual <= fin.dia)
  );
};

// Exportación nombrada del Hook que tu componente PantallaAstral necesita
export const useTemporadaAstral = () => {
  const [signoActual, setSignoActual] = useState<SignoZodiacal | null>(null);

  useEffect(() => {
    const calcularSignoActivo = (): void => {
      const hoy = new Date();
      const mes = hoy.getMonth() + 1; // En JavaScript Enero es 0, por eso sumamos 1
      const dia = hoy.getDate();

      // Buscamos en la base de datos el signo que cumpla la condición matemática de la fecha
      const signoEncontrado = listaSignos.find((signo) =>
        verificarRangoFecha(mes, dia, signo.fechaInicio, signo.fechaFin)
      );

      // Si encuentra el signo lo asigna; si no, por seguridad asigna el primero de la lista
      setSignoActual(signoEncontrado || listaSignos[0]);
    };

    calcularSignoActivo();
  }, []);

  return { signoActual };
};