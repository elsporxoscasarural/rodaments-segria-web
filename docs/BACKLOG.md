# Backlog — Web Rodaments Segrià

Estado: ✅ hecho · 🔲 pendiente · ❓ decisión abierta

## 📋 Pendiente del cliente (no bloquea el diseño)
| Tarea | Para qué | Dónde / cómo |
|---|---|---|
| **Hoja del Registro Mercantil** (L-…) → `empresa.ts` | Aviso legal (obligatorio). La compilación avisa mientras falte | Últimas páginas de la escritura de 2009/10 o de constitución (sello de *inscripción*), gestoría o nota simple en sede.registradores.org (CIF B25337767) |
| **Número de WhatsApp** (móvil) | Botones y contacto | Cuando esté dado de alta → `src/data/empresa.ts` |
| **Logo de Carburos Metálicos** en buena calidad y sus normas de uso | Familia Carburos | El cliente lo tiene. Mejor SVG o PNG grande |
| **Marcas que se pueden mostrar** (y sus logos) | Sección de marcas | Confirmar permiso con cada marca. Hasta entonces, ocultas |
| **Confirmar el email** donde llegan los presupuestos | Formularios | ¿rodsegria@rodsegria.es u otro? |
| **Sesión de fotos** (serie de producto sobre fondo claro, correas, detalles) | Catálogo y diseño | Lista y consejos en `docs/FOTOS.md` |
| **Revisión de los textos legales por la gestoría** | Aviso legal, privacidad y cookies | Antes del lanzamiento |
| **Revisar la foto de piñones y poleas** (retocada con IA) | Evitar textos alterados | Si las etiquetas dicen cosas raras, repetirla |


## Fase 0 — Espacio de trabajo ✅
- ✅ Web anterior guardada en la etiqueta `v1-legacy`
- ✅ Proyecto Astro, estructura de carpetas, `.gitignore`, `CLAUDE.md`
- ✅ Imágenes y favicons de la web anterior movidos a `src/assets/img/` y `public/`
- ✅ Logo vectorial limpio a color, monocromo y símbolo en `src/assets/brand/`
- ✅ Datos de contacto recuperados de la web anterior (ver CLAUDE.md)

## Fase 1 — Estructura y contenido
- ✅ Modelo del catálogo: 6 familias, 23 categorías y marcas como datos editables (`src/content/`)
- ✅ Familias aprobadas: Rodamientos y soportes · Transmisión de potencia · Estanqueidad y fluidos · Taller e industria · Agrícola · Gases industriales (Carburos Metálicos)
- ✅ Catálogo revisado con el cliente: familias, categorías y tipos cerrados (`docs/REVISION-CATALOGO.md`)
- 🔲 SEO/GEO de contenido: elegir para cada página la búsqueda principal a la que responde (ver «SEO y GEO desde el principio»)
- ✅ Datos de empresa centralizados en `src/data/empresa.ts`
- ✅ Textos de Inicio y Empresa, con la historia escrita por el cliente (`docs/TEXTOS.md`)
- ✅ Mapa del sitio: Inicio · Productos · Productos/[familia] · Buscar referencia · Empresa · Contacto · Aviso legal · Privacidad · Cookies
- ✅ Textos de Contacto y Buscar referencia (formularios, mensajes y texto RGPD)
- 🔲 Textos legales (aviso legal, privacidad, cookies): se redactan en cuanto llegue la hoja del Registro Mercantil
- ✅ Mapa de Google cargado solo bajo demanda (evita el banner de cookies)
- ✅ Selección provisional de fotos reales en `src/assets/img/fotos/` (ver `docs/FOTOS.md`)
- ✅ Fachada con el letrero corregido, en portada

