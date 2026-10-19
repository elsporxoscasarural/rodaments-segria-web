// Enlaces del menú principal y del pie. Un solo sitio para cambiarlos.

export const menuPrincipal = [
	{ texto: 'Productos', href: '/productos' },
	{ texto: 'Empresa', href: '/empresa' },
	{ texto: 'Buscar referencia', href: '/buscar-referencia' },
	{ texto: 'Contacto', href: '/contacto' },
] as const;

// Enlaces útiles que no van en el menú principal (pie y menú del móvil)
export const enlacesSecundarios = [{ texto: 'Catálogos', href: '/catalogos' }] as const;

export const enlacesLegales = [
	{ texto: 'Aviso legal', href: '/aviso-legal' },
	{ texto: 'Privacidad', href: '/privacidad' },
	{ texto: 'Cookies', href: '/cookies' },
] as const;

export const ctaPrincipal = { texto: 'Pedir presupuesto', href: '/contacto' } as const;
