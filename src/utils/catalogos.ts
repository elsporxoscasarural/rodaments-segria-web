// Catálogos listos para pintar: con su enlace, el número de páginas y el peso del PDF (calculados al compilar).
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import { PDFDocument } from 'pdf-lib';

export interface Catalogo {
	id: string;
	titulo: string;
	marca?: string;
	categorias: string[];
	href: string;
	externo: boolean;
	/** «PDF · 20 págs. · 3,5 MB» o «Web de la marca» */
	detalle: string;
}

const carpeta = path.join(process.cwd(), 'public', 'catalogos');
const peso = (bytes: number) =>
	bytes < 1024 * 1024
		? `${Math.max(1, Math.round(bytes / 1024))} KB`
		: `${(bytes / 1024 / 1024).toLocaleString('es-ES', { maximumFractionDigits: 1 })} MB`;

async function preparar(c: CollectionEntry<'catalogos'>): Promise<Catalogo> {
	const { titulo, marca, archivo, enlace } = c.data;
	const base = { id: c.id, titulo, marca, categorias: c.data.categorias.map((r) => r.id) };
	if (enlace) return { ...base, href: enlace, externo: true, detalle: 'Catálogo online de la marca' };

	const ruta = path.join(carpeta, archivo!);
	const info = await stat(ruta).catch(() => {
		throw new Error(`Catálogo «${c.id}»: no existe public/catalogos/${archivo}`);
	});
	const pdf = await PDFDocument.load(await readFile(ruta), { ignoreEncryption: true, updateMetadata: false });
	const paginas = pdf.getPageCount();
	return {
		...base,
		href: `/catalogos/${archivo}`,
		externo: false,
		detalle: `PDF · ${paginas} ${paginas === 1 ? 'pág.' : 'págs.'} · ${peso(info.size)}`,
	};
}

let cache: Promise<Catalogo[]> | undefined;

/** Todos los catálogos publicados (se calculan una sola vez por compilación). */
export function getCatalogos(): Promise<Catalogo[]> {
	cache ??= getCollection('catalogos', (c) => c.data.publicar).then((lista) => Promise.all(lista.map(preparar)));
	return cache;
}

/** Catálogos de una categoría: primero los PDF, luego los enlaces a webs de marcas. */
export async function catalogosDe(categoria: string): Promise<Catalogo[]> {
	return (await getCatalogos())
		.filter((c) => c.categorias.includes(categoria))
		.sort((a, b) => Number(a.externo) - Number(b.externo));
}
