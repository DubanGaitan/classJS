(function(){

	var valores = [true, 5, false, "hola", "adios", 2];

	txtmayor = ""

	// aqui utilizo  if

	if (valores[4] > valores[3])
		txtmayor= (valores[4] + " es el mayor");
	else
		txtmayor = (valores[3] + " es el mayor");

	// para obtener un solo resultado TRUE operando solo los boleanos son:

	// true and true = true

	//  false or false  = flase

	suma = valores[1] + valores[5]
	resta = valores[1] - valores[5]
	multi = valores[1] * valores[5]
	division = valores[1] / valores[5]
	mod = valores[1] % valores[5]

	alert(txtmayor);

	alert(" suma =  " + suma + "\n" + " resta  =  " + resta + "\n" + " Multiplicacion =  " + multi + "\n" + " division =  " + division  + "\n" + "modulacion =  "+ mod);

}())