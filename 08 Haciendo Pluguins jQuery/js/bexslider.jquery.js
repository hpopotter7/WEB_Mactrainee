// por si al archivo se mal cerro se pone un ;
;

$(document).on("ready", function(){
	$("#galeria").bexslider("#anterior", "#siguiente");
});

//Función anonima - closure
(function($,window,document,undefined){
$.fn.bexslider=function(ant,sig)
{
	   $contenedor = $(this).children().eq(0);
	   var fotos= $contenedor.children();
	   var cantidad=fotos.length;
	   //outerWidth suma biorder, paddign, margin y width del elemento
	   var anchuraFoto = fotos.outerWidth(true);
	   var anchuraTotal = cantidad*anchuraFoto;
	   var fotoMostrada = 1;

	   console.log("contenedor: ",$contenedor);
	   console.log("fotos: ",fotos);
	   console.log("cantidad: ",cantidad);
	   console.log("anchuraTotal: ",anchuraTotal);
	   console.log("anchuraFoto: ",anchuraFoto);

	   $contenedor.css("width",anchuraTotal);

	   $(sig).on("click",fotoSiguiente);
	   $(ant).on("click",fotoAnterior);

	   function fotoSiguiente(evento){
	   	evento.preventDefault(); //para que no recargue el href
	   	if(fotoMostrada == cantidad)
	   	{
	   		$contenedor.css({display:"none",left:0}).fadeIn(2000);
	   		fotoMostrada=1;
	   	}
	   	else
	   	{
	   		$contenedor.animate({left:"-="+anchuraFoto},"swing");
	   		fotoMostrada++;
	   	}
	   }

	   function fotoAnterior(evento){
	   	evento.preventDefault(); //para que no recargue el href
	   	if(fotoMostrada != 1)
	   	{
	   		$contenedor.animate({left:"+="+anchuraFoto},"slow");
	   		fotoMostrada--;
	   		
	   	}
	   	else
	   	{
	   		$contenedor.animate({left:"-=40px"},"slow");
	   		$contenedor.animate({left:"+=40px"},"slow"); // fue idea mia, pero se supone que es slider xD

	   		
	   	}
	   }
}
}(jQuery,window,document));