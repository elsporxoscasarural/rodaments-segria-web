# Design

> Sistema visual de la web de Rodaments Segrià. Dirección elegida: **B «Señalética de nave»**. Los valores viven en `src/styles/tokens.css`; este documento explica el porqué y las reglas de uso. Prototipo de referencia: `docs/prototipos/portada-b.html`.

## Visual Theme & Atmosphere
Una nave industrial vista con orgullo: **rotunda, sólida y luminosa**. La web es clara (grises fríos casi blancos) y las **fotos reales del almacén** son las protagonistas. Los titulares son **rotulación industrial en mayúsculas**, como los carteles de los pasillos. El **azul del logo** marca la acción y el **índigo noche** da peso a los momentos clave (portada, cifras, pie).

**Escena:** el responsable de compras de una empresa de Lleida, en su oficina por la mañana, con luz natural y pantalla de escritorio, evaluando con calma si este proveedor es fiable para años. Lo que necesita es una web clara, legible y seria.

**Elemento propio:** la **señalética del almacén**. Cada familia de producto es un **pasillo con su letra** (A, B, C…) y aparecen **placas** (letra en un cuadrado azul + texto sobre blanco) como los carteles de las estanterías. Es la columna vertebral de la navegación del catálogo.

**Recorrido de la portada:** la fachada desde la calle → al hacer scroll «entras» en la nave → datos sobre el almacén → pasillos.

## Color Palette & Roles
Estrategia: **Comprometida en momentos concretos y contenida en el resto.** El 80 % de la superficie es neutra y clara. El índigo noche cubre la portada (como velo de foto), la frase de cifras y el pie. El azul solo marca la acción y los acentos.

| Token | Valor | Rol |
|---|---|---|
| `--azul` | #015BFE | Acción principal (botones, enlaces activos, placas). Contraste 5,2:1 sobre claro. |
| `--azul-hover` | #0047D1 | Hover del azul |
| `--azul-claro` | #6F9BFF | Acentos de texto sobre fondos oscuros (6,4:1 sobre noche) |
| `--indigo` | #282B98 | Color de marca secundario, hover sobre noche |
| `--noche` | #14163F | Secciones oscuras, velos sobre fotos, pie. **Nunca negro.** |
| `--n0` | #FBFBFD | Fondo principal (nunca blanco puro) |
| `--n1` | #F1F2F6 | Fondo alterno de sección |
| `--n2` / `--n3` | #E4E6EE / #C7CBD8 | Líneas, bordes |
| `--n6` | #5C6277 | Texto secundario (AA) |
| `--n7` | #3B4057 | Texto de párrafo |
| `--tinta` | #16182E | Titulares |
| `--cm-verde` | #007A3E | **Solo Carburos Metálicos**: fondo de su bloque y su familia |
| `--cm-cian` | #00A8E0 | Símbolo del logo de Carburos (no usar en la interfaz) |

**Reglas:**
- Nada de degradados decorativos. Los únicos degradados son **velos funcionales** (de noche a transparente) para leer texto sobre foto, y el fundido azul→cielo de la portada en móvil.
- El naranja de las estanterías está en las fotos: **no se usa naranja en la interfaz**.
- **Carburos usa sus colores, no los nuestros.** Su verde no aparece fuera de su bloque y su familia.

## Typography
| Rol | Familia | Uso |
|---|---|---|
| Display | **Big Shoulders Display** (variable, 700–900) | Titulares, letras de pasillo, placas grandes, teléfono del pie. **Siempre en MAYÚSCULAS**, interlineado 0,85–0,9. |
| Texto | **Hanken Grotesk** (variable, 400–700) | Párrafos, botones, menú, formularios, etiquetas. |

- Las dos están alojadas en la propia web (paquetes `@fontsource-variable`), sin peticiones a Google: más privacidad y más velocidad.
- Escala fluida en `tokens.css`: `--t-mega` (portada) · `--t-1` (sección) · `--t-2` · `--t-3` (pasillo) · `--t-lead` · `--t-base` (17 px) · `--t-sm` · `--t-xs`.
- Párrafos de 62 caracteres de ancho como máximo. Texto base de 17 px por un público amplio.
- Etiquetas pequeñas en mayúsculas: solo dentro de **placas**, nunca como antetítulo repetido encima de cada sección.

