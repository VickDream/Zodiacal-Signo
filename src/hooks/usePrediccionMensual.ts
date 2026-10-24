// src/hooks/usePrediccionMensual.ts
import { useCallback, useEffect, useState } from 'react';
import predicciones from '../data/predicciones-2026.json';

interface PrediccionState {
  texto: string;
  cargando: boolean;
  error: boolean;
  fuente: 'local' | 'api' | 'fallback';
  reintentar: () => void;
}

type PrediccionesPorMes = Record<string, Record<string, string>>;
const prediccionesTipadas = predicciones as PrediccionesPorMes;

const API_URL = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/monthly';

// Cache temporal de respuestas exitosas de la API (evita refetch al cambiar de signo)
const cacheAPI = (key: string): string | null => {
  try {
    const valor = localStorage.getItem(key);
    return valor ? (JSON.parse(valor) as string) : null;
  } catch {
    return null;
  }
};

const guardarEnCache = (key: string, valor: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(valor));
  } catch {
    // Si el storage no está disponible, simplemente no cacheamos
  }
};

export const usePrediccionMensual = (
  signoId: string,
  prediccionFallback: string
): PrediccionState => {
  const [texto, setTexto] = useState<string>(prediccionFallback);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [fuente, setFuente] = useState<'local' | 'api' | 'fallback'>('fallback');
  const [token, setToken] = useState<number>(0);

  useEffect(() => {
    const hoy = new Date();
    const mesAnio = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}`;
    const clave = `${mesAnio}-${signoId.toLowerCase()}`;

    // 1️⃣ Buscar en JSON local
    const prediccionLocal = prediccionesTipadas[mesAnio]?.[signoId.toLowerCase()];
    if (prediccionLocal) {
      setTexto(prediccionLocal);
      setFuente('local');
      setCargando(false);
      setError(false);
      return;
    }

    // 2️⃣ Reusar cache de la API si existe
    const cached = cacheAPI(`zodiacal:api:${clave}`);
    if (cached) {
      setTexto(cached);
      setFuente('api');
      setCargando(false);
      setError(false);
      return;
    }

    // 3️⃣ Consultar API como respaldo
    const controller = new AbortController();
    setCargando(true);
    setError(false);

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
          guardarEnCache(`zodiacal:api:${clave}`, prediccionAPI);
        } else {
          throw new Error('Respuesta vacía');
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.warn('API falló, usando fallback:', err.message);
          setTexto(prediccionFallback);
          setFuente('fallback');
          setError(true);
        }
      })
      .finally(() => setCargando(false));

    return () => controller.abort();
  }, [signoId, prediccionFallback, token]);

  const reintentar = useCallback(() => {
    setToken((t) => t + 1);
  }, []);

  return { texto, cargando, error, fuente, reintentar };
};
