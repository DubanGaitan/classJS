// modelo de eventos estandar

(function(){

	var boton = document.getElementById('boton'); //= botonclick;
	//boton.addEventListener(tipo de evento, funcion: anonima ó el nombre de una funcion ejemplo:);
	
		//funcion Anonima
	//	boton.addEventListener("click", function(){
	//		console.log('funciono correctamente'); /// ó
	// alert("una alerta");
	//	});

		// con Nombre de la Funcion
		boton.addEventListener("click", saludo);

	var input = document.getElementById('input');
		input.addEventListener("focus", textbox);
		
		//input.addEventListener("blur", blur);


	// para remover un evento 
	//boton.removeEventListener(evento, funcion)

	}());

function saludo(e){
	alert("Hey nuevaa forma ");

	// .type --> saber que tipo de evento..
	// .target --> saber a que elemento se aplica
	// .preventDefault();  --> previene la pagina default
	alert("evento tipo: "+ e.type);
};

function textbox(){
	alert("hee");

	input.removeEventListener("focus", textbox);

};

function blur(){
	input.addEventListener("focus", textbox);
};
