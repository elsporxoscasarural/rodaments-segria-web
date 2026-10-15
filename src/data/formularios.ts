// Configuración del envío de formularios (Contacto y Buscar referencia).
// En la web publicada (Dinahosting, con PHP) se envían a /enviar.php, generado por src/pages/enviar.php.ts.
// En local (npm run dev) no hay PHP: endpoint = null y se abre el programa de correo con la consulta redactada.
import { empresa } from './empresa';

export const formularios = {
	/** URL que recibe el formulario. */
	endpoint: (import.meta.env.PROD ? '/enviar.php' : null) as string | null,
	/** Permite adjuntar una foto de la pieza. Solo con un servicio que acepte archivos. */
	adjuntos: false,
	/** Dirección que recibe las consultas. */
	destino: empresa.email,
};