## Component Stylings
- **Botón:** rectángulo sin radio, texto en negrita de 15 px y padding generoso. Variantes: azul (principal), claro (sobre foto u oscuro) y noche (sobre fondo azul). Al pulsar, `scale(.97)`. Flecha `→` que se desplaza 3 px en hover.
- **Placa:** cuadrado de color con letra en Big Shoulders + texto en mayúsculas sobre blanco. Es el «cartel de pasillo». Se usa en la portada («A · Lleida, desde 1988») y para identificar familias.
- **Pasillo (tarjeta de familia):** foto real a sangre con velo noche desde abajo. Letra gigante arriba a la izquierda, nº de categorías arriba a la derecha, nombre y categorías abajo. En hover, la foto se acerca (`scale 1.06`) y aparece «Ver familia →». La primera es doble de ancha: **nunca una cuadrícula de tarjetas idénticas**.
- **Campo de búsqueda de referencia:** borde de 2 px en noche, texto grande, botón noche que pasa a azul. Siempre con ejemplo real (`6205-2RS x 10`).
- **Bloque Carburos:** fondo `--cm-verde`, logo sobre **placa blanca** con «Distribuidor autorizado», etiquetas con borde blanco y foto del mostrador fundida con el verde.
- **Navegación:** fija. Transparente con logo blanco sobre fotos; sólida (n0 al 96 %) con logo a color sobre contenido claro. Teléfono siempre visible en escritorio.
- **Iconos:** ninguno decorativo. Nunca emojis.

## Layout Principles
- Margen lateral fluido `--g`, ancho máximo de 1440 px y secciones separadas por `--seccion`.
- **Fotos a sangre** (de borde a borde) para la portada, la nave, los pasillos y Carburos. El texto, alineado a la izquierda.
- Ritmo alterno: oscuro (portada y nave) → claro (pasillos) → blanco (buscador) → verde (Carburos) → noche (pie).
- Las cifras van **dentro de frases**, nunca como fila de «número grande + etiqueta + icono».
- **Móvil:** en la portada, el texto va arriba sobre el azul del logo, fundido con el cielo, y la fachada abajo despejada. Botones de al menos 44 px de alto.

## Motion
- **Scroll con inercia** (Lenis, `lerp 0.1`) y **animaciones ligadas al scroll** (GSAP ScrollTrigger con `scrub`).
- **Momento estrella:** la entrada en la nave (fachada que se acerca, la nave se abre desde la puerta, las cifras aparecen línea a línea). Es el único movimiento llamativo. El resto es discreto.
- **Apariciones:** desplazamiento de 28 px y opacidad, `--d-lenta` con `--ease` (ease-out-quint). Escalonado de 70 ms en rejillas.
- **Transiciones entre páginas** con View Transitions de Astro.
- Sin rebotes ni curvas elásticas. Solo se animan `transform`, `opacity` y `clip-path`.
- `prefers-reduced-motion`: sin inercia ni secuencia fijada. Todo se muestra estático y completo.

## Do's and Don'ts
**Sí**
- Fotos reales de la empresa, cuanto más grandes mejor.
- Datos concretos y comprobables (1988, 500.000, 2.000 m², tercera generación).
- Placas y letras de pasillo como sistema.
- «Buscar referencia» y «Pedir presupuesto» siempre a mano.

**No**
- Emojis, iconos en cajas redondeadas, cuadrículas de tarjetas idénticas, filas de cifras con iconos.
- Degradados decorativos (sobre todo azul-violeta), glassmorphism, sombras pesadas, esquinas redondeadas.
- Imágenes de stock o generadas con IA, y fotos retocadas con IA en las que se lean textos o logos.
- Naranja en la interfaz. El verde de Carburos fuera de su bloque.
- Antetítulos en mayúsculas encima de cada sección. Puntos medios como decoración.
