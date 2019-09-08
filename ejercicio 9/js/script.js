(function(){

	function dete(cadena){

		if(cadena == cadena.toUpperCase()){
			return('Esta en mayusculas')
		}else{ 
			if(cadena == cadena.toLowerCase()){
				return('Esta en minusculas')
			}else{
				return('tiene combinancion de mayusculas y minusculas')
			}
		}
	}

	var d = dete(prompt('Escriba cadena de Texto'))
	console.log(d)

}())