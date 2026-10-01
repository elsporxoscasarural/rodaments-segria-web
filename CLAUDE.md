# Rodaments Segrià — Web

## Negocio
Rodaments Segrià es una empresa familiar de suministros industriales en Lleida con más de 30 años de trayectoria. Vende rodamientos, correas, piñones, cadenas, retenes, soportes, reductores, motores eléctricos, extractores y material de taller.

**La web no muestra precios**, porque varían según el cliente. Es un **catálogo con solicitud de presupuesto y contacto**. No añadas precios, carrito ni checkout.

## Decisiones tomadas
- **Stack:** Astro, con salida estática (HTML, CSS y JS). No depende de ningún proveedor de hosting.
- **Hosting y dominio:** pendientes. No asumas ningún proveedor ni añadas adaptadores o archivos de configuración de un host concreto.
- **Repo propio:** `elsporxoscasarural/rodaments-segria-web`. No se anidan repos dentro de este.
- **Web anterior:** guardada en la etiqueta git `v1-legacy`. Era un HTML único con fondo oscuro y acentos azules.
- **Idioma:** castellano en la raíz (`/`). El catalán llegará más adelante en `/ca/` (ver `i18n` en `astro.config.mjs`). Escribe las URLs y los textos pensando en que se traducirán.
- **`robots.txt` y `sitemap.xml`:** se crean cuando el dominio esté confirmado. Hasta entonces la página provisional lleva `noindex`.

## Comandos
```bash
npm install        # instalar dependencias (Node >= 22.12, ver .nvmrc)
npm run dev        # servidor de desarrollo → http://localhost:4321
npm run build      # genera la web estática en dist/
npm run preview    # sirve dist/ para revisar el resultado final
```

## Estructura
```
src/
  pages/        rutas (cada archivo es una URL)
  layouts/      plantillas de página (head, SEO, cabecera, pie)
  components/   componentes .astro reutilizables
  content/      colecciones de contenido (catálogo: un archivo por categoría)
  assets/img/   imágenes que optimiza Astro (<Image />)
  styles/       variables (colores, tipografía, espaciado) y estilos globales
  scripts/      JS del cliente (animaciones GSAP)
public/         archivos que se copian tal cual (favicons)
docs/           BACKLOG.md con fases y datos pendientes
```

## Convenciones
- **Idioma:** textos, commits y documentación en castellano. Código (variables, componentes, clases) en inglés.
- **Nombres:** componentes en `PascalCase.astro`; rutas, imágenes y slugs en `kebab-case` sin acentos (`/productos/rodamientos`).
- **Estilos:** CSS propio con variables en `src/styles/`. Usa los tokens y no pongas colores sueltos en los componentes. Sin frameworks de CSS salvo que se decida lo contrario.
- **Imágenes:** los originales están en `~/Desktop/Botiga/Rodaments segria/`, fuera del repo. Al repo solo entran versiones optimizadas en `src/assets/img/`, y se usan con `<Image />` de `astro:assets`. Nunca subas vídeos ni originales pesados.
- **Animaciones:** GSAP y ScrollTrigger en `src/scripts/`. Respeta siempre `prefers-reduced-motion`. Anima solo `transform` y `opacity`.
- **JS:** el mínimo posible. Astro no envía JS al navegador por defecto, así que mantenlo así salvo para las animaciones y el formulario.
- **Accesibilidad y SEO:** HTML semántico, `alt` en todas las imágenes, un solo `<h1>` por página, y título y descripción propios en cada página.
- **Git:** commits pequeños y descriptivos en castellano. Nada de `push --force` a `main`. Nunca guardes tokens ni credenciales en archivos (el push se hace con `gh auth`).

## Skills de diseño recomendadas
`impeccable` o `frontend-design` para diseñar, `gsap-*` para animaciones y `web-design-guidelines` para revisar. Las fotos de apoyo pueden venir del conector de Unsplash, pero se priorizan las fotos reales de la tienda.
