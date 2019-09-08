   //ciclos

for( i = 0; i <= 10; i++ ){

	//document.write("va en el "+ i + "<br>");
}

var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for ( i = 0; i<=dias.length ; i++ ){

	//document.write( dias[i] + "<br>"); // imprime exactamente  el tamaño del arreglo, con esto imprimiendo un indefinido.
}
//////////--------------------------------------------------------
//document.write("");
//i = 0;
for ( i = 0; i<=dias.length - 1; i++ ){

	//document.write( dias[i] + "<br>"); // imprime exactamente todos los elementos,
}

///////////------------------------

var j = 0;

while (j <= 10 ){
	//document.write( j + "<br>");
	j++;
}
//---------------------------------

//do{
//	instrucciones // ejecuta siempre al menos 1 vez
//}while(condicion);

		// Funciones

//function nombre (){
	//instrucciones
//}

function saludo(){
//	document.write("hola buen dia" + "<br>");
}

saludo();

function saludo2(nombre){
	//document.write("hola buen dia " + nombre);
}

saludo2("duban");


function suma1(num1,num2){
	var numero1 = num1;
	var numero2 = num2;

	return (numero1 + numero2)
	
}
document.write(suma1(8,2));
