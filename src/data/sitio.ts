// Ajustes globales del sitio.

export const sitio = {
	/**
	 * ⚠️ INTERRUPTOR DE LANZAMIENTO. Mientras sea false, la web no se indexa en Google:
	 * todas las páginas llevan <meta name="robots" content="noindex"> y robots.txt bloquea a los buscadores.
	 * El día del lanzamiento, cambiar a true (y nada más).
	 */
	indexable: false,
	/** Imagen por defecto al compartir en WhatsApp y redes (public/). 1200 × 630. */
	imagenSocial: '/og-rodaments-segria.jpg',
	idioma: 'es_ES',
};
