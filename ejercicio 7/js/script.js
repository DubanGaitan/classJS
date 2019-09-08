(function(){

	result = ""
	var factor = prompt('ingrese el numero para dar el factorial ')
	for (i = 0; i < factor; i++ ){
		if (result == 0 ) 
			result = (factor - i)
		else 
			result =(factor - i) * result
	}

	document.getElementById('Mensaje').innerHTML=result //--> esto hace que el resultado se escriba dentro del div con id= Mensaje

}())

/* estructura For in

for(indice in array) {
  ...
}

*/