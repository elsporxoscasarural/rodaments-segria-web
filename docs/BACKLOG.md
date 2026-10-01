# Backlog — Web Rodaments Segrià

Estado: ✅ hecho · 🔲 pendiente · ❓ decisión abierta

## Fase 0 — Espacio de trabajo ✅
- ✅ Web anterior guardada en la etiqueta `v1-legacy`
- ✅ Proyecto Astro, estructura de carpetas, `.gitignore`, `CLAUDE.md`
- ✅ Imágenes y favicons de la web anterior movidos a `src/assets/img/` y `public/`

## Fase 1 — Estructura y contenido
- 🔲 Definir el mapa del sitio. Propuesta: Inicio · Productos (índice + una página por categoría) · Empresa · Contacto/Presupuesto · Aviso legal · Privacidad · Cookies
- 🔲 Montar la colección `productos` en `src/content/`: nombre, descripción, marcas, imagen y aplicaciones de cada categoría
- 🔲 Redactar los textos: historia (+30 años, empresa familiar), servicios y marcas con las que trabajan
- 🔲 Seleccionar y optimizar fotos reales desde `~/Desktop/Botiga/Rodaments segria/`
- 🔲 Textos legales (RGPD/LSSI). Son obligatorios si hay formulario
- ❓ Lista de marcas que se pueden mostrar (¿logos con permiso?)

## Fase 2 — Diseño
- ❓ Paleta: la web anterior era oscura con azul. ¿Mantener el azul, volver al naranja/amarillo o algo nuevo? Que encaje con el logo
- 🔲 Sistema de diseño: tokens de color, tipografía y espaciado en `src/styles/`
- 🔲 Layout base, cabecera con navegación (también en móvil) y pie
- 🔲 Diseño de cada página: inicio → productos → categoría → empresa → contacto
- 🔲 Responsive y accesibilidad (contraste, foco y navegación con teclado)

## Fase 3 — Animaciones
- 🔲 Instalar GSAP y ScrollTrigger y añadir la base en `src/scripts/`
- 🔲 Animación de entrada del hero, apariciones al hacer scroll y transiciones entre páginas (View Transitions de Astro)
- 🔲 Comprobar `prefers-reduced-motion` y el rendimiento en móvil

## Fase 4 — SEO
- 🔲 Título, descripción, Open Graph y URL canónica en cada página (desde el layout)
- 🔲 Datos estructurados `LocalBusiness` (dirección, horario, teléfono)
- 🔲 `robots.txt` y `sitemap.xml` (@astrojs/sitemap), **solo cuando el dominio esté confirmado**
- 🔲 Ficha de Google Business coherente con la web
- 🔲 Revisión con Lighthouse: rendimiento, accesibilidad y SEO

## Fase 5 — Hosting y dominio
- ❓ Elegir hosting estático. Cualquiera sirve porque la salida es HTML estático
- ❓ Dominio (¿se mantiene el actual, si lo hay?)
- ❓ **Envío del formulario de presupuesto.** Una web estática no puede enviar emails. Opciones: un servicio externo (Formspree, Web3Forms…), funciones del hosting o un `mailto:` provisional. Se decide junto al hosting
- 🔲 Añadir `site` en `astro.config.mjs` y quitar el `noindex` provisional
- 🔲 HTTPS, redirecciones desde la web antigua y analítica respetuosa con la privacidad (si se quiere)

## Fase 6 — Lanzamiento
- 🔲 Revisión final en móvil y escritorio
- 🔲 Probar el formulario de principio a fin
- 🔲 Publicar, enviar el sitemap a Google Search Console y revisar los enlaces
- 🔲 Después: versión en catalán (`/ca/`)

---

## Datos pendientes del negocio
| Dato | Valor |
|---|---|
| Dirección | 🔲 |
| Teléfono | 🔲 |
| Email de contacto (donde llegan los presupuestos) | 🔲 |
| Horario | 🔲 |
| Dominio | 🔲 |
| Carpeta de imágenes | Originales en `~/Desktop/Botiga/Rodaments segria/` (fuera del repo). Confirmar si es la definitiva y si hay más fotos |
| Logo en alta calidad / vectorial (SVG) | 🔲 Solo hay PNG |
| Marcas que se distribuyen | 🔲 |
