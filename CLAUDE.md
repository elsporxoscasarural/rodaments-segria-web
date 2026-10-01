# Rodaments Segrià — Web

## Negocio
Rodaments Segrià es una empresa familiar de suministros industriales en Lleida fundada en 1988. Vende rodamientos, soportes, correas, piñones, cadenas, retenes, soportes, reductores, motores eléctricos, extractores y material de taller.

**La web no muestra precios**, porque varían según el cliente. Es un **catálogo con solicitud de presupuesto y contacto**. No añadas precios, carrito ni checkout.

## Decisiones tomadas
- **Stack:** Astro, con salida estática (HTML, CSS y JS). No depende de ningún proveedor de hosting.
- **Dominio:** `rodsegria.es` (definitivo; se mantiene por el email, la antigüedad y el material impreso). La web principal es `https://www.rodsegria.es`. `rodamentssegria.es` y `.com` se comprarán para redirigir a él.
- **Hosting:** pendiente. No asumas ningún proveedor ni añadas adaptadores o archivos de configuración de un host concreto.
- **Repo propio:** `elsporxoscasarural/rodaments-segria-web`. No se anidan repos dentro de este.
- **Web anterior:** guardada en la etiqueta git `v1-legacy`. Era un HTML único con fondo oscuro y acentos azules.
- **Idioma:** castellano en la raíz (`/`). El catalán llegará más adelante en `/ca/` (ver `i18n` en `astro.config.mjs`). Escribe las URLs y los textos pensando en que se traducirán.
- **`robots.txt` y `sitemap.xml`:** se crean en la fase de SEO. Hasta el lanzamiento, las páginas llevan `noindex`.
- **Formulario de presupuesto:** la interfaz se diseña con el resto de la web. El envío (servicio o funciones del hosting) se decide junto al hosting.

## Identidad visual
- **Paleta:** los azules del logo como protagonistas, sobre fondos y complementos en una escala de grises claros que tira a blanco. Es una web **clara**, no oscura como la anterior.
  - Azul intenso (el texto "RODAMENTS"): `#015BFE`
  - Azul índigo (el texto "SEGRIÀ" y el símbolo RS): `#282B98`
  - Neutros: escala de grises muy claros y fríos hasta el blanco. Se define en la fase de diseño en `src/styles/`.
- **Logo** en `src/assets/brand/`:
  - `logo.svg`: logotipo a color, sin el rodamiento. Es el que se usa en la web.
  - `logo-mono.svg`: monocromo con `currentColor`, para fondos de color o para el pie.
  - `simbolo.svg`: solo el símbolo RS (favicon, avatar, detalles).
  - `logo-con-rodamiento.webp`: versión completa en imagen, de 2000 px.
  - Los SVG salen de un calco automático del logo. Si aparece el vectorial original del diseñador, se sustituyen.

## Datos del negocio
> **Fuente única:** `src/data/empresa.ts`. La web lee de ahí estos datos. Si cambia alguno, se cambia allí (y aquí).

- Fundada en **1988** en Lleida. Empresa familiar, hoy dirigida por la **tercera generación**, unas 7 personas, con **más de 500.000 referencias en stock** y miles de equivalencias entre marcas. Da servicio a talleres, industria y agricultura.
- Vende a **profesionales y particulares**. Envíos a toda España por agencias de transporte profesionales.
- Almacén de **más de 2.000 m²** con aparcamiento para coches, furgonetas y camiones.
- Atiende consultas por **WhatsApp** (móvil en proceso de alta; número pendiente).
- Pol. Ind. Camí dels Frares, Carrer d'Alcarràs, 78 · 25191 Lleida (coordenadas 41.5912, 0.5897)
- Teléfono: 973 20 80 64 (+34973208064) · Email: rodsegria@rodsegria.es
- Horario: de lunes a viernes, 8:00–13:30 y 15:00–18:00
- Marcas, proveedores y textos de empresa: se definen más adelante. No te los inventes.

