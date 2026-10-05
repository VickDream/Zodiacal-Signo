// src/hooks/useTemporadaAstral.ts
import { useEffect, useState } from 'react';
import { signos } from '../data/signos';
import type { Signo } from '../data/signos';


const calcularSignoActual = (fecha: Date): Signo | null => {
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  const signosArray = Object.values(signos);

  for (const signo of signosArray) {
    const { fechaInicio, fechaFin } = signo;

    // Rango normal (ej. Aries: 21/3 al 19/4)
    if (fechaInicio.mes <= fechaFin.mes) {
      if (
        (mes === fechaInicio.mes && dia >= fechaInicio.dia) ||
        (mes === fechaFin.mes && dia <= fechaFin.dia) ||
        (mes > fechaInicio.mes && mes < fechaFin.mes)
      ) {
        return signo;
      }
    }
    // Rango que cruza año (ej. Capricornio: 22/12 al 19/1)
    else {
      if (
        (mes === fechaInicio.mes && dia >= fechaInicio.dia) ||
        (mes === fechaFin.mes && dia <= fechaFin.dia) ||
        mes > fechaInicio.mes ||
        mes < fechaFin.mes
      ) {
        return signo;
      }
    }
  }

  return null;
};

export const useTemporadaAstral = () => {
  const [signoActual, setSignoActual] = useState<Signo | null>(null);

  useEffect(() => {
    const hoy = new Date();
    const signo = calcularSignoActual(hoy);

    console.log('📅 Fecha actual:', hoy.toLocaleDateString());
    console.log('✨ Signo calculado:', signo?.nombre);

    setSignoActual(signo);
  }, []);

  return { signoActual };
};