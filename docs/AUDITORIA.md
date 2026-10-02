# Auditoría de calidad (2 de octubre de 2026)

Herramientas: normas de interfaz web de Vercel (skill web-design-guidelines), auditoría técnica de impeccable, **axe-core 4.10** (WCAG 2.2 AA + buenas prácticas) en 12 páginas, **Lighthouse 12.8** (móvil y escritorio) sobre la versión compilada y pruebas propias de desbordamiento y tamaño de letra (320 / 390 / 820 / 1280 / 1600 px; letra al 100, 130 y 150 %).

## Resultado

| Dimensión (impeccable) | Antes | Después |
|---|---|---|
| Accesibilidad | 3 | 4 |
| Rendimiento | 3 | 4 |
| Adaptación a pantallas | 3 | 4 |
| Sistema de diseño (tokens) | 3 | 4 |
| Anti-patrones de IA | 4 | 4 |
| **Total** | **16/20** | **20/20** |

| Lighthouse (móvil) | Rendimiento | Accesibilidad | Buenas prácticas | SEO* |
|---|---|---|---|---|
| Portada | 91 → **97** | 100 | 100 | 69* |
| Familia | 97 → **99** | 100 | 100 | 69* |
| Empresa | 96 → **99** | 100 | 100 | 69* |
| Contacto | 100 | 100 | 100 | 69* |

En escritorio, 100 en todas las categorías y páginas medidas.
\* El SEO solo baja por el bloqueo de indexación intencionado hasta el lanzamiento (`src/data/sitio.ts`). El resto de comprobaciones de SEO pasan.

**axe-core:** 0 errores en las 12 páginas (antes: 3 avisos moderados y 1 de contraste).
**Desbordamiento horizontal:** ninguno en ninguna combinación de ancho y tamaño de letra.

## Correcciones aplicadas

**P1**
- Con la letra muy ampliada, la cabecera se salía de la pantalla. Ahora usa *container queries*: se reorganiza según su espacio real (WCAG 1.4.4 / 1.4.10).
- Animaciones que no se detenían (rodamiento y pista de scroll). Ahora duran menos de 5 s y paran (WCAG 2.2.2).

**P2**
- Bloques `aside` anidados dentro de secciones (3 páginas) → `div`.
- «404» decorativo convertido en pseudoelemento, para que no cuente como texto con poco contraste.
- Rendimiento: CSS dentro del HTML (sin peticiones que bloqueen el primer pintado), fuentes críticas precargadas y **fotos en AVIF con WebP de respaldo** (~50 % menos de peso).
- Tamaños de foto ajustados al ancho real en móvil.
- ~58 colores escritos a mano → tokens (`color-mix` sobre los tokens de `tokens.css`; añadidos `--error`, `--error-borde` y `--correcto`).
- `theme-color` por página (azul en la portada, claro en el resto).
- Rejillas y tarjetas que podían ensancharse con palabras largas: `minmax(0, 1fr)` y `min(100%, X)` en toda la web. Los titulares parten una palabra solo si de verdad no cabe (`overflow-wrap: anywhere`).

**P3**
- `translate="no"` en nombres de marca y de empresa, para que el traductor del navegador no convierta «Rodaments» en «Rodamientos».
- Formularios: sin corrector en email, referencias y marca. Ejemplos en los placeholders con «…». Aviso al salir con una consulta a medio escribir.
- Números con `Intl.NumberFormat` (agrupa también los de 4 cifras: 2.000).
- Táctil: `touch-action: manipulation`, sin destello al tocar, CTA de cabecera de 44 px y menú móvil con `overscroll-behavior: contain`.
- `scroll-padding-top`, para que la cabecera fija no tape lo que se enfoca con teclado.

## Normas que no aplican (decisiones conscientes)
- *Title Case* en titulares y botones: es una norma del inglés. En español se escribe en minúscula salvo la primera letra.
- «Evitar la primera persona»: la voz de la marca usa «nosotros» para la empresa y «tú» para el cliente (PRODUCT.md).
- Modo oscuro: la web es clara por decisión de marca (DESIGN.md).

## Pendiente (no depende del código)
- Revisión de los textos legales por la gestoría y hoja del Registro Mercantil.
- Activar `indexable: true` el día del lanzamiento.
- Repetir esta auditoría ya publicada, con el hosting real (cabeceras de caché, HTTPS, compresión).
