<?php
//echo "Los datos han pasado por PHP";

error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
$nombre = $_POST["nombre_txt"];
$email = $_POST["email_txt"];
$asunto = $_POST["asunto_txt"];
$comentarios = $_POST["comentarios_txa"];

/*echo "Los datos que enviaste son:<br />";
echo "Nombre: ".$nombre."<br />";
echo "Email: ".$email."<br />";
echo "Asunto: ".$asunto."<br />";
echo "Comentarios: ".$comentarios."<br />";*/

$de = "jonmircha@bextlan.com";
$para = $email;
$mensaje = $nombre.", te ha enviado el siguiente mensaje:<br /><br />".$comentarios;

$cabeceras = "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-type: text/html; charset=iso-8859-1\r\n";
$cabeceras .= "From: $de \r\n";

if(mail($para,$asunto,$mensaje,$cabeceras))
	$respuesta = "Los Datos han sido enviados.";
else
	$respuesta = "Ocurrio un error. Los datos no se enviaron.";

echo $respuesta;
?>