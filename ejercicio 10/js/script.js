(function(){
	var re = [];
	function poli(palabra){
		
		ta = palabra.length
		for(i = ta; i >= 1; i--){
			re.push(palabra[i-1]);
		};
	};
	var palabra  = prompt('Escriba la palabra')
	palabra = palabra.toLowerCase();
	if (palabra.lastIndexOf(" ")){
		palabra = palabra.split(" ");
	}
	palabra = palabra.join("")
	palabra = palabra.split("")
	poli(palabra);
	palabra = palabra.join("")
	console.log(palabra)
	if(palabra === re.join("") ){
		console.log("La palabra es palíndromo");
	};
}())