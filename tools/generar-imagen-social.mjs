// Genera public/og-rodaments-segria.jpg (1200 × 630): la vista previa al compartir la web en WhatsApp y redes.
// Mismo lenguaje que la portada: panel con el azul del logo, logo en blanco y la fachada a la derecha.
// Uso: npm run imagen-social
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const ANCHO = 1200;
const ALTO = 630;
const AZUL = '#015BFE';

const fachada = await sharp('src/assets/img/fotos/fachada-rodaments-segria-lleida.jpg')
	.resize({ height: ALTO, width: 740, fit: 'cover', position: 'centre' })
	.toBuffer();

const logoBlanco = Buffer.from(
	readFileSync('src/assets/brand/logo-mono.svg', 'utf8').replace(/currentColor/g, '#FFFFFF'),
);
const logo = await sharp(logoBlanco, { density: 400 }).resize({ width: 420 }).png().toBuffer();

const fundido = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${ANCHO}" height="${ALTO}">
	<defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
		<stop offset="0" stop-color="${AZUL}"/><stop offset="0.42" stop-color="${AZUL}"/>
		<stop offset="0.49" stop-color="${AZUL}" stop-opacity="0.75"/><stop offset="0.56" stop-color="${AZUL}" stop-opacity="0.3"/>
		<stop offset="0.63" stop-color="${AZUL}" stop-opacity="0"/>
	</linearGradient></defs>
	<rect width="100%" height="100%" fill="url(#g)"/>
</svg>`);

await sharp({ create: { width: ANCHO, height: ALTO, channels: 3, background: AZUL } })
	.composite([
		{ input: fachada, left: ANCHO - 740, top: 0 },
		{ input: fundido, left: 0, top: 0 },
		{ input: logo, left: 64, top: Math.round(ALTO / 2 - 62) },
	])
	.jpeg({ quality: 86, mozjpeg: true })
	.toFile('public/og-rodaments-segria.jpg');

console.log('public/og-rodaments-segria.jpg generada');
