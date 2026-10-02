// Enlaces del menú principal y del pie. Un solo sitio para cambiarlos.

export const menuPrincipal = [
	{ texto: 'Productos', href: '/productos' },
	{ texto: 'Empresa', href: '/empresa' },
	{ texto: 'Buscar referencia', href: '/buscar-referencia' },
	{ texto: 'Contacto', href: '/contacto' },
] as const;

export const enlacesLegales = [
	{ texto: 'Aviso legal', href: '/aviso-legal' },
	{ texto: 'Privacidad', href: '/privacidad' },
	{ texto: 'Cookies', href: '/cookies' },
] as const;

export const ctaPrincipal = { texto: 'Pedir presupuesto', href: '/contacto' } as const;
