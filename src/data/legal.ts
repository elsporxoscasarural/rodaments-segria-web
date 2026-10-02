// Datos comunes a los textos legales (aviso legal, privacidad, cookies).
import { empresa } from './empresa';

const { registroMercantil: rm } = empresa;

if (!rm.hoja) {
	// Aviso en la consola al compilar: el aviso legal necesita la hoja del Registro Mercantil antes del lanzamiento.
	console.warn('[legal] Falta la hoja del Registro Mercantil (empresa.registroMercantil.hoja).');
}

/** «Inscrita en el Registro Mercantil de Lleida, Tomo 337, Folio 205, Hoja L-…» */
export const inscripcionRegistral = `Inscrita en el ${rm.registro}, Tomo ${rm.tomo}, Folio ${rm.folio}${rm.hoja ? `, Hoja ${rm.hoja}` : ''}`;

export const domicilio = `${empresa.direccion.poligono}, ${empresa.direccion.calle}, ${empresa.direccion.codigoPostal} ${empresa.direccion.localidad}`;

export const fechaLegal = 'octubre de 2026';
