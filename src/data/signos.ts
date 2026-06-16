// src/data/signos.ts
import type { SignoZodiacal } from '../types/astral';

export const listaSignos: SignoZodiacal[] = [
  {
    id: 'aries',
    nombre: 'Aries',
    fechaInicio: { mes: 3, dia: 21 },
    fechaFin: { mes: 4, dia: 19 },
    elemento: 'Fuego',
    planetaRegente: 'Marte',
    fraseClave: 'Yo soy',
    prediccionBase: 'Momento de iniciar proyectos con fuerza y determinación.',
    // Paleta: Rojo siena místico y destello carmesí energético
    colorFondo1: '#2a080c',
    colorFondo2: '#0f0304',
    colorDestello: 'rgba(235, 68, 90, 0.25)'
  },
  {
    id: 'tauro',
    nombre: 'Tauro',
    fechaInicio: { mes: 4, dia: 20 },
    fechaFin: { mes: 5, dia: 20 },
    elemento: 'Tierra',
    planetaRegente: 'Venus',
    fraseClave: 'Yo tengo',
    prediccionBase: 'Enfócate en consolidar tu estabilidad y disfrutar del presente.',
    // Paleta: Verde bosque profundo y destello esmeralda venusino
    colorFondo1: '#0a1a12',
    colorFondo2: '#030a07',
    colorDestello: 'rgba(46, 139, 87, 0.25)'
  },
  {
    id: 'geminis',
    nombre: 'Géminis',
    fechaInicio: { mes: 5, dia: 21 },
    fechaFin: { mes: 6, dia: 20 },
    elemento: 'Aire',
    planetaRegente: 'Mercurio',
    fraseClave: 'Yo pienso',
    prediccionBase: 'La comunicación y el intercambio de ideas abrirán nuevas puertas.',
    // Paleta: Tu morado actual cósmico con el destello azul herencia de Mercurio
    colorFondo1: '#16113a',
    colorFondo2: '#07050f',
    colorDestello: 'rgba(117, 151, 222, 0.25)'
  },
  {
    id: 'cancer',
    nombre: 'Cáncer',
    fechaInicio: { mes: 6, dia: 21 },
    fechaFin: { mes: 7, dia: 22 },
    elemento: 'Agua',
    planetaRegente: 'Luna',
    fraseClave: 'Yo siento',
    prediccionBase: 'Tiempo de conectar con tus raíces y proteger tu energía interna.',
    // Paleta: Azul marino lunar y destello plata/perla sutil
    colorFondo1: '#091426',
    colorFondo2: '#03070f',
    colorDestello: 'rgba(173, 181, 189, 0.2)'
  },
  {
    id: 'leo',
    nombre: 'Leo',
    fechaInicio: { mes: 7, dia: 23 },
    fechaFin: { mes: 8, dia: 22 },
    elemento: 'Fuego',
    planetaRegente: 'Sol',
    fraseClave: 'Yo hago',
    prediccionBase: 'Tu brillo personal destaca; lidera con el corazón.',
    // Paleta: Ámbar profundo, casi chocolate, con un destello solar ardiente
    colorFondo1: '#261405',
    colorFondo2: '#0f0701',
    colorDestello: 'rgba(243, 156, 18, 0.25)'
  },
  {
    id: 'virgo',
    nombre: 'Virgo',
    fechaInicio: { mes: 8, dia: 23 },
    fechaFin: { mes: 9, dia: 22 },
    elemento: 'Tierra',
    planetaRegente: 'Mercurio',
    fraseClave: 'Yo analizo',
    prediccionBase: 'Organiza tus prioridades y purifica tus hábitos diarios.',
    // Paleta: Olivo oscuro terrenal con destello mercurial templado
    colorFondo1: '#12160f',
    colorFondo2: '#060805',
    colorDestello: 'rgba(141, 163, 125, 0.2)'
  },
  {
    id: 'libra',
    nombre: 'Libra',
    fechaInicio: { mes: 9, dia: 23 },
    fechaFin: { mes: 10, dia: 22 },
    elemento: 'Aire',
    planetaRegente: 'Venus',
    fraseClave: 'Yo balances',
    prediccionBase: 'Busca la armonía en tus relaciones y decisiones clave.',
    // Paleta: Rosa pálido místico/crepúsculo y destello aguamarina suave
    colorFondo1: '#1c121e',
    colorFondo2: '#0a060c',
    colorDestello: 'rgba(214, 162, 232, 0.2)'
  },
  {
    id: 'escorpio',
    nombre: 'Escorpio',
    fechaInicio: { mes: 10, dia: 23 },
    fechaFin: { mes: 11, dia: 21 },
    elemento: 'Agua',
    planetaRegente: 'Plutón / Marte',
    fraseClave: 'Yo deseo',
    prediccionBase: 'Período de profunda transformación y renovación emocional.',
    // Paleta: Negro absoluto con un centro morado orquídea peligroso y magnético
    colorFondo1: '#18051b',
    colorFondo2: '#050007',
    colorDestello: 'rgba(187, 10, 232, 0.25)'
  },
  {
    id: 'sagitario',
    nombre: 'Sagitario',
    fechaInicio: { mes: 11, dia: 22 },
    fechaFin: { mes: 12, dia: 21 },
    elemento: 'Fuego',
    planetaRegente: 'Júpiter',
    fraseClave: 'Yo busco',
    prediccionBase: 'Expande tus horizontes mentales y confía en tu intuición.',
    // Paleta: Púrpura real majestuoso y destello azul eléctrico aventurero
    colorFondo1: '#1c0b30',
    colorFondo2: '#0a0314',
    colorDestello: 'rgba(142, 68, 173, 0.3)'
  },
  {
    id: 'capricornio',
    nombre: 'Capricornio',
    fechaInicio: { mes: 12, dia: 22 },
    fechaFin: { mes: 1, dia: 19 },
    elemento: 'Tierra',
    planetaRegente: 'Saturno',
    fraseClave: 'Yo utiliza',
    prediccionBase: 'La disciplina y la paciencia darán frutos a largo plazo.',
    // Paleta: Gris carbón saturnino y destello bronce frío militar
    colorFondo1: '#161719',
    colorFondo2: '#0a0b0c',
    colorDestello: 'rgba(127, 140, 141, 0.2)'
  },
  {
    id: 'acuario',
    nombre: 'Acuario',
    fechaInicio: { mes: 1, dia: 20 },
    fechaFin: { mes: 2, dia: 18 },
    elemento: 'Aire',
    planetaRegente: 'Urano / Saturno',
    fraseClave: 'Yo sé',
    prediccionBase: 'Momento de innovar y conectar con ideales colectivos.',
    // Paleta: Azul cian eléctrico de tormenta y destello neón uraniano
    colorFondo1: '#051923',
    colorFondo2: '#01080c',
    colorDestello: 'rgba(0, 168, 204, 0.25)'
  },
  {
    id: 'piscis',
    nombre: 'Piscis',
    fechaInicio: { mes: 2, dia: 19 },
    fechaFin: { mes: 3, dia: 20 },
    elemento: 'Agua',
    planetaRegente: 'Neptuno / Júpiter',
    fraseClave: 'Yo creo',
    prediccionBase: 'Fluye con tu creatividad y permite que tu empatía te guíe.',
    // Paleta: Turquesa abisal profundo y destello verde neptuniano místico
    colorFondo1: '#05161c',
    colorFondo2: '#01070a',
    colorDestello: 'rgba(26, 188, 156, 0.25)'
  }
];
