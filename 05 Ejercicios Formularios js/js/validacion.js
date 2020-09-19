function validarForm(){
var verificar =true;
var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
var expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var expRegFecha=/^[0-9][0-9][0-9][0-9]\-[0-9][0-9]\-[0-9][0-9]$/;
var formulario= document.getElementById("contacto-frm");
var nombre= document.getElementById("nombre");
var edad= document.getElementById("edad");
var email= document.getElementById("email");
var clave= document.getElementById("clave");
var clave2= document.getElementById("clave2");
var masculino= document.getElementById("M");
var femenino= document.getElementById("F");
var nacimiento= document.getElementById("nacimiento");
var region= document.getElementById("region");
var archivo= document.getElementById("archivo");
var twitterChk= document.getElementById("twitterChk");
var twitter= document.getElementById("twitter");
var facebookChk= document.getElementById("facebookChk");
var facebook= document.getElementById("facebook");
var youtubeChk= document.getElementById("youtubeChk");
var youtube= document.getElementById("youtube");
var comentarios= document.getElementById("comentaros");
var condiciones= document.getElementById("condiciones");

if(!nombre.value)
{
	alert("El nombre es requerido");
	nombre.focus();
	verificar = false;
}

else if(!expRegNombre.exec(nombre.value))
{
	alert("El nombre solo acpeta letras y espacios en blanco");
	nombre.focus();
	verificar = false;
}

 else if(!edad.value)
{
	alert("La edad es requerida");
	edad.focus();
	verificar = false;
}

else if(edad.value.length > 2)
{
	alert("La edad solo acpeta 2 numeros");
	edad.focus();
	verificar = false;
}

else if(isNaN(edad.value)){
	alert("La edad solo acepta numeros");
	edad.focus();
	verificar = false;
}

else if(edad.value < 18 || edad.value >= 60)
{
	alert("La edad debe de oscilar entre los 18 y 60 años");
	edad.focus();
	verificar = false;
}

else if(!email.value)
{
	alert("Debes ingresar un correo");
	email.focus();
	verificar = false;
}

else if(!expRegEmail.exec(email.value))
{
	alert("El correo ingresado no es valido");
	email.focus();
	verificar = false;
}

else if(!clave.value )
{
	alert("Se requiere un password");
	clave.focus();
	verificar = false;
}

// else if(clave.value.length >= 4 || clave.value.length <=6  )
// {
// 	alert("La contraseña debe de tener minimo 4 caracteres alfanumericos y máximo 6");
// 	clave.focus();
// 	verificar = false;
// }

else if(!clave2.value )
{
	alert("Se requiere confirmar el password");
	clave2.focus();
	verificar = false;
}

else if(clave2.value != clave.value )
{
	alert("Las contraseñas no coinciden");
	clave.focus();
	verificar = false;
}

else if(!masculino.checked && !femenino.checked)
{
	alert("Seleccione un sexo");
	masculino.focus();
	verificar = false;
}

else if(!nacimiento.value  )
{
	alert("Se necesita una fecha");
	nacimiento.focus();
	verificar = false;
}

else if(!region.value )
{
	alert("Se necesita una región");
	region.focus();
	verificar = false;
}
else if(!archivo.value )
{
	alert("Se necesita un archivo");
	archivo.focus();
	verificar = false;
}

else if(twitter_chk.checked && !twitter.value)
{
	alert("Proporciona tu twitter");
	twitter.focus();
	verificar = false;
}

else if(facebook_chk.checked && !facebook.value)
{
	alert("Proporciona tu facebook");
	facebook.focus();
	verificar = false;
}

else if(youtube_chk.checked && !youtube.value)
{
	alert("Proporciona tu You tube");
	youtube.focus();
	verificar = false;
}

else if(!comentarios.value)
{
	alert("Ingresa algun comentario");
	comentarios.focus();
	verificar = false;
}

else if(twitterChk.checked && (twitter.value.indexOf("@")!=0 || twitter.value== "@"))
{
	alert("Tu twitter debe tener minimo 2 caracteres y debe empezar con @");
	twitter.focus();
	verificar = false;
}

else if(comentarios.value.length > 255)
{
	alert("El comentario no puede tener más de 255 caracteres");
	comentarios.focus();
	verificar = false;
}

else if(!condiciones.checked)
{
	alert("Debes aceptar los terminos y condiciones");
	condiciones.focus();
	verificar = false;
}


if(verificar){
	alert("Simon ese!!");

}



}

function habilitar(evento)
{
	var caja;
	switch(evento.target.name)
	{
		case "twitter_chk":
			caja = document.getElementById("twitter");
			break;
		case "facebook_chk":
			caja = document.getElementById("facebook");
			break;
		case "youtube_chk":
			caja = document.getElementById("youtube");
			break;

	}

	if(evento.target.checked){
		caja.disabled = false;
	}
	else{
		caja.disabled = true;
		caja.value = "";
	}
}

function limpiar(){
	alert("Limpiando");
	document.contacto_frm.reset();

}

window.onload = function(){
	var botonlimp = document.getElementById("limpiar");
	botonlimp.onclick = limpiar;

	var botonenv = document.contacto_frm.enviar_btn;
	botonenv.onclick = validarForm;

	var cassillaTw = document.contacto_frm.twitter_chk;
	cassillaTw.onclick = habilitar;

	var cassillaFb = document.contacto_frm.facebook_chk;
	cassillaFb.onclick = habilitar;

	var cassillaYt = document.contacto_frm.youtube_chk;
	cassillaYt.onclick = habilitar;

}

