// Datos de la empresa: única fuente para toda la web (cabecera, pie, contacto, SEO, datos estructurados).
// Si cambia un dato, se cambia aquí y se actualiza en todas las páginas.

export const empresa = {
	nombre: 'Rodaments Segrià',
	// Datos legales (aviso legal, LSSI art. 10).
	razonSocial: 'Rodaments Segria, S.L.',
	cif: 'B25337767',
	// TODO: falta el número de hoja (L-…). Pedirlo a la gestoría o en una nota simple.
	registroMercantil: { registro: 'Registro Mercantil de Lleida', tomo: '337', folio: '205', hoja: null as string | null },
	fundacion: 1988,
	referenciasEnStock: 500_000,
	metrosAlmacen: 2000,
	personas: 7,
	generacionActual: 3,
	web: 'https://www.rodsegria.es',
	email: 'rodsegria@rodsegria.es',
	telefono: { visible: '973 20 80 64', enlace: '+34973208064' },
	// TODO: número de WhatsApp (móvil) en proceso de alta. Mientras sea null, la web no muestra WhatsApp.
	whatsapp: null as { visible: string; enlace: string } | null,
	direccion: {
		poligono: 'Pol. Ind. Camí dels Frares',
		calle: "Carrer d'Alcarràs, 78",
		codigoPostal: '25191',
		localidad: 'Lleida',
		provincia: 'Lleida',
		pais: 'ES',
		geo: { lat: 41.5912, lng: 0.5897 },
	},
	aparcamiento: 'Para coches, furgonetas y camiones', // se muestra bajo el título «Aparcamiento»
	horario: {
		dias: 'De lunes a viernes',
		tramos: [
			{ abre: '08:00', cierra: '13:30' },
			{ abre: '15:00', cierra: '18:00' },
		],
	},
	ventaParticulares: true,
	envios: 'A toda España mediante agencias de transporte profesionales',
	// Término exacto del cartel de Carburos: «Distribuidor autorizado» (no «oficial»).
	distribuidorAutorizado: ['Carburos Metálicos'],
} as const;

/** Años de trayectoria, calculados (no caducan). */
export const anosTrayectoria = () => new Date().getFullYear() - empresa.fundacion;

/** Números con punto de miles («500.000», «2.000»). useGrouping 'always': en español Intl no agrupa los de 4 cifras por defecto. */
const numeros = new Intl.NumberFormat('es-ES', { useGrouping: 'always' });
export const formatoNumero = (n: number) => numeros.format(n);