## Fase 2 — Diseño
- ✅ Paleta decidida: azules del logo (`#015BFE`, `#282B98`) sobre grises claros y blancos. Web clara
- ✅ PRODUCT.md (brief de marca para impeccable): sólida, comprador habitual, «aquí lo tienen» + «me van a ayudar»
- ✅ Dirección visual elegida: **B «Señalética de nave»** (propuestas en https://claude.ai/artifact/EuVDs5Uo9A6JgvihpWpUF2)
- ✅ Prototipo de portada B aprobado (escritorio y móvil): fachada → scroll «entras en la nave» → pasillos → buscador → Carburos → pie. https://claude.ai/artifact/JTNPdKRRDGK3m1dgfiR3yK (copia en `docs/prototipos/portada-b.html`)
- ✅ Sistema de diseño: `DESIGN.md` + `src/styles/tokens.css` (OKLCH, contrastes AA comprobados) + `global.css`; fuentes alojadas en la web (Big Shoulders Display + Hanken Grotesk)
- ✅ Layout base, cabecera (transparente sobre la portada, sólida en el resto), menú móvil accesible a pantalla completa y pie con datos de `empresa.ts`
- 🔲 Favicons nuevos a partir de `simbolo.svg`
- ✅ **Portada construida** en Astro (`src/components/inicio/`): secuencia fachada → almacén con GSAP, familias desde el catálogo, buscador, Carburos
- ✅ Páginas de familia (`/productos/[familia]`): cabecera con foto, categorías con tipos y sinónimos, bloque agrícola, franja «¿No ves lo que buscas?», otras familias. Carburos con su verde
- ✅ Índice `/productos`: familias (Carburos incluido) y listado completo de categorías
- ✅ Contacto (`/contacto`): formulario de presupuesto, datos de contacto, «Cómo llegar» y mapa bajo demanda
- ✅ Buscar referencia (`/buscar-referencia`): formulario con referencias, marca y uso; recibe `?ref=` desde la portada
- ✅ Empresa (`/empresa`): historia del cliente, datos clave, «Familia, oficio y stock», instalaciones con galería, equipo, marcas
- ✅ Página 404 con accesos al catálogo, buscador y familias
- ✅ Aviso legal, privacidad y cookies redactados con los datos reales (`src/data/legal.ts`). **Pendiente:** hoja del Registro Mercantil y **revisión por la gestoría** antes del lanzamiento
- 🔲 Al elegir hosting y servicio de formularios: añadirlos como encargados del tratamiento en `/privacidad`
- 🔲 Si algún día se añade analítica: actualizar `/cookies` y poner banner de consentimiento
- 🔲 Responsive y accesibilidad (contraste, foco y navegación con teclado)

## Fase 3 — Animaciones
- ✅ GSAP + ScrollTrigger (secuencia de portada) y Lenis (scroll con inercia) + apariciones en `src/scripts/movimiento.ts`
- 🔲 Animación de entrada del hero, apariciones al hacer scroll y transiciones entre páginas (View Transitions de Astro)
- 🔲 Comprobar `prefers-reduced-motion` y el rendimiento en móvil

## SEO y GEO desde el principio
El SEO (Google) y el GEO (aparecer en respuestas de IA como ChatGPT, Gemini o los resúmenes de Google) **se trabajan desde la fase 1**. La fase 4 es solo la parte técnica y la revisión final.
- **Fase 1 (ahora):** URLs limpias y estables, una página por intención de búsqueda, textos con información concreta (qué, para quién, dónde, desde cuándo), preguntas frecuentes reales.
- **Fase 2-3:** HTML semántico, encabezados correctos, velocidad (las animaciones no deben penalizarla), imágenes optimizadas con `alt`.
- **Fuera de la web (en paralelo, ya):** ficha de Google Business completa y coherente (nombre, dirección y teléfono idénticos en todas partes), reseñas, directorios del sector.

## Fase 4 — SEO técnico
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
- ❓ **Envío de los formularios** (ahora provisional: abre el correo del cliente con la consulta redactada). Para activarlo: poner el `endpoint` en `src/data/formularios.ts` y, si acepta archivos, `adjuntos: true` (foto de la pieza). Una web estática no puede enviar emails. Opciones: un servicio externo (Formspree, Web3Forms…), funciones del hosting o un `mailto:` provisional. Se decide junto al hosting
- 🔲 Quitar el `noindex` provisional
- 🔲 HTTPS, redirecciones desde la web antigua y analítica respetuosa con la privacidad (si se quiere)

## Ideas para estudiar en la empresa
- Servicios de valor añadido (montaje, corte de correas a medida, prensado de mangueras, asesoramiento in situ). Ahora no se ofrecen. Si algún día se ofrecen, darían mucho valor a la web y al SEO.

## Versión en catalán (futuro)
- Usar el vocabulario real de los clientes también en catalán (rodaments, coixinets, corretges, politges…). Revisarlo con la empresa antes de traducir.

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
| Horario | Lunes a viernes, 8:00–13:30 y 15:00–18:00 ✅ |
| WhatsApp | 🔲 número pendiente |
| Dominio | `rodsegria.es` ✅ |
| Carpeta de imágenes | Originales en `~/Desktop/Botiga/Rodaments segria/` (fuera del repo). Confirmar si es la definitiva y si hay más fotos |
| Logo vectorial | ✅ SVG limpio (calco). Si existe el original del diseñador, mejor |
| Marcas, proveedores y textos de empresa | 🔲 más adelante |
