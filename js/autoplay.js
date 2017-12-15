

var botonX = document.getElementById("botonX");
var botonO = document.getElementById("botonO");


botonX.addEventListener("mouseover", overBotonX);
botonX.addEventListener("mouseleave", leaveBotonX);
botonO.addEventListener("mouseover", overBotonO);
botonO.addEventListener("mouseleave", leaveBotonO);
botonO.addEventListener("click", autoplay_O);
botonX.addEventListener("click", autoplay);

var game = true;
var obtions_total = 9;
var obtions = 0;
var scroll_total = 100;
var width_scroll = 0;
var max_Tirada;
var turno;
//turno = 0 -> X
//turno = 1 -> O

function overBotonX(){
	document.getElementById("equex").style.transform = "scale(1.3)";

}
function leaveBotonX(){
	document.getElementById("equex").style.transform = "scale(1)";
}
function overBotonO(){
	document.getElementById("boton_circulo").style.transform = "scale(1.2)";

}
function leaveBotonO(){
	document.getElementById("boton_circulo").style.transform = "scale(1)";
}
var board = new Array(3);
var Tirada = 0;

function autoplay_O(y, x) {
	Tirada = 0;
	turno = 1;
	botonX.style.borderBottom = "0px solid #400000";
	botonO.style.borderBottom = "4px solid #400000";
	botonO.style.transform = "scale(1.2)";
	max_Tirada = 12;
	checkCell_O();
}
function autoplay () {
	inicioReloj();
	iniciarFecha();
	botonX.style.borderBottom = "4px solid #660066";
	botonX.style.transform = "scale(1.2)";
	for (i=0; i<3; i++){
		board[i] = new Array(3);
	}
	max_Tirada = 12;
	turno = 0;
	document.getElementById("mensaje").style.display = "none";
	ClearBoard();

	/*y=Math.round(Math.random()*2);
	x=Math.round(Math.random()*2);*/
}

autoplay();
// posicion 0 -> vacia
// posicion 1 -> ocupada x
// posicion 2 -> ocupada O

/*
switch (Tirada) {
		case (0):
			PaintCrossCell(y, x);
			SelectCell(y, x);
			botonX.style.borderBottom = "0px solid #400000";
			botonO.style.borderBottom = "4px solid #400000";
			break;
		case (1):
			PaintCircleCell(y, x);
			botonX.style.borderBottom = "4px solid #400000";
			botonO.style.borderBottom = "0px solid #400000";
			break;
		case (2):
			PaintCrossCell(y, x);
			botonX.style.borderBottom = "0px solid #400000";
			botonO.style.borderBottom = "4px solid #400000";
			break;
		case (3):
			PaintCircleCell(y, x);
			botonX.style.borderBottom = "4px solid #400000";
			botonO.style.borderBottom = "0px solid #400000";
			break;
		case (4):
			PaintCrossCell(y, x);
			botonX.style.borderBottom = "0px solid #400000";
			botonO.style.borderBottom = "4px solid #400000";
			break;
		case (5):
			PaintCircleCell(y, x);
			botonX.style.borderBottom = "4px solid #400000";
			botonO.style.borderBottom = "0px solid #400000";
			break;
		case (6):
			PaintCrossCell(y, x);
			botonX.style.borderBottom = "0px solid #400000";
			botonO.style.borderBottom = "4px solid #400000";
			break;
		case (7):
			PaintCircleCell(y, x);
			botonX.style.borderBottom = "4px solid #400000";
			botonO.style.borderBottom = "0px solid #400000";
			break;
		case (8):
			PaintCrossCell(y, x);
			botonX.style.borderBottom = "0px solid #400000";
			botonO.style.borderBottom = "4px solid #400000";
			break;
		default:
			alert("No hay mas movimientos");
			break;
	}
	CellSelectec_x = x;
	CellSelectec_y = y;
	Tirada++;
	console.log(Tirada);
*/
