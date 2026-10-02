# Referencias visuales (análisis del 2 de octubre de 2026)

Webs inspeccionadas en el navegador: capturas, tipografías, colores y librerías sacadas del código.

## ✅ Cominvi — https://www.cominvi.com.mx/ («me gusta su fluidez y cómo está animada»)
- **Técnica:** Webflow + **Lenis** (scroll suave con inercia) + **GSAP ScrollTrigger** (animaciones ligadas al scroll) + **Barba** (transiciones entre páginas sin recarga) + vídeo de fondo.
- **Por qué se siente fluida:**
  - El scroll tiene inercia: no va «a saltos».
  - Las curvas de animación son suaves y cortas (`power1/power2`, de 0,3 a 1,2 s). Nada rebota ni exagera.
  - Las páginas cambian sin pantallazo en blanco.
  - Texto que se «rellena» de gris a negro según haces scroll.
- **Composición:** hero a pantalla completa con imagen o vídeo real y titular corto. Mucho aire. Números grandes en tarjetas sobrias. Alterna secciones claras y oscuras.
- **Detalle propio:** etiquetas técnicas en tipografía monoespaciada (`1.01 ABOUT`) que numeran las secciones como un documento técnico.
- **Tipografía:** Helvetica Now Display (titulares) + PP Supply Mono (etiquetas).
- **Nos llevamos:** scroll con inercia, animaciones ligadas al scroll, transiciones entre páginas (en Astro: View Transitions) y el lenguaje de etiquetas técnicas.
- **No nos llevamos:** la pantalla de carga con el logo (retrasa ver la web) ni el fondo casi negro (nuestra web es clara).

## ✅ MachineMetrics — https://www.machinemetrics.com/operations-leaders («su diseño y su forma de verse, en otros colores»)
- **Técnica:** HubSpot, sin librerías de animación especiales.
- **Por qué se ve profesional:**
  - **Titulares industriales:** tipografía estrecha, gruesa y en mayúsculas (Barlow ExtraBold) que suena a fábrica, no a startup.
  - **Fotos reales de taller** en el hero, con una capa oscura para que el texto se lea.
  - **Esquinas rectas** en botones y bloques: transmite solidez.
  - **Un solo color de acento** (verde) usado con disciplina.
  - Narrativa **problema → solución** y filas alternas de texto e imagen, fáciles de leer.
- **Nos llevamos:** el carácter tipográfico industrial, las fotos reales protagonistas, las esquinas rectas, un acento único y la claridad.
- **No nos llevamos:** el verde, el banner de cookies y las capturas de software.

## ❌ Suministros Intec — https://suministrointec.com/ferreteria-industrial-lleida/ («parece hecha con IA»)
Es **competencia directa en Lleida**. Por qué se ve genérica (medido en su código):
- **Ni una sola foto real.** La única imagen es el logo.
- **19 emojis** usados como iconos (🔧 ⚡ 🛡️…).
- **Hero con degradado azul-violeta** y botón naranja: es el sello del diseño hecho por IA.
- Tipografía del sistema (`-apple-system`), sin ninguna elección.
- **Fila de 4 «cifras» con icono** (+20 años, amplio stock, 24/48 h, primeras marcas) y **cuadrícula de tarjetas idénticas** con icono, título y «Ver productos →».
- Píldora-etiqueta encima del titular, y el mismo radio de esquina en todo (12 px).
- Lista de pueblos para SEO.

⚠️ **Alerta para nosotros:**
1. Su hero usa **azul índigo**, muy parecido a nuestro `#282B98`. **Nada de degradados índigo** ni bloques de color plano detrás del titular: nuestro hero será la **foto real**.
2. Nuestro borrador de textos tiene una **fila de 4 cifras** y **3 pilares**, que es la misma estructura. Hay que presentarlo de otra forma: integrado con las fotos, con tipografía protagonista y sin iconos en caja.

## Calibración (diales de la skill taste)
| Dial | Valor | Por qué |
|---|---|---|
| Variedad del diseño | **6/10** | Con carácter, pero es una empresa B2B seria. Nada experimental que despiste al cliente. |
| Movimiento | **7/10** | Lo que más te gusta de Cominvi: fluidez real, siempre al servicio del contenido y rápida en móvil. |
| Densidad | **4/10** | Aire y foco: pocas cosas por pantalla, grandes y claras. |

## Síntesis para Rodaments Segrià
**Base clara y luminosa** (grises fríos hasta el blanco) · **fotos reales del almacén como protagonistas** · **titulares industriales con carácter** · **azules del logo como acento disciplinado** · **etiquetas técnicas que recuerdan los carteles del almacén** («SERIE 6200», «PASILLO D») · **scroll fluido con inercia y animaciones sobrias ligadas al scroll** · **esquinas rectas** · **cero emojis, cero degradados, cero tarjetas clónicas**.
