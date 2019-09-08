(function(){

	var boton = document.getElementById('agregar'),
		textbox = document.getElementById('textbox');
	var spavar = document.getElementById("lista");

	
	function mouseover(){
		boton.className = "boton boton2mouseover";
	};

	var mouseout = function(){
		boton.className ="boton"
	};
	
	function colorRed(){
		if(textbox.className == "textbox"){
			textbox.className = "textbox erorTxt";
		}else {
			textbox.className ="textbox"
		};
		
	};

	function cambiarColor(){
		colorRed();
		textbox.removeEventListener("click", cambiarColor);
	};
	function addEventClickTextBox(){

		textbox.addEventListener("click", cambiarColor);
	};
	function spanMouseOver(){
		alert("hh")
		if(i.className == "eliminar subrayado"){
			i.className = "eliminar"
		}else{
			i.className = "eliminar subrayado"

		};
	};

	function spanMouseout(element){
		element.className
	};

	function format(e){

		e.addEventListener("mouseover", function(){
			e.className ="eliminar subrayado"
		});
		e.addEventListener("mouseout", function(){
			e.className ="eliminar"
		}); 
	};

	function colorErrorTextB(textbox){
			colorRed();
			addEventClickTextBox();
	}

	function errorTexbox(){
		alert("Escriba tu nueva tarea");
		colorErrorTextB();

	};
	function limpiarTetBox(){
		textbox.value = "";
	};

	function verificar(){
		
		if (textbox.value === ""){
			errorTexbox();
		}else{
			elementLi = document.createElement("li");
			newElement = document.createElement("span");
			content = document.createTextNode(textbox.value + " ");
			conteni = document.createTextNode("Eliminar");
			newElement.appendChild(conteni);
			newElement.className = "eliminar";
			elementLi.appendChild(content);
			elementLi.appendChild(newElement);
			var padre = document.getElementById("lista").appendChild(elementLi);

			for ( i = 0; i <= spavar.children.length - 1; i++ ){
				var e = spavar.children[i];
				for (j = 0; j <= e.children.length -1; j++ ){
					e.children[j].addEventListener("click", function(){
						this.parentNode.removeChild(this);
						e.parentNode.removeChild(e);
					});

					format(e.children[j]);
				};
			};
		};
	};

	function clickBotonAgregar(){
		verificar();
		limpiarTetBox();
	};

	
	boton.addEventListener("mouseover", mouseover);
	boton.addEventListener("mouseout", mouseout);
	boton.addEventListener("click", clickBotonAgregar);
	
	for ( i = 0; i <= spavar.children.length - 1; i++ ){
		var e = spavar.children[i];
		for (j = 0; j <= e.children.length -1; j++ ){
			e.children[j].addEventListener("click", function(){
				this.parentNode.removeChild(this);
				e.parentNode.removeChild(e);
			});	
			format(e.children[j]);
		};
	};

}());