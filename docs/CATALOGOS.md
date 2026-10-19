# Catálogos de la web antigua

Inventario de los catálogos de `www.rodsegria.es/productos.php` (web antigua, revisada el 19-10-2026).
El equipo comercial los usa para enseñarlos en las visitas. **Hay que decidir cuáles pasan a la web nueva.**

## En la web nueva (montado el 19-10-2026, pendiente de la revisión comercial)
- **En cada categoría** (página de su familia): bloque «Catálogos y fichas técnicas».
- **Página `/catalogos`**: todos juntos por familia, con buscador por marca o producto. Enlazada en el pie y en el menú del móvil.
- Datos en `src/content/catalogos.yaml`; PDF en `public/catalogos/<categoria>/`. Páginas y peso se calculan al compilar.
- Publicados ya **52 PDF + 6 catálogos online** (NTN-SNR, Schaeffler, Timken, Challenge, Aslak). Fuera por ahora: Abratools (precios), lista de precios Schaeffler, los 2 rotos, la imagen de tensores y adhesivos (sin categoría).
- **Comprimidos** con Ghostscript: de 60 MB a 34 MB (TRAF de 23 a 10 MB, Albert de 6,9 a 1,9 MB).
- **Quitar uno:** `publicar: false` en su entrada (o borrar la entrada y el PDF). **Añadir uno:** ver la cabecera de `catalogos.yaml`.
- Comprimir un PDF nuevo pesado (más de 2 MB):
  ```bash
  gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dNOPAUSE -dBATCH -dSAFER -sOutputFile=salida.pdf entrada.pdf
  ```
  Si no baja (escaneos a 200 ppp), forzar: `-dDownsampleColorImages=true -dColorImageDownsampleThreshold=1.0 -dColorImageResolution=150 -dPassThroughJPEGImages=false -dJPEGQ=72`. Comprobar que se lee bien.

## Cómo funcionaban
- Un menú desplegable en «Productos» con 20 secciones (Rodamientos, Soportes, Correas…) y, dentro, enlaces directos a PDF.
- 58 enlaces a archivos en `catalogos PDF-WEB/` + 9 enlaces a webs de marcas.
- **Todos los archivos son de diciembre de 2014 o anteriores** (muchos de 2004–2012). Ninguno se ha actualizado desde entonces.

## Estado
- **56 archivos funcionan** (78 MB en total). **2 están rotos** (404): «Catálogo FAG» y «Juntas tóricas».
- **1 duplicado:** `TAPERS.pdf` (Piñones) y `TAPER.pdf` (Poleas) son el mismo archivo de 60 páginas.
- **1 con precios:** «ABRATOOLS — catálogo promoción 2011» (88 págs., PVP de 2011). **No se puede publicar** (regla de la web: sin precios) y está caducado.
- **1 enlace a una lista de precios de Schaeffler:** no se publica (misma regla).
- **Pesados para abrir en el móvil:** TRAF nudos agrícolas (23,1 MB), Acoplamientos Albert (6,7 MB), Motores Dutchi (3,9 MB), Cadenas europea (3,8 MB), Correas Challenge (3,5 MB). Se pueden comprimir antes de subirlos.
- Muchos son **escaneos** (imagen sin texto): se ven bien, pero no se puede buscar dentro.

## Inventario y destino en la web nueva
Columna **¿Sigue?**: a rellenar por el equipo comercial (✅ se publica · 🔄 hay versión nueva, conseguirla · ❌ fuera).

