// Configuración del envío de formularios (Contacto y Buscar referencia).
// Mientras no haya servicio de envío (se decide con el hosting, ver docs/BACKLOG.md fase 5),
// endpoint = null y al enviar se abre el programa de correo del cliente con la consulta redactada.
import { empresa } from './empresa';

export const formularios = {
	/** URL del servicio que recibe el formulario (p. ej. Web3Forms, Formspree o una función del hosting). */
	endpoint: null as string | null,
	/** Permite adjuntar una foto de la pieza. Solo con un servicio que acepte archivos. */
	adjuntos: false,
	/** Dirección que recibe las consultas. */
	destino: empresa.email,
};
