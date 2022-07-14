var usuario = document.getElementById("usuario").value;
var correo = document.getElementById("correo").value;
var login1 = document.getElementById("login");
var login2 = document.getElementById("login2");
function validarEnviar() {
	//valido el nombre
	if (document.validarLogin.usuario.value.length == 0) {
		alert("Tiene que escribir su nombre");
		document.validarLogin.usuario.focus();
		return 0;
	}

	//valido email

	if (document.validarLogin.correo.value.length == 0) {
		alert("Tiene que introducir un correo valido");
		document.validarLogin.correo.focus();
		return 0;
	}

	if ("clic") {
		login1.style.display = "none";
		login2.style.display = "block";
	}

	alert(`Muchas gracias por Logear en nuestra web`);
	document.validarLogin;
}

function validarNombre() {
	var nombre = document.getElementById("usuario").value;
	var resultado = nombre.indexOf(" ");
	if (resultado != -1) {
		alert("El nombre de usuario no puede tener espacios");
	}
}

function validarEmail() {
	var correo = document.getElementById("correo").value;
	var correoError = document.getElementById("correoError");
	var arroba = correo.indexOf("@");
	var punto = correo.indexOf(".");

	if (arroba == -1 || punto == -1) {
		correoError.innerHTML = "No tiene formato <br> de correo. ";
	} else {
		correoError.innerHTML = "";
	}
}
