(function(){

	/*alert("hh");*/
	var formulario = document.getElementsByName('formulario')[0],

		elementos = formulario.elements,
		boton = document.getElementById('enviar');
		/*boton.addEventListener("submit",validar)	*/
	
	
	var validarnombre = function(e){
	
		if (document.formulario.nombre.value == 0) {
			alert("completa el campo nombre");
			e.preventDefault();

		}else{
			validarRadio(e);
		};

	};

	var validarRadio = function(e){

		if (document.formulario.sexo[0].checked == true || document.formulario.sexo[1].checked == true){
			validarCheckBox(e);
		}else{
			alert("Selecciona Sexo");
			e.preventDefault();
		};
	};

	var validarCheckBox = function(e){
		if (document.formulario.terminos.checked == false ) {
			alert("Acepta terminos y condiciones");
			e.preventDefault();
		};
	};

	var validar = function(e){
		validarnombre(e);
		
		
		/*validarRadioButton();*/
	};

	formulario.addEventListener("submit",validar);
	




}());


