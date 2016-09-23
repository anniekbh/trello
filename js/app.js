window.addEventListener("load", function() {
	var lista = document.getElementById("agregarTarjeta");
	var listaNueva = document.getElementById("nuevaTarjeta");
	var boton = document.getElementById("boton");
	var crearMensaje = document.getElementById("mensaje");
	
	lista.addEventListener("click", function() {
			lista.style.display = "none";
			listaNueva.style.display = "block";
		});
	boton.addEventListener("click", function(e) {
		e.preventDefault();
		mostrarMensaje(crearMensaje.value);
		crearMensaje.value = "";
		boton.disabled = true;
		listaNueva.style.display = "none";
	});

	function mostrarMensaje(crearMensaje){
		
		var newMensaje = document.createElement("div");
        var mostrarMensaje = document.createTextNode(crearMensaje);
	    newMensaje.appendChild(mostrarMensaje);
	    var placeText = document.getElementById("salida");
	    placeText.insertBefore(newMensaje, placeText.childNodes[0]);

	    var agregar = document.createElement("div");
        agregar.classList.add("listaMas");
        agregar.innerHTML= "Añadir una lista...";
        newMensaje.insertBefore(arroba, newMensaje.childNodes[1]);
	};
});