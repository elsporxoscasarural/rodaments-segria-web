// Miniatura de una foto (32 px, < 1 KB) para ponerla de fondo mientras carga la foto grande.
// Evita que una cabecera se vea vacía y luego la foto aparezca de golpe, también en la transición entre páginas.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export async function miniatura(src: ImageMetadata): Promise<string> {
	const imagen = await getImage({ src, width: 32, format: 'webp', quality: 50 });
	return `background: url(${imagen.src}) center / cover`;
}