| Sección antigua | Catálogo | Págs. | Peso | Categoría nueva | ¿Sigue? |
|---|---|---:|---:|---|---|
| Rodamientos | FAG — Tipos de rodamientos (aparece 3 veces) | 1 | 86 KB | Rodamientos | |
| Rodamientos | INA — Rodamientos de agujas por medidas | 10 | 71 KB | Rodamientos | |
| Rodamientos | ~~FAG — Catálogo~~ (roto) | – | – | Rodamientos | ❌ |
| Soportes | Challenge — Soportes triple sello | 9 | 1,4 MB | Soportes | |
| Soportes | Pillow blocks (serie UCP…) | 5 | 525 KB | Soportes | |
| Soportes | Soportes partidos serie SNU500/600 | 2 | 180 KB | Soportes | |
| Soportes | Manguitos | 1 | 270 KB | Soportes | |
| Correas | Challenge — Correas | 20 | 3,5 MB | Correas | |
| Correas | Bando — Correas | 1 | 94 KB | Correas | |
| Cadenas | Tipos de cadena | 2 | 234 KB | Cadenas | |
| Cadenas | Tabla de medidas: Europea | 9 | 3,8 MB | Cadenas | |
| Cadenas | Tabla de medidas: Acero inox. | 3 | 1,0 MB | Cadenas | |
| Cadenas | Tabla de medidas: Americana | 1 | 381 KB | Cadenas | |
| Cadenas | Tabla de medidas: Charnela | 2 | 1,1 MB | Cadenas | |
| Cadenas | Tabla de medidas: Ligeras | 1 | 379 KB | Cadenas | |
| Tensores | Imagen tensores de cadena (JPG) | 1 | 27 KB | Tensores | |
| Piñones | Challenge — Piñón taper | 6 | 270 KB | Piñones | |
| Piñones / Poleas | Challenge — Casquillos taper (duplicado) | 60 | 1,2 MB | Piñones y Poleas | |
| Piñones | Challenge — Piñón ciego (pilot bore) | 30 | 742 KB | Piñones | |
| Piñones | Engranajes cilíndricos y cónicos (imagen) | 1 | 63 KB | Engranajes | |
| Piñones | Engranajes cilíndricos y cónicos (medidas) | 3 | 310 KB | Engranajes | |
| Poleas | Challenge — Poleas taper (SPZ…) | 13 | 248 KB | Poleas | |
| Poleas | Poleas ciegas | 5 | 475 KB | Poleas | |
| Estanqueidad | Retenes | 2 | 107 KB | Retenes y estanqueidad | |
| Estanqueidad | ~~Juntas tóricas~~ (roto) | – | – | Retenes y estanqueidad | ❌ |
| Estanqueidad | Collarines | 1 | 64 KB | Retenes y estanqueidad | |
| Estanqueidad | Sellos mecánicos | 8 | 238 KB | Retenes y estanqueidad | |
| Rótulas | Rótulas | 4 | 168 KB | Rótulas | |
| Mangueras | Armorvin | 1 | 174 KB | Mangueras | |
| Mangueras | Armorvin PU Oil | 1 | 182 KB | Mangueras | |
| Mangueras | Cristallo Atox | 1 | 136 KB | Mangueras | |
| Mangueras | Dakota | 1 | 233 KB | Mangueras | |
| Mangueras | Jamaica | 2 | 515 KB | Mangueras | |
| Mangueras | Luisiana | 1 | 150 KB | Mangueras | |
| Mangueras | Oregon ITA | 1 | 266 KB | Mangueras | |
| Mangueras | Oregon poliuretano | 1 | 256 KB | Mangueras | |
| Mangueras | Spiralina | 2 | 823 KB | Mangueras | |
| Mangueras | Superflex PU standard | 1 | 254 KB | Mangueras | |
| Mangueras | Termorresistente | 1 | 343 KB | Mangueras | |
| Mangueras | Vacupress | 1 | 128 KB | Mangueras | |
| Mangueras | Vacupress Food | 1 | 173 KB | Mangueras | |
| Motores | Dutchi Motors — Serie DMA2 | 20 | 3,9 MB | Motores eléctricos | |
| Motores | Reductores (worm gear) | 3 | 348 KB | Reductores | |
| Motores | Vibradores | 1 | 68 KB | Motores eléctricos | |
| Nudos agrícolas | La Magdalena — Transmisiones cardan | 24 | 1,5 MB | Nudos agrícolas | |
| Nudos agrícolas | TRAF — Catálogo | 54 | 23,1 MB | Nudos agrícolas | |
| Grasas y lubricantes | Elesa (lubricantes) | 1 | 113 KB | Grasas y lubricantes | |
| Herramientas | Forza — Extractores de rodamientos y poleas | 1 | 29 KB | Extractores | |
| Herramientas | ~~ABRATOOLS — Promoción 2011~~ (con precios) | 88 | 14,3 MB | Herramientas de taller | ❌ |
| Vestuario laboral | Ropa laboral | 1 | 157 KB | Vestuario laboral | |
| Vestuario laboral | Calzado de seguridad | 1 | 84 KB | Vestuario laboral | |
| Acoplamientos | Challenge — Acoplamientos | 20 | 2,2 MB | Acoplamientos | |
| Acoplamientos | Samiflex — Acoplamiento elástico | 16 | 1,7 MB | Acoplamientos | |
| Acoplamientos | Albert — Acoplamientos | 11 | 6,7 MB | Acoplamientos | |
| Adhesivos industriales | Adhesivos y sellantes | 1 | 117 KB | *sin categoría* (¿Retenes y estanqueidad?) | |
| Artículos almacenaje | Cajas de almacenaje | 1 | 71 KB | Artículos de almacenaje | |
| Artículos almacenaje | Escaleras telescópicas | 1 | 107 KB | Artículos de almacenaje | |

### Enlaces a webs de marcas (no son PDF)
| Sección | Enlace | Propuesta |
|---|---|---|
| Rodamientos | NTN-SNR, Timken, Schaeffler (FAG/INA) | Enlazar a su catálogo online actual (siempre al día) |
| Rodamientos | Schaeffler — Lista de precios | ❌ No se publica (precios) |
| Grasas | Total lubricantes | Enlace a su web actual |
| Herramientas | Aslak, JBM | Enlace a su catálogo online actual |
| Neumática | Camozzi | *Sin categoría en la web nueva*: ¿añadir «Neumática»? |