## Forma de trabajar en el diseño
Se avanza **por pasos pequeños, con revisión en cada uno**, para cuidar el resultado. Usa las mejores skills disponibles: `design-taste-frontend`, `impeccable`, `emil-design-eng`, `frontend-design`, `gsap-*` y `web-design-guidelines`. Usa también los conectores (Unsplash) cuando aporten. Primero propón la dirección visual y espera aprobación antes de construir.

## Comandos
```bash
npm install        # instalar dependencias (Node >= 22.12, ver .nvmrc)
npm run dev        # servidor de desarrollo → http://localhost:4321
npm run build      # genera la web estática en dist/
npm run preview    # sirve dist/ para revisar el resultado final
npm run revision   # regenera docs/REVISION-CATALOGO.md desde src/content/
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

## Catálogo (colecciones de contenido)
El catálogo son **datos, no páginas**. El esquema está en `src/content.config.ts` y las páginas se generan solas.
- `src/content/familias/*.md`: una familia por archivo. El nombre del archivo es la URL (`/productos/<archivo>`).
- `src/content/categorias/*.md`: una categoría por archivo, con `familia`, `orden`, `resumen`, `tipos`, `sectores` y `marcas`.
- `src/content/marcas/*.md`: solo se muestran en la web las que tienen `publicar: true` (permiso confirmado).
- **Mover una categoría** = cambiar su `familia`. **Nueva familia** = nuevo archivo. **Ocultar** = borrar el archivo.
- `sectores` (`industria`, `agricola`, `taller`): una familia con `sectorRelacionado` muestra también las categorías de otras familias de ese sector, sin duplicarlas.
- `borrador: true` = texto provisional pendiente de revisión por el cliente.
- `sinonimos`: otros nombres con los que buscan los clientes (rodamientos → cojinetes). Se usan en SEO y en el buscador.
- **Carburos Metálicos:** en el ámbito del gas la empresa actúa **bajo la marca Carburos Metálicos** (distribuidor oficial), no como Rodaments Segrià. Esa familia tiene identidad propia y su contenido sigue la oferta de Carburos (gases, soldadura y corte, alquiler de botellas). No se mencionan contratos ni condiciones comerciales con Carburos.
- **Después del lanzamiento**, cambiar o borrar una URL de familia exige una redirección 301. Antes del lanzamiento se puede cambiar libremente.

## Convenciones
- **Idioma:** textos, commits y documentación en castellano. **La web trata al cliente de tú.** Los años de trayectoria se calculan (`anosTrayectoria()`), nunca se escriben a mano. Código (variables, componentes, clases) en inglés.
- **Nombres:** componentes en `PascalCase.astro`; rutas, imágenes y slugs en `kebab-case` sin acentos (`/productos/rodamientos`).
- **Estilos:** CSS propio con variables en `src/styles/`. Usa los tokens y no pongas colores sueltos en los componentes. Sin frameworks de CSS salvo que se decida lo contrario.
- **Imágenes:** los originales están en `~/Desktop/Botiga/Rodaments segria/`, fuera del repo. Al repo solo entran versiones optimizadas en `src/assets/img/`, y se usan con `<Image />` de `astro:assets`. Nunca subas vídeos ni originales pesados.
- **Animaciones:** GSAP y ScrollTrigger en `src/scripts/`. Respeta siempre `prefers-reduced-motion`. Anima solo `transform` y `opacity`.
- **JS:** el mínimo posible. Astro no envía JS al navegador por defecto, así que mantenlo así salvo para las animaciones y el formulario.
- **Accesibilidad y SEO:** HTML semántico, `alt` en todas las imágenes, un solo `<h1>` por página, y título y descripción propios en cada página.
- **Git:** commits pequeños y descriptivos en castellano. Nada de `push --force` a `main`. Nunca guardes tokens ni credenciales en archivos (el push se hace con `gh auth`).
- **Fotos:** se priorizan las fotos reales de la tienda y el almacén. Unsplash solo como apoyo.
