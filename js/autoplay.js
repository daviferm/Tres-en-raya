

var botonX = document.getElementById("botonX");
var botonO = document.getElementById("botonO");
const $titulo = document.querySelector('h1');


botonO.addEventListener("click", autoplay_O);
botonX.addEventListener("click", autoplay);

var game = true;
var obtions_total = 9;
var obtions = 0;
var scroll_total = 100;
var width_scroll = 0;
var max_Tirada;
var turno;
var players;
//turno = 0 -> X
//turno = 1 -> O

inicioReloj();
iniciarFecha();

var board = new Array(3);
var Tirada = 0;

function autoplay_O(y, x) {
	Tirada = 0;
	turno = 1;
	botonX.style.borderBottom = "0px solid #400000";
	botonO.style.borderBottom = "3px solid #400000";
	botonO.style.transform = "scale(1.1)";
	max_Tirada = 12;
	if(players==1) checkCell_O();
}


function autoplay (event) {
	botonX.style.borderBottom = "3px solid #660066";
	botonX.style.transform = "scale(1.1)";
	for (i=0; i<3; i++){
		board[i] = new Array(3);
	}
	max_Tirada = 12;
	turno = 0;
	ClearBoard();
	MENSAJE.style.display = "none";
	/*y=Math.round(Math.random()*2);
	x=Math.round(Math.random()*2);*/
}
MENSAJE.style.display = "none";

// autoplay();
// posicion 0 -> vacia
// posicion 1 -> ocupada x
// posicion 2 -> ocupada O





