# Backlog — Web Rodaments Segrià

Estado: ✅ hecho · 🔲 pendiente · ❓ decisión abierta

## Fase 0 — Espacio de trabajo ✅
- ✅ Web anterior guardada en la etiqueta `v1-legacy`
- ✅ Proyecto Astro, estructura de carpetas, `.gitignore`, `CLAUDE.md`
- ✅ Imágenes y favicons de la web anterior movidos a `src/assets/img/` y `public/`
- ✅ Logo vectorial limpio a color, monocromo y símbolo en `src/assets/brand/`
- ✅ Datos de contacto recuperados de la web anterior (ver CLAUDE.md)

## Fase 1 — Estructura y contenido
- 🔲 Reservar en el mapa del sitio la sección **"Buscador de referencias"**. Mientras tanto: formulario de "¿Buscas una referencia?" que genera presupuestos (ver `docs/BUSCADOR-REFERENCIAS.md`)
- 🔲 Definir el mapa del sitio. Propuesta: Inicio · Productos (índice + una página por categoría) · Empresa · Contacto/Presupuesto · Aviso legal · Privacidad · Cookies
- 🔲 Montar la colección `productos` en `src/content/`: nombre, descripción, marcas, imagen y aplicaciones de cada categoría
- 🔲 Redactar los textos: historia (+30 años, empresa familiar), servicios y marcas con las que trabajan
- 🔲 Seleccionar y optimizar fotos reales desde `~/Desktop/Botiga/Rodaments segria/`
- 🔲 Textos legales (RGPD/LSSI). Son obligatorios si hay formulario
- ❓ Lista de marcas que se pueden mostrar (¿logos con permiso?)

## Fase 2 — Diseño
- ✅ Paleta decidida: azules del logo (`#015BFE`, `#282B98`) sobre grises claros y blancos. Web clara
- 🔲 Proponer una dirección visual (tipografía, tono, referencias) y aprobarla antes de construir
- 🔲 Sistema de diseño (escala de neutros, contraste AA de los azules sobre fondos claros): tokens de color, tipografía y espaciado en `src/styles/`
- 🔲 Layout base, cabecera con navegación (también en móvil) y pie
- 🔲 Favicons nuevos a partir de `simbolo.svg`
- 🔲 Diseño de cada página: inicio → productos → categoría → empresa → contacto
- 🔲 Responsive y accesibilidad (contraste, foco y navegación con teclado)

## Fase 3 — Animaciones
- 🔲 Instalar GSAP y ScrollTrigger y añadir la base en `src/scripts/`
- 🔲 Animación de entrada del hero, apariciones al hacer scroll y transiciones entre páginas (View Transitions de Astro)
- 🔲 Comprobar `prefers-reduced-motion` y el rendimiento en móvil

## Fase 4 — SEO
- 🔲 Título, descripción, Open Graph y URL canónica en cada página (desde el layout)
- 🔲 Datos estructurados `LocalBusiness` (dirección, horario, teléfono)
- 🔲 `robots.txt` y `sitemap.xml` (@astrojs/sitemap), antes del lanzamiento
- 🔲 Ficha de Google Business coherente con la web
- 🔲 Revisión con Lighthouse: rendimiento, accesibilidad y SEO

## Fase 5 — Hosting y dominio
- ❓ Elegir hosting estático. Cualquiera sirve porque la salida es HTML estático
- ✅ Dominio: `rodsegria.es` (definitivo, `site` ya configurado en `astro.config.mjs`)
- 🔲 Comprar `rodamentssegria.es` (y `.com`) y redirigirlos con 301 a `www.rodsegria.es`
- ⚠️ **No romper el email** `rodsegria@rodsegria.es`: al cambiar los DNS hay que conservar los registros MX del correo. Revisarlo antes de tocar nada
- 🔲 Recomendado: publicar una versión de pruebas (sin indexar) al terminar la fase 2 para revisarla en móviles reales y probar el formulario. El dominio se conecta en el lanzamiento
- ❓ **Envío del formulario de presupuesto.** Una web estática no puede enviar emails. Opciones: un servicio externo (Formspree, Web3Forms…), funciones del hosting o un `mailto:` provisional. Se decide junto al hosting
- 🔲 Quitar el `noindex` provisional
- 🔲 HTTPS, redirecciones desde la web antigua y analítica respetuosa con la privacidad (si se quiere)

## Proyecto paralelo — Buscador de referencias
- 🔲 Piloto con 1-2 marcas. Detalle y plan en `docs/BUSCADOR-REFERENCIAS.md`

## Fase 6 — Lanzamiento
- 🔲 Revisión final en móvil y escritorio
- 🔲 Probar el formulario de principio a fin
- 🔲 Publicar, enviar el sitemap a Google Search Console y revisar los enlaces
- 🔲 Después: versión en catalán (`/ca/`)

---

## Datos pendientes del negocio
| Dato | Valor |
|---|---|
| Dirección | Pol. Ind. Camí dels Frares, Carrer d'Alcarràs, 78 · 25191 Lleida ✅ |
| Teléfono | 973 20 80 64 ✅ |
| Email de contacto (donde llegan los presupuestos) | rodsegria@rodsegria.es ✅ (confirmar que los presupuestos van aquí) |
| Horario | Lunes a viernes, 8:30–13:30 y 15:00–18:30 ✅ |
| Dominio | `rodsegria.es` ✅ |
| Carpeta de imágenes | Originales en `~/Desktop/Botiga/Rodaments segria/` (fuera del repo). Confirmar si es la definitiva y si hay más fotos |
| Logo vectorial | ✅ SVG limpio (calco). Si existe el original del diseñador, mejor |
| Marcas, proveedores y textos de empresa | 🔲 más adelante |
