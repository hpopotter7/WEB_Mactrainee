$(document).on("ready", efectos);

function efectos(){
	$("#uno").on("click", function(evento){
		evento.preventDefault();
		$("#contenido").load("html/seccion1.html", function(){
			$(this).fadeOut().fadeIn();
		});
	});

	    $("#dos").on("click", function(evento){
	 	evento.preventDefault();
		$("#contenido").load("html/seccion2.html", function(){
		$(this).css("display","none").fadeIn(750);
		 });
	});

	$("#tres").on("click", function(evento){
		evento.preventDefault();
		$("#contenido").load("html/seccion3.html", function(){
			$(this).css("display","none").show(1000);
		});
	});

	$("#cuatro").on("click", function(evento){
		evento.preventDefault();
		$("#contenido").load("html/seccion4.html", function(){
			$(this).css("display","none").slideDown("swing");
		});
	});
}