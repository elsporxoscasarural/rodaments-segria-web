# Buscador de referencias — nota de diseño (idea en estudio)

> Proyecto paralelo a la web. Cuando arranque tendrá **su propio repo**. La web se conectará a él más adelante.

## Objetivo
Que un cliente escriba una referencia en la web y sepa si **podemos suministrarla**, es decir, si está en el catálogo de alguna marca con la que trabajamos. **No es stock**, es disponibilidad de catálogo.

## Decisiones de diseño
- **Base de datos de referencias con buscador, no una IA leyendo PDFs.** Para códigos exactos, la IA confunde referencias (6205 / 6206) y puede inventarse respuestas. La IA se usa *antes*, para extraer los datos de los PDFs una sola vez y revisándolos, y opcionalmente *encima*, como asistente que consulta la base de datos sin responder nunca de memoria.
- **Los PDFs no se suben a la web.** Se extraen sus datos (referencia, marca, descripción, medidas, catálogo y página) a la base de datos.
- **Búsqueda tolerante:** "6205 2RS", "6205-2RS" y "62052RS" son la misma referencia (códigos normalizados).
- **Nunca se responde un "no" tajante.** Si la encontramos: *"Podemos suministrarla"* con botón de **Pedir presupuesto** y la referencia ya rellenada. Si no: *"No la encontramos en nuestros catálogos, consúltanos igualmente"* con el formulario. Ninguna búsqueda debe acabar perdiendo un cliente.
- **Sin precios ni stock** en la parte pública.

## Fuentes de datos (de mejor a peor)
1. Tarifas o catálogos en **Excel/CSV** que mandan las marcas a los distribuidores.
2. Catálogos online o datos descargables de las marcas grandes.
3. **PDF**: extracción con IA por lotes, con revisión. Es viable, pero cada marca maqueta distinto.

## Riesgos y límites
- Estar en el catálogo de la marca no garantiza que se pueda conseguir: hay referencias descatalogadas o que no se distribuyen en España. Hace falta guardar la versión y la fecha de cada catálogo y actualizarlo.
- No publicar los catálogos de las marcas tal cual (derechos y condiciones de distribución). Solo se confirma la referencia y una descripción breve.
- Necesita un servidor y una base de datos, así que condiciona la elección del hosting (fase 5 de la web).

## Plan por capas
1. **Piloto**: 1 o 2 marcas principales (una en Excel y otra en PDF si es posible). Extracción, buscador y medición de la precisión. Con eso se decide si seguir.
2. Ampliar a las marcas principales, que seguramente cubren la mayoría de búsquedas.
3. **Equivalencias entre marcas** (SKF ↔ FAG ↔ NSK…): si el cliente busca una marca que no trabajamos, le ofrecemos la equivalente.
4. Buscador público en la web, conectado a "Pedir presupuesto".
5. (Opcional) Búsqueda por medidas y asistente conversacional que consulta la base de datos.
6. (Futuro) Conexión con **TG Profesional** para el stock real. No hace falta para las capas 1-5.

## Pendiente
- 🔲 Revisar qué marcas mandan tarifas en Excel/CSV y cuáles solo en PDF
- 🔲 Lista de marcas principales, ordenadas por volumen de consultas
- 🔲 Un catálogo de ejemplo (Excel y/o PDF) para el piloto
- 🔲 (Futuro) Ver cómo exporta datos TG Profesional: exportación a Excel, API o base de datos
