//alert("Bienvenido :D")


	//arreglos

var amigos = ["duban","andres","juancho",];
//document.write(amigos[0]);

//amigos[0] = "negro"; //----> reemplaza el elemento en la posicion 0 por negro


//Length -- cuenta cuantos elemntos hay en el arreglo
//negro=amigos.length; //--> se crea una variable y si le asigna el valor amigos.length que es el numero de elementos que hay en ese arreglo, el cual da un numero
//document.write(negro); //--> escribe en el documento, el elemento de la posicion --> negro, cuyo caso seria null, por que no hay nada en esa posicion


////amigos[numero de la posicion en el caso seria el numero de la 
	// cantidad de elementos que hay en el array.]
//amigos[amigos.length]= "Santiago"; //-->.. agrega a lo ultimo al el elemento santiago

////push --> agrega al final del arreglo, es decir si tienes dos elementos en el arreglo y vas a ingresar dos mas,los pones
		// despues de esos dos.

//amigos.push("carlos","juan");

//document.write(amigos);
//document.write("////")
////.pop ---> elimina el ultimo
//amigos.pop();
////document.write(amigos);

//------

var amigos2=["julia","cheo","fernando"];

// concat--> une arreglos
//amigos3 = amigos.concat(amigos2);
//document.write("////");//_---- separador string nada importante
//document.write(amigos3)

//document.write(amigos.join("  ,  ")); //---> join hace que, lo que le indiquemos de string los muestra en pantalla
									 // despues de cada elemento del arreglo.

//var ordenados = amigos.sort(); // .sort -- ordena alfabeticamente o menor a mayor 
//document.write(ordenados); //-----> ordena alfabeticamente o menor a mayor.
//var ordenadosAlReves = amigos.reverse();   //  .reverse() ----> ordena alfabeticamente al reves.
//document.write(ordenadosAlReves); //----> ordena alfabeticamente al reves.

	/// condicionales

	var nombre = "Duban", //--->  poner coma para poder despues escribir otra variable es
		edad = 19;		  // es totalmente correcto.

if(nombre == "negro" ){
	document.write("bienvenido "+ nombre);
}else if(nombre == "duban" || nombre=="Duban"){
	document.write("bienvenido "+ nombre);
}else {
	document.write("bienvenido extraño");
}

     // operadores logicos

    // and = &&
    // or = ||

    ////  operandos

    	// == igual que
    	// != distinto de
    	// > mayor que
    	// < menor que
		// >= mayor o igual
		// <= menor o igual
		// === igual y con el mismo tipo de dato (entero, string, etc)
	//	-----------------------
		//  "<br>" ---> salto de linea