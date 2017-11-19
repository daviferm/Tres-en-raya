function inicioReloj(){
var fecha = new Date();
var segundos = fecha.getSeconds();
var minutos = fecha.getMinutes();
var hora = fecha.getHours();

	se = document.getElementById("segundos");
	mi = document.getElementById("minutos");
	ho = document.getElementById("horas");
	amp = document.getElementById("ampm");

	cronometer = setInterval(function(){
		segundos++;


		secs = segundos;
		mins = minutos;
		hor = hora;
		while(secs>=60){
			mins++;
			secs-=60;
		}
		if(mins<10)mi.innerHTML="0"+mins;
		else mi.innerHTML=mins;

		if(secs<10){
			se.innerHTML="0"+secs;
		}else{
			se.innerHTML=secs;
		}
		if(mins>=60){
			hor++;
			mins-=60;
		}

		if(hor<10){
			ho.innerHTML="0"+hor;
		}else {
			ho.innerHTML=hor;
		}

		if(hor>12){
			amp.innerHTML="PM";
		}else {
			amp.innerHTML="AM";
		}
		
	},1000);
}
function iniciarFecha() {

	var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	var fecha = new Date();

	diaS = document.getElementById("diaSemana");
	diaMes = document.getElementById("dia");
	mes = document.getElementById("mes");
	anio = document.getElementById("year");

	diaS.innerHTML=semana[fecha.getDay()];
	diaMes.innerHTML=fecha.getDate();
	mes.innerHTML=meses[fecha.getMonth()];
	anio.innerHTML=fecha.getFullYear();

}

