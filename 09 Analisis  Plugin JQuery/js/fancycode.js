$(document).on("ready", ejemplosFancy);

function ejemplosFancy()
{
	$(".galeria-sencilla").fancybox();

	$("#efecto1").fancybox({
		openEffect: "elastic",
		closeEffect: "elastic",
		openSpeed:2000
	});

	$("#efecto2").fancybox({
		openEffect: "elastic",
		closeSpeed: 1500,
		helpers:{
			title:{
				type:"outside"
			}
		}
	});

	$("#efecto3").fancybox({
		openEffect: "elastic",
		closeEffect: "elastic",
		openSpeed:2000
	});

	$("#efecto4").fancybox({
		openEffect: "elastic",
		closeEffect: "elastic",
		openSpeed:2000
	});

	$("#efecto5").fancybox({
		openEffect: "elastic",
		closeEffect: "elastic",
		openSpeed:2000
	});

	$("#efecto6").fancybox({
		openEffect: "elastic",
		closeEffect: "elastic",
		openSpeed:2000
	});

	$("#error").fancybox();

	$("#mostrar-oculto").fancybox();

	$("#mostrar-por-ajax").fancybox({
		scrolling:"yes"
	});
	$("#mostrar-en-iframe").fancybox({
		scrolling:"yes"
	});
	$("#mostrar-swf").fancybox();
	$("#youtube").fancybox();

}