// Movimiento común a toda la web: scroll con inercia (Lenis) y apariciones suaves al hacer scroll.
// Con «reducir movimiento» activado no se hace nada: todo se ve estático y completo.
import Lenis from 'lenis';

const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducido) {
	const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9, autoRaf: true, anchors: { offset: -72 } });
	(window as Window & { __lenis?: Lenis }).__lenis = lenis;

	// Apariciones: los elementos con la clase .aparece suben y se funden al entrar en pantalla.
	document.documentElement.classList.add('con-movimiento');
	const observador = new IntersectionObserver(
		(entradas) => {
			for (const entrada of entradas) {
				if (!entrada.isIntersecting) continue;
				entrada.target.classList.add('visible');
				observador.unobserve(entrada.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px' },
	);
	document.querySelectorAll<HTMLElement>('.aparece').forEach((el) => {
		// En rejillas, un pequeño escalonado entre elementos hermanos
		const indice = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
		if (el.tagName === 'LI') el.style.transitionDelay = `${(indice % 3) * 70}ms`;
		observador.observe(el);
	});
}
