"""Genera docs/REVISION-CATALOGO.md a partir de src/content/ (uso: npm run revision)."""
import glob
import re

PREGUNTAS = [
    "**Artículos de almacenaje:** ¿qué tipos vendéis? (estanterías, cajas, gaveteros, armarios…)",
    "**Carburos Metálicos:** ¿cuál es vuestra denominación oficial? Carburos llama a su red «agentes». ¿Sois «Agente oficial de Carburos Metálicos»? ¿Tenéis su material de marca (logo y normas de uso)?",
    "**Gases:** confirmar la lista de gases y si el alquiler incluye recarga y cambio de botellas.",
]


def leer(path):
    bloque = open(path, encoding="utf-8").read().split("---")[1]
    datos, clave = {}, None
    for linea in bloque.strip().split("\n"):
        m = re.match(r"^(\w+): ?(.*)$", linea)
        if m:
            clave, valor = m.groups()
            valor = valor.strip()
            datos[clave] = [] if valor in ("", "[]") else valor.strip('"')
        elif linea.strip().startswith("- "):
            datos[clave].append(linea.strip()[2:].strip('"'))
    return datos


def slug(path):
    return path.split("/")[-1][:-3]


familias = sorted(((leer(p), slug(p)) for p in glob.glob("src/content/familias/*.md")), key=lambda x: int(x[0]["orden"]))
categorias = [(leer(p), slug(p)) for p in glob.glob("src/content/categorias/*.md")]
SECTORES = {"industria": "Industria", "agricola": "Agrícola", "taller": "Taller"}

out = [
    "# Revisión del catálogo",
    "",
    "Textos provisionales de cada familia y categoría. Revísalos y dime qué cambiar.",
    "",
    "- **Resumen:** frase corta que se verá en la tarjeta de la categoría.",
    "- **Tipos:** subtipos que vendéis. ❓ = necesito que me digas cuáles.",
    "- **Sectores:** *Agrícola* hace que salga en el bloque «Componentes para maquinaria agrícola».",
    "- **También se busca como:** otros nombres que usan los clientes (SEO y buscador).",
    "",
    "> Archivo generado desde `src/content/` con `npm run revision`. No lo edites a mano.",
    "",
]
for fam, fslug in familias:
    out += [f"## {fam['orden']}. {fam['nombre']}", f"*{fam['resumen']}*  ", f"URL: `/productos/{fslug}`", ""]
    out += ["| Categoría | Resumen | Tipos | Sectores | También se busca como |", "|---|---|---|---|---|"]
    propias = sorted((c for c in categorias if c[0]["familia"] == fslug), key=lambda x: int(x[0]["orden"]))
    for cat, _ in propias:
        tipos = " · ".join(cat.get("tipos") or []) or "❓"
        sectores = ", ".join(SECTORES[s] for s in cat.get("sectores") or [])
        sinonimos = ", ".join(cat.get("sinonimos") or [])
        out.append(f"| **{cat['nombre']}** | {cat['resumen']} | {tipos} | {sectores} | {sinonimos} |")
    out.append("")
if PREGUNTAS:
    out += ["## Preguntas pendientes"] + [f"{i}. {p}" for i, p in enumerate(PREGUNTAS, 1)] + [""]

open("docs/REVISION-CATALOGO.md", "w", encoding="utf-8").write("\n".join(out))
print("docs/REVISION-CATALOGO.md actualizado")
