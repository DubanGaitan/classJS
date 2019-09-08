(function (){
	function paroimpar(numero){
		mod = numero % 2
		if(mod == 0 ){
			return('El numero es par')
		}else{
			return('El numero es impar')
		}
	}
	var re = paroimpar(prompt('escriba un numero entero '))
	document.getElementById('caj').innerHTML = re
}())