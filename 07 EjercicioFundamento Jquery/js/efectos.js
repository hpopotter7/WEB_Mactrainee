//alert("hola");
//$() -- jQuery
// $(objeto).evento(función)

// $(document).ready(function(){
// 	alert("Esto es jQuery anntes de la v1.7.1");
// })

$(document).on("ready", efectos);

function efectos()
{
	$("p").on("click", function(){
		$(this).hide();
	});

	$("#boton").on("click", function(){
		$("p").show();
	});

	$("p").css("background", "yellow");

	$("#boton2").on("click", function(){
		$("p").hide(2500) //slow, fast, swing
	});

	$("#boton3").on("click", function(){
		$("p").show("swing") //slow, fast, swing
	});

	$("#boton4").on("click", function(){
		$("p").toggle();
	});
	$("#boton5").on("click", function(){
		$("p").toggle("swing");
	});

	$(".mostrar").on("click", function(){
		$(".capa-deslizante").slideDown("fast");
	});

	$(".ocultar").on("click", function(){
		$(".capa-deslizante").slideUp("fast");
	});

	$("#boton6").on("click", function(){
		$("#cuadro").fadeTo("fast",.25);
	});

	$("#boton").on("click", function(){
		$("#cuadro").fadeTo("swing",1);
	});

	$("#boton8").on("click", function(){
		$("#cuadro").fadeOut(2000);
	});

	$("#boton9").on("click", function(){
		$("#cuadro").fadeIn(2500);
	});

	$("#parpadea").on("click", function(){
		$("#cuadro").fadeOut().fadeIn();
	});

	$("#boton10").on("click", function(){
		$(".capa-animable").animate({height:300},"slow");
		$(".capa-animable").animate({width:300},"slow");
		$(".capa-animable").animate({height:100, width:100},"fast");
	});

	$("#boton11").on("click", function(){
		$(".capa-animable2").animate({left:"50%"},"swing");
		$(".capa-animable2").animate({width:"250px"},1500);
		$(".capa-animable2").animate({"font-size": "4em"}, 2000);
		$(".capa-animable2").animate({top:"-100px"}, "slow");
		$(".capa-animable2").animate({
			left: 0,
			top: 0, 
			"font-size": ".5em",
			width: 100,
		},2000);
	});

	$("#boton12").on("click", function(){
		//función tipo callback
			$(".parrafo-oculto").hide(1000,function(){
				alert("El parrafo se ha ocultado");
			});
	});


	$("#boton13").on("click", function(){
			$("p").html("<b>El contenido ha sido cambiado</b><input type=text />");
				
	});

	$("#boton14").on("click", function(){
			$("p").append(" Contenido agragado<img src='http://bextlan.com/img/bextlan.png'/>");
				
	});

	$("#boton15").on("click", function(){
			$("p").before(" Antes");
				
	});

	$("#boton16").on("click", function(){
			$("p").after(" Despues");
				
	});

	$("#boton17").on("click", function(){
			$("p").css("background", "peru");
				
	});

	$("#boton18").on("click", function(){
			$("p").css({
				"border-radius": "2em",
				textShadow: "5px 10px",

			});
				
	});

	$("a").on("mouseover", function(){
			$("span").addClass("span-css");
				
	});

	$("a").on("mouseout", function(){
			$("span").removeClass("span-css");
				
	});
	$("a").on("click", function(enlace){
			enlace.preventDefault();
			alert("Se ha prevenido la acción predeterminada");
				
	});

	$("#boton19").on("click", function(){
			$("#ajax").load("otra-pagina.html");	
	});

		
	$("#boton20").on("click", function(){
			$("#ajax").load("otra-pagina.html", function(){
				$(this).fadeIn(2000).fadeOut(2000).fadeIn(2000);
			});	
	});

}

// http://libroquery.com
// http://www.oscarotero.com/jquery/
