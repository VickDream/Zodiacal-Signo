// src/hooks/usePrediccionMensual.ts
import { useEffect, useState } from 'react';
import predicciones from '../data/predicciones-2026.json';

interface PrediccionState {
  texto: string;
  cargando: boolean;
  fuente: 'local' | 'api' | 'fallback';
}

type PrediccionesPorMes = Record<string, Record<string, string>>;
const prediccionesTipadas = predicciones as PrediccionesPorMes;

const API_URL = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/monthly';

export const usePrediccionMensual = (
  signoId: string,
  prediccionFallback: string
): PrediccionState => {
  const [texto, setTexto] = useState<string>(prediccionFallback);
  const [cargando, setCargando] = useState<boolean>(true);
  const [fuente, setFuente] = useState<'local' | 'api' | 'fallback'>('fallback');

  useEffect(() => {
    const hoy = new Date();
    const mesAnio = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}`;

    // 1️⃣ Buscar en JSON local
    const prediccionLocal = prediccionesTipadas[mesAnio]?.[signoId.toLowerCase()];
    if (prediccionLocal) {
      setTexto(prediccionLocal);
      setFuente('local');
      setCargando(false);
      return;
    }

    // 2️⃣ Consultar API como respaldo
    const controller = new AbortController();
    setCargando(true);

    fetch(`${API_URL}?sign=${signoId}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((data) => {
        const prediccionAPI = data?.data?.horoscope_data;
        if (prediccionAPI) {
          setTexto(prediccionAPI);
          setFuente('api');
        } else {
          throw new Error('Respuesta vacía');
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.warn('API falló, usando fallback:', err.message);
          setTexto(prediccionFallback);
          setFuente('fallback');
        }
      })
      .finally(() => setCargando(false));

    return () => controller.abort();
  }, [signoId, prediccionFallback]);

  return { texto, cargando, fuente };
};