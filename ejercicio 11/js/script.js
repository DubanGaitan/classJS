window.onload = function() {
	// Numero de enlaces de la pagina
	element = document.getElementsByTagName('a')
	tama = element.length
	console.log(tama)
	console.log("")

	// Direccion del penultimo enlace
	var ref = element[tama -2 ].href;
	console.log(ref)
	console.log("")

	// Numero de enlaces que apuntan a http://prueba
	num = 0
	for ( i=0; i < tama; i++ ){
		enlacs = element[i].href;
		if(enlacs == 'http://prueba/' ){
			num++ ;
		}
	}
	console.log(num)
	console.log("")

	// Numero de enlaces del tercer p�rrafo
	parrafo3 = document.getElementsByTagName('p')
	enlacesparrafo3 = parrafo3[2].getElementsByTagName('a')
	nume = enlacesparrafo3.length
	console.log(nume)

}