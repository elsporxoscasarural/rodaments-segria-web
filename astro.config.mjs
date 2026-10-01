// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// TODO: añadir `site: 'https://<dominio>'` cuando el dominio esté confirmado
	// (necesario para URLs canónicas y sitemap).
	i18n: {
		defaultLocale: 'es',
		// Catalán previsto en una fase posterior: añadir 'ca' aquí y crear src/pages/ca/.
		locales: ['es'],
		routing: { prefixDefaultLocale: false },
	},
});
