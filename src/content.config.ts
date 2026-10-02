import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Catálogo: familias → categorías. Cada entrada es un archivo en src/content/<colección>/.
// El nombre del archivo es el slug de la URL (p. ej. familias/transmision-de-potencia.md → /productos/transmision-de-potencia).

const sectores = z.enum(['industria', 'agricola', 'taller']);

const familias = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/familias' }),
	schema: ({ image }) =>
		z.object({
			nombre: z.string(),
			orden: z.number(),
			resumen: z.string(),
			imagen: image().optional(),
			// Icono de línea que identifica la familia en las tarjetas (src/components/IconoFamilia.astro).
			icono: z.enum(['rodamiento', 'transmision', 'estanqueidad', 'taller', 'agricola', 'gas']).optional(),
			// Familia con identidad propia (p. ej. Carburos Metálicos): el diseño puede tratarla aparte.
			destacada: z.boolean().default(false),
			// Familia que, además de sus categorías, muestra las de otras familias de este sector.
			sectorRelacionado: sectores.optional(),
			borrador: z.boolean().default(true),
		}),
});

const categorias = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/categorias' }),
	schema: ({ image }) =>
		z.object({
			nombre: z.string(),
			familia: reference('familias'),
			orden: z.number(),
			resumen: z.string(),
			tipos: z.array(z.string()).default([]),
			// Otros nombres con los que el cliente busca la categoría (p. ej. rodamientos → cojinetes). Para SEO y el buscador.
			sinonimos: z.array(z.string()).default([]),
			sectores: z.array(sectores).default([]),
			marcas: z.array(reference('marcas')).default([]),
			imagen: image().optional(),
			borrador: z.boolean().default(true),
		}),
});

const marcas = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/marcas' }),
	schema: ({ image }) =>
		z.object({
			nombre: z.string(),
			// Orden en que se citan (de más a menos relevante para el negocio).
			orden: z.number().default(99),
			web: z.url().optional(),
			logo: image().optional(),
			// publicar: el nombre aparece escrito en la web (marcas que se distribuyen y hay en stock).
			publicar: z.boolean().default(false),
			// permisoLogo: el logo solo se muestra con permiso confirmado de la marca.
			permisoLogo: z.boolean().default(false),
		}),
});

export const collections = { familias, categorias, marcas };
