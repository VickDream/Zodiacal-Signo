export type ElementoAstral = 'Fuego' | 'Tierra' | 'Aire' | 'Agua';

export interface FechaAstrologica {
  mes: number; // 1 para Enero, 12 para Diciembre
  dia: number;
}

export interface SignoZodiacal {
  id: string;              
  nombre: string;          
  fechaInicio: FechaAstrologica;
  fechaFin: FechaAstrologica;
  elemento: ElementoAstral;
  planetaRegente: string;  
  fraseClave: string;      
  prediccionBase: string;  
  
  // AGREGA ESTAS TRES LÍNEAS AQUÍ:
  colorFondo1: string;     // Color místico superior del degradado
  colorFondo2: string;     // Tono oscuro inferior del fondo
  colorDestello: string;   // Color traslúcido para el brillo orbital
}