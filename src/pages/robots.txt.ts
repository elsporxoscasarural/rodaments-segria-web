// robots.txt generado: depende del interruptor de lanzamiento (src/data/sitio.ts).
import type { APIRoute } from 'astro';
import { sitio } from '../data/sitio';

export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL('sitemap-index.xml', site).href;
	const cuerpo = sitio.indexable
		? `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`
		: `# Web en construcción: no indexar todavía (src/data/sitio.ts → indexable)\nUser-agent: *\nDisallow: /\n`;
	return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
