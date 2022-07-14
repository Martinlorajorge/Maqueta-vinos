function campoVacio1() {
	var nombre2 = document.getElementById("nombre2").value;
	if (nombre2 == "") {
		alert("Los campos no pueden quedar vacios");
	}
}

function campoVacio2() {
	var mail = document.getElementById("mail").value;
	var campoVacio2 = document.getElementById("campoVacio");
	if (mail == "") {
		alert("Campo Obligatorio ");
	} else {
		campoVacio2.innerHTML = "*";
	}
}

function validarEmail2() {
	var mail = document.getElementById("mail").value;
	var campoVacio2 = document.getElementById("campoVacio2");
	var arroba = mail.indexOf("@");
	var punto = mail.indexOf(".");

	if (arroba == -1 || punto == -1) {
		campoVacio2.innerHTML = "No tiene formato <br> de correo. ";
	} else {
		campoVacio2.innerHTML = "*";
	}
}
