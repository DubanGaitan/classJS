(function(){

	var diaSem = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"];
		mesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	function fechayhora(){
		var reloj = new Date();
			diasemana = reloj.getDay();
			diaMes = reloj.getDate();
			mes = reloj.getMonth();
			año = reloj.getFullYear();
			hora = reloj.getHours();
			minutos = reloj.getMinutes();
			segundos = reloj.getSeconds();

		document.getElementById("diaSemana").innerHTML = diaSem[diasemana];
		document.getElementById("dia").innerHTML = diaMes;
		document.getElementById("mes").innerHTML = mesAño[mes];
		document.getElementById("año").innerHTML = año;
		
		if (hora > 12){
			if (hora > 12 && hora < 20){
				/*hora = hora.toString(hora )*/
				document.getElementById("horas").innerHTML = "0"+(hora - 12 );
			}else{
				document.getElementById("horas").innerHTML = hora -12 ;	
			};
			if(hora >= 12 && hora < 24){
				document.getElementById("am-pm").innerHTML = "PM";
			};
		}else{
			if (hora > 0 && hora < 10){
				document.getElementById("horas").innerHTML = "0"+(hora);
			}else{
				document.getElementById("horas").innerHTML = hora;	
			};
			if(hora >0 && hora < 12){
				document.getElementById("am-pm").innerHTML = "AM";
			};
		};
		document.getElementById("minutos").innerHTML = minutos;
		
		if(segundos < 10){
			document.getElementById("segundos").innerHTML = "0"+segundos;
		}else{
		document.getElementById("segundos").innerHTML = segundos;

		}

	};

	fechayhora();
	setInterval(fechayhora, 1000);

}());