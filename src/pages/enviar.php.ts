// Genera /enviar.php: recibe los formularios (presupuesto y referencia) y los envía por email con PHP,
// que viene incluido en el hosting de Dinahosting. El email de destino sale de src/data/empresa.ts.
// Responde en JSON: { ok: true } o { ok: false, error } con código 400/405/500.
import type { APIRoute } from 'astro';
import { formularios } from '../data/formularios';

const destino = formularios.destino;

const php = `<?php
// Archivo generado por src/pages/enviar.php.ts: no editar en el servidor.
// Compatible con PHP 5.3 en adelante (sin tipos, sin «??» ni funciones flecha).
header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function responder($codigo, $datos) {
	if (function_exists('http_response_code')) {
		http_response_code($codigo);
	} else {
		header('X-Estado: ' . $codigo, true, $codigo);
	}
	echo json_encode($datos);
	exit;
}

function valor($clave, $origen) {
	return isset($origen[$clave]) ? (string) $origen[$clave] : '';
}

function campo($nombre, $max) {
	$texto = trim(valor($nombre, $_POST));
	return function_exists('mb_substr') ? mb_substr($texto, 0, $max, 'UTF-8') : substr($texto, 0, $max);
}

function limpio($texto) {
	return str_replace(array("\\r", "\\n"), ' ', $texto);
}

if (valor('REQUEST_METHOD', $_SERVER) !== 'POST') {
	header('Allow: POST');
	responder(405, array('ok' => false, 'error' => 'Método no permitido'));
}

// Solo se aceptan envíos desde la propia web
$origen = valor('HTTP_ORIGIN', $_SERVER);
if ($origen !== '' && parse_url($origen, PHP_URL_HOST) !== valor('HTTP_HOST', $_SERVER)) {
	responder(400, array('ok' => false, 'error' => 'Origen no válido'));
}

// Campo trampa antispam: si viene relleno, se finge que todo ha ido bien
if (trim(valor('web', $_POST)) !== '') {
	responder(200, array('ok' => true));
}

$asuntos = array('Solicitud de presupuesto', 'Consulta de referencia');
$asunto = in_array(valor('asunto', $_POST), $asuntos, true) ? valor('asunto', $_POST) : 'Consulta desde la web';

$nombre = campo('nombre', 120);
$email = campo('email', 160);
if ($nombre === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
	responder(400, array('ok' => false, 'error' => 'Faltan el nombre o un email válido'));
}

$etiquetas = array(
	'referencias' => 'Referencias',
	'marca' => 'Marca',
	'uso' => 'Máquina o uso',
	'nombre' => 'Nombre',
	'empresa' => 'Empresa',
	'email' => 'Email',
	'telefono' => 'Teléfono',
	'contacto_preferido' => 'Prefiere que le contactemos por',
	'mensaje' => 'Mensaje',
);
$lineas = array();
foreach ($etiquetas as $clave => $etiqueta) {
	$texto = campo($clave, ($clave === 'mensaje' || $clave === 'referencias') ? 5000 : 300);
	if ($texto !== '') {
		$lineas[] = $etiqueta . ': ' . $texto;
	}
}
$cuerpo = implode("\\n\\n", $lineas) . "\\n\\n--\\nEnviado desde el formulario de la web (" . valor('HTTP_HOST', $_SERVER) . ').';

// Sin saltos de línea en las cabeceras (evita inyectar destinatarios)
$remitente = '${destino}';
$cabeceras = array(
	'From: Web Rodaments Segria <' . $remitente . '>',
	'Reply-To: ' . limpio($email),
	'MIME-Version: 1.0',
	'Content-Type: text/plain; charset=UTF-8',
	'Content-Transfer-Encoding: 8bit',
);
$titulo = '=?UTF-8?B?' . base64_encode($asunto . ' - ' . limpio($nombre)) . '?=';

$enviado = mail('${destino}', $titulo, $cuerpo, implode("\\r\\n", $cabeceras), '-f' . $remitente);
if (!$enviado) {
	responder(500, array('ok' => false, 'error' => 'No se pudo enviar'));
}
responder(200, array('ok' => true));
`;

export const GET: APIRoute = () => new Response(php, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
