// Genera /enviar.php: recibe los formularios (presupuesto y referencia) y los envía por email con PHP,
// que viene incluido en el hosting de Dinahosting. El email de destino sale de src/data/empresa.ts.
// Responde en JSON: { ok: true } o { ok: false, error } con código 400/405/500.
import type { APIRoute } from 'astro';
import { formularios } from '../data/formularios';

const destino = formularios.destino;

const php = `<?php
// Archivo generado por src/pages/enviar.php.ts: no editar en el servidor.
header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function responder(int $codigo, array $datos): void {
	http_response_code($codigo);
	echo json_encode($datos, JSON_UNESCAPED_UNICODE);
	exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
	header('Allow: POST');
	responder(405, ['ok' => false, 'error' => 'Método no permitido']);
}

// Solo se aceptan envíos desde la propia web
$origen = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origen !== '' && parse_url($origen, PHP_URL_HOST) !== ($_SERVER['HTTP_HOST'] ?? '')) {
	responder(400, ['ok' => false, 'error' => 'Origen no válido']);
}

// Campo trampa antispam: si viene relleno, se finge que todo ha ido bien
if (trim($_POST['web'] ?? '') !== '') {
	responder(200, ['ok' => true]);
}

function campo(string $nombre, int $max): string {
	$valor = trim((string) ($_POST[$nombre] ?? ''));
	return mb_substr($valor, 0, $max);
}

$asuntos = ['Solicitud de presupuesto', 'Consulta de referencia'];
$asunto = in_array($_POST['asunto'] ?? '', $asuntos, true) ? $_POST['asunto'] : 'Consulta desde la web';

$nombre = campo('nombre', 120);
$email = campo('email', 160);
$etiquetas = [
	'referencias' => 'Referencias',
	'marca' => 'Marca',
	'uso' => 'Máquina o uso',
	'nombre' => 'Nombre',
	'empresa' => 'Empresa',
	'email' => 'Email',
	'telefono' => 'Teléfono',
	'contacto_preferido' => 'Prefiere que le contactemos por',
	'mensaje' => 'Mensaje',
];

if ($nombre === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
	responder(400, ['ok' => false, 'error' => 'Faltan el nombre o un email válido']);
}

$lineas = [];
foreach ($etiquetas as $clave => $etiqueta) {
	$valor = campo($clave, $clave === 'mensaje' || $clave === 'referencias' ? 5000 : 300);
	if ($valor !== '') {
		$lineas[] = $etiqueta . ': ' . $valor;
	}
}
$cuerpo = implode("\\n\\n", $lineas) . "\\n\\n--\\nEnviado desde el formulario de la web (" . ($_SERVER['HTTP_HOST'] ?? '') . ').';

// Sin saltos de línea en las cabeceras (evita inyectar destinatarios)
$limpio = fn(string $texto): string => str_replace(["\\r", "\\n"], ' ', $texto);
$remitente = '${destino}';
$cabeceras = [
	'From: Web Rodaments Segria <' . $remitente . '>',
	'Reply-To: ' . $limpio($email),
	'MIME-Version: 1.0',
	'Content-Type: text/plain; charset=UTF-8',
	'Content-Transfer-Encoding: 8bit',
];
$titulo = '=?UTF-8?B?' . base64_encode($asunto . ' - ' . $limpio($nombre)) . '?=';

$enviado = mail('${destino}', $titulo, $cuerpo, implode("\\r\\n", $cabeceras), '-f' . $remitente);
if (!$enviado) {
	responder(500, ['ok' => false, 'error' => 'No se pudo enviar']);
}
responder(200, ['ok' => true]);
`;

export const GET: APIRoute = () => new Response(php, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
