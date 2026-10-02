// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.rodsegria.es',
	i18n: {
		defaultLocale: 'es',
		// Catalán previsto en una fase posterior: añadir 'ca' aquí y crear src/pages/ca/.
		locales: ['es'],
		routing: { prefixDefaultLocale: false },
	},
	// CSS dentro del HTML: sin peticiones que bloqueen el primer pintado (la web es pequeña, compensa)
	build: { inlineStylesheets: 'always' },
	// Sitemap automático en /sitemap-index.xml (sin la página 404)
	integrations: [sitemap({ filter: (pagina) => !pagina.includes('/404') })],
});
