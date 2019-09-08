(function(){
	arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	nDNI = prompt('Ingrese su numero d identificacion',"");
	if (nDNI < 0 || nDNI > 9999999999)
		alert('El numero indicado es erroneo')
	else
		le = prompt('ingrese su letra de DNI, (en Mayuscula)', "ej. R")
		mod = nDNI % 23
		letra = arrayLetras[mod]
		if(le === letra) 
			alert('El numero y la letra son correctos')
		else
			alert('La Letra no coindice')
}())