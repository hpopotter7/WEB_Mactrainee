<?php

$to = "moctezuma@chocolatera.com";
$subject = "Comentarios desde el sitio web";

$nombre = $_POST["nombre"];
$tel = $_POST["telefono"];
$email = $_POST["email"];
$comentarios = $_POST["comentarios"];

$body .= "Nombre: " . $nombre . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Teléfono: " . $tel . "\n";
$body .= "Comentarios: " . $comentarios . "\n";

$mensaje = utf8_decode($body);

/* enviando solicitud de suscripcion */
mail($to, $subject, $mensaje, "From: " . $nombre . " <" . $email . ">");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US"><head><!-- Created by Artisteer v4.0.0.58475 -->
    <meta charset="utf-8">
    <title>Contácto</title>
    <meta name="viewport" content="initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no, width = device-width">

    <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <link rel="stylesheet" href="style.css" media="screen">
    <!--[if lte IE 7]><link rel="stylesheet" href="style.ie7.css" media="screen" /><![endif]-->
    <link rel="stylesheet" href="style.responsive.css" media="all">
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Electrolize|Cuprum|Adamina&amp;subset=latin">

    <script src="jquery.js"></script>
    <script src="script.js"></script>
    <script src="script.responsive.js"></script>


<link rel="shortcut icon" href="images/favicon.ico" />
</head>
<body>
<div id="art-main">
<header class="art-header clearfix">


    <div class="art-shapes">

<div class="art-textblock art-object892522067" data-left="71.4%">
        <div class="art-object892522067-text">CHOCOLATERA MOCTEZUMA</div>
    
</div><div class="art-textblock art-object1263556025" data-left="51.67%">
        <div class="art-object1263556025-text">Sabor y calidad en un mismo chocolate</div>
    
</div>
            </div>

<nav class="art-nav clearfix">
    <ul class="art-hmenu"><li><a href="inicio.html">Inicio</a></li><li><a href="chocolatera-moctezuma.html">Chocolatera Moctezuma</a><ul><li><a href="new-page/mision-vision-y-valores.html">Misión, Visión y Valores</a></li><li><a href="new-page/mapa-y-presencia.html">Mapa y Presencia</a></li></ul></li><li><a href="calidad-moctezuma.html">Calidad Moctezuma</a><ul><li><a href="calidad-moctezuma/certificados.html">Certificados</a></li></ul></li><li><a href="productos.html">Productos</a><ul><li><a href="productos/chocolate-para-mesa.html">Chocolate para Mesa</a></li><li><a href="productos/chocolate-en-polvo.html">Chocolate en Polvo</a></li><li><a href="productos/productos-industriales.html">Productos Industriales</a></li></ul></li><li><a href="contacto.html" class="active">Contácto</a><ul class="active"><li><a href="contacto/bolsa-de-trabajo.html">Bolsa de trabajo</a></li><li><a href="contacto/ubicacion.html">Ubicación</a></li></ul></li><li><a href="promociones.html">Promociones</a></li></ul> 
    </nav>

                    
</header>
<div class="art-sheet clearfix">
            <div class="art-layout-wrapper clearfix">
                <div class="art-content-layout">
                    <div class="art-content-layout-row">
                        <div class="art-layout-cell art-content clearfix"><article class="art-post art-article">
                                <h2 class="art-postheader">Gracias por contactarnos</h2>
                                                
                <div class="art-postcontent art-postcontent-0 clearfix" style="width:100">
En breve, estaremos revisando tus comentarios.
</div>
                  
</article></div>
                        <div class="art-layout-cell art-sidebar1 clearfix"><div class="art-block clearfix">
        <div class="art-blockheader">
            <h3 class="t">Sabias que...?</h3>
        </div>
        <div class="art-blockcontent"><p> </p>
<ul>
<li style="text-align: left;"><span style="font-family: Adamina, Arial, 'Arial Unicode MS', Helvetica, sans-serif; line-height: normal;">Chocolatera Moctezuma es una Industria Limpia. &nbsp;<a href="calidad-moctezuma/certificados.html" target="_self">[Sigue leyendo]</a></span><br></li>
<li style="text-align: left;"><span style="font-family: Adamina, Arial, 'Arial Unicode MS', Helvetica, sans-serif; line-height: normal;">En cada paquete de tu chocolate favorito, hay una gran sorpresa. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="promociones.html" target="_self">[Sigue Leyendo]</a></span></li>
</ul>
<br>
<p>                                  </p></div>
</div></div>
                    </div>
                </div>
            </div><footer class="art-footer clearfix">
<p><span style="color: rgb(61, 34, 10); font-family: 'Palatino Linotype'; font-size: 12px; line-height: 18px;">Copyright <span style="font-family: 'Palatino Linotype', serif;">©</span></span><span style="color: rgb(61, 34, 10); font-family: 'Palatino Linotype'; font-size: 12px; line-height: 18px;">&nbsp;2013. Todos los derechos reservados.</span><br></p>
</footer>

    </div>
    <p class="art-page-footer">
       
    </p>
</div>


</body></html>