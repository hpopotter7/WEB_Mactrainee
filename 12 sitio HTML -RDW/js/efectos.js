//funcion para slider
function iniciarSlider(){
	// alert("funciona");
	 $(".flexslider").flexslider({
	 	animation:"slide"
	 });
}

//funcion para página acerca.html
function formulaHTML5()
{
	var imgFormula = $("#acerca-multimedia figure img");

		imgFormula.on("mouseover", function(){
			$(this).css({
				background:"rgba(190,236,249,.6)",
				borderRadius:"1em",
				"box-shadow":"-.1em -.1em .5em #F60 inset"
			});	
		});	

		imgFormula.on("mouseout", function(){
			$(this).css({
				background:"transparent",
				borderRadius:0,
				"box-shadow":""

			});	
		});	

		imgFormula.on("click", function(){
			$("#acerca-multimedia figcaption").slideToggle(2000);	
		});	
		
}

//Funcion para trabajar contacto.php
function enviarDatos()
{
	var opcionesDeEnvio = {
		beforeSubmit:antesDeEnviar,
		success:cuandoEsEnviado
	}

	$("#contacto-datos").ajaxForm(opcionesDeEnvio);
}

function antesDeEnviar(){
	$("#precarga").fadeIn("slow");
}

function cuandoEsEnviado(respuestaphp){
	$("#precarga").fadeOut("slow");
	$("#contacto-datos")[0].reset();
	$("#respuesta").addClass("mensaje").fadeIn("slow").html(respuestaphp);
}

//funcion tecnologias.html
function mostrarTecnologias(){
	var figureId, figcaption, url;

	$(".tecnologias").on("mouseover", function(){
		figureId = $(this).attr("id"); //para traer el valor del atributo html
		figcaption = "#"+figureId+" figcaption";
		$(figcaption).animate({opacity:1}, 2);

	});

	$(".tecnologias").on("mouseout", function(){
		figureId = $(this).attr("id"); //para traer el valor del atributo html
		figcaption = "#"+figureId+" figcaption";
		$(figcaption).animate({opacity:0},2);

	});

	$("#semantics").on("click", queTecnologia);
	$("#offline-storage").on("click", queTecnologia);
	$("#device-access").on("click", queTecnologia);
	$("#connectivity").on("click", queTecnologia);
	$("#multimedia").on("click", queTecnologia);
	$("#effects").on("click", queTecnologia);
	$("#performance").on("click", queTecnologia);
	$("#css3").on("click", queTecnologia);
	
}

function queTecnologia(enlace){
	enlace.preventDefault();
	figureId = $(this).attr("id");
	url= "html/"+figureId+".html";
	$("#tecnologias-descripcion").slideUp(1000,function(){
		$(this).load(url);
	}).slideDown("swing");
}
