function $(id) {
	return document.getElementById(id); 
}
const EQUIX = $('caja_equix');
const CIRCULO = $('caja_circulo');
const MENSAJE = $('mensaje');
const RESULTADO = $('resultado');
const CRUZ = $('efecto_curz');
const CIRCLE = $('circle');
let content_circle = CIRCLE.innerHTML;
let content_cruz = CRUZ.innerHTML;


MENSAJE.addEventListener('click', mostrarModal);

function ocultarModar (event) {
	
	players = (event == 1)? 1 : 2;

	$modal.classList.remove('modalIn');
	$modal.classList.add('modalOut');
	autoplay(event);
}
function mostrarModal (event) {
	$modal.classList.remove('modalOut');
	$modal.classList.add('modalIn');
	MENSAJE.style.display = "none";
}
const $modal = document.querySelector('.modal');


function ClearBoard(){
	botonX.style.borderBottom = "3px solid #400000";
	botonO.style.borderBottom = "0px solid #400000";
	botonO.style.transform = "scale(1)";
	botonX.style.transform = "scale(1.1)";

	Tirada = 0;
	obtions = 9;
	game = true;
	document.getElementById("number_obt").innerHTML = obtions;
	width_scroll = 0;
	document.getElementById("progreso").style.width = "5%";

	for (i=0; i<3; i++){
		for (j=0; j<3; j++){
			board[i][j] = 0;

			cell = document.getElementById("c"+i+j).innerHTML = "";
			
		}
	}
}

function CheckCell(y, x){
	if(Tirada < max_Tirada){

	switch (Tirada) {
		case (0):
			PaintCrossCell(y, x);
			if(players==1) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (1):
			if(players==1){
				PaintCircleCell(y, x);
				Chedk_obtions();
				document.getElementById("number_obt").innerHTML = obtions;
				width_progress();
			}else if (players==2) {
				PaintCrossCell(y, x);
			}
			break;
		case (2):
			PaintCrossCell(y, x);
			if(players==1) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (3):
			PaintCrossCell(y, x);
			if(players==1) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (4):
			PaintCrossCell(y, x);
			if(players==1) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (5):
			PaintCrossCell(y, x);
			if(players==1) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (6):
			PaintCrossCell(y, x);
			if(players==1) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress()
			break;
		case (7):
			width_progress()
			PaintCrossCell(y, x);
			if(players==1) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			break;
		case (8):
			width_progress()
			PaintCrossCell(y, x);
			Check_Game();
			if(players==1 && game==true) checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			break;
		default:

			break;
		}
	}else {
		MENSAJE.style.display = "block";
		RESULTADO.innerHTML = "Partida en tablas!!";
		CIRCULO.style.display = "block";
		EQUIX.style.display = "block";
	}
}
function width_progress(){
	width_scroll = ((obtions_total - obtions) * (scroll_total / 9));
	document.getElementById("progreso").style.width = width_scroll + "%";
}

function Chedk_obtions(){
	console.log("Tirada: " + Tirada);
	obtions = 0;
	if(board[0][0] == 0)obtions++;
	if(board[0][1] == 0)obtions++;
	if(board[0][2] == 0)obtions++;
	if(board[1][0] == 0)obtions++;
	if(board[1][1] == 0)obtions++;
	if(board[1][2] == 0)obtions++;
	if(board[2][0] == 0)obtions++;
	if(board[2][1] == 0)obtions++;
	if(board[2][2] == 0)obtions++;
}

function Check_Game(){
	if( board[0][0] != 0 &&
		board[0][1] != 0 &&
		board[0][2] != 0 &&
		board[1][0] != 0 &&
		board[1][1] != 0 &&
		board[1][2] != 0 &&
		board[2][0] != 0 &&
		board[2][1] != 0 &&
		board[2][2] != 0 ){

	MENSAJE.style.display = "block";
	RESULTADO.innerHTML = "Partida en tablas!!";
	EQUIX.style.display = 'inline-block';
	CIRCULO.style.display = 'inline-block';
	EQUIX.className = 'caja_equix';
	CIRCULO.className = 'caja_circulo';
	game = false;
	}
}

function checkCell_O_end(){
	if(board[0][0] == 0)PaintCircleCell(0, 0);
	if(board[0][1] == 0)PaintCircleCell(0, 1);
	if(board[0][2] == 0)PaintCircleCell(0, 2);
	if(board[1][0] == 0)PaintCircleCell(1, 0);
	if(board[1][1] == 0)PaintCircleCell(1, 1);
	if(board[1][2] == 0)PaintCircleCell(1, 2);
	if(board[2][0] == 0)PaintCircleCell(2, 0);
	if(board[2][1] == 0)PaintCircleCell(2, 1);
	if(board[2][2] == 0)PaintCircleCell(2, 2);
}

function checkCell_O(){
	if(Tirada == 0){
		if(board[1][1]==0){PaintCircleCell(1, 1)};
		Tirada++;
		Chedk_obtions();
		document.getElementById("number_obt").innerHTML = obtions;

	}
	

	if(Tirada > 1){
		if(board[0][0]==2 && board[0][1]==2){PaintCircleCell(0, 2);}
		if(board[0][1]==2 && board[0][2]==2){PaintCircleCell(0, 0);}
		if(board[0][0]==2 && board[0][2]==2){PaintCircleCell(0, 1);}
		if(board[1][0]==2 && board[1][1]==2){PaintCircleCell(1, 2);}
		if(board[1][1]==2 && board[1][2]==2){PaintCircleCell(1, 0);}
		if(board[1][0]==2 && board[1][2]==2){PaintCircleCell(1, 1);}
		if(board[2][0]==2 && board[2][1]==2){PaintCircleCell(2, 2);}
		if(board[2][1]==2 && board[2][2]==2){PaintCircleCell(2, 0);}
		if(board[2][0]==2 && board[2][2]==2){PaintCircleCell(2, 1);}
		if(board[0][0]==2 && board[1][0]==2){PaintCircleCell(2, 0);}
		if(board[1][0]==2 && board[2][0]==2){PaintCircleCell(0, 0);}
		if(board[0][0]==2 && board[2][0]==2){PaintCircleCell(1, 0);}
		if(board[0][1]==2 && board[1][1]==2){PaintCircleCell(2, 1);}
		if(board[1][1]==2 && board[2][1]==2){PaintCircleCell(0, 1);}
		if(board[0][1]==2 && board[2][1]==2){PaintCircleCell(1, 1);}
		if(board[0][2]==2 && board[1][2]==2){PaintCircleCell(2, 2);}
		if(board[1][2]==2 && board[2][2]==2){PaintCircleCell(0, 2);}
		if(board[0][2]==2 && board[2][2]==2){PaintCircleCell(1, 2);}
		if(board[0][0]==2 && board[1][1]==2){PaintCircleCell(2, 2);}
		if(board[1][1]==2 && board[2][2]==2){PaintCircleCell(0, 0);}
		if(board[0][0]==2 && board[2][2]==2){PaintCircleCell(1, 1);}
		if(board[0][2]==2 && board[1][1]==2){PaintCircleCell(2, 0);}
		if(board[1][1]==2 && board[2][0]==2){PaintCircleCell(0, 2);}
		if(board[0][2]==2 && board[2][0]==2){PaintCircleCell(1, 1);}


		if(board[0][0]==1 && board[0][1]==1){PaintCircleCell(0, 2);}
		if(board[0][1]==1 && board[0][2]==1){PaintCircleCell(0, 0);}
		if(board[0][0]==1 && board[0][2]==1){PaintCircleCell(0, 1);}

		if(board[1][0]==1 && board[1][1]==1){PaintCircleCell(1, 2);}
		if(board[1][1]==1 && board[1][2]==1){PaintCircleCell(1, 0);}
		if(board[1][0]==1 && board[1][2]==1){PaintCircleCell(1, 1);}

		if(board[2][0]==1 && board[2][1]==1){PaintCircleCell(2, 2);}
		if(board[2][1]==1 && board[2][2]==1){PaintCircleCell(2, 0);}
		if(board[2][0]==1 && board[2][2]==1){PaintCircleCell(2, 1);}

		if(board[0][0]==1 && board[1][0]==1){PaintCircleCell(2, 0);}
		if(board[1][0]==1 && board[2][0]==1){PaintCircleCell(0, 0);}
		if(board[0][0]==1 && board[2][0]==1){PaintCircleCell(1, 0);}

		if(board[0][1]==1 && board[1][1]==1){PaintCircleCell(2, 1);}
		if(board[1][1]==1 && board[2][1]==1){PaintCircleCell(0, 1);}
		if(board[0][1]==1 && board[2][1]==1){PaintCircleCell(1, 1);}

		if(board[0][2]==1 && board[1][2]==1){PaintCircleCell(2, 2);}
		if(board[1][2]==1 && board[2][2]==1){PaintCircleCell(0, 2);}
		if(board[0][2]==1 && board[2][2]==1){PaintCircleCell(1, 2);}

		if(board[0][0]==1 && board[1][1]==1){PaintCircleCell(2, 2);}
		if(board[1][1]==1 && board[2][2]==1){PaintCircleCell(0, 0);}
		if(board[0][0]==1 && board[2][2]==1){PaintCircleCell(1, 1);}

		if(board[0][2]==1 && board[1][1]==1){PaintCircleCell(2, 0);}
		if(board[1][1]==1 && board[2][0]==1){PaintCircleCell(0, 2);}
		if(board[0][2]==1 && board[2][0]==1){PaintCircleCell(1, 1);}

		

		CheckCell_true = false;
		while (CheckCell_true == false) {

		Celda_y=Math.round(Math.random()*2);
		Celda_x=Math.round(Math.random()*2);

			if(board[Celda_y][Celda_x] == 0){
				CheckCell_true = true;
				PaintCircleCell(Celda_y, Celda_x);
			}
		}
	}
	if(Tirada == 1){

		if(board[1][1]==0){PaintCircleCell(1, 1)}else{PaintCircleCell(0,0)};
	}	
}

function PaintCircleCell(y, x){
	if(turno == 1){

		if(board[y][x] == 0){
			cell = document.getElementById("c"+y+x);
			cell.innerHTML = content_circle;
			board[y][x] = 2;
			Tirada++;
			turno = 0;
		}
		check_circle_end();
	}
	width_progress();
	chekcButtom();
	}

function PaintCrossCell(y, x){
	if(turno == 0){

		if(board[y][x] == 0){

			cell = document.getElementById("c"+y+x);
			cell.innerHTML = content_cruz;
			board[y][x] = 1;
			Tirada++;
			turno = 1;
		}
		if(board[0][0]==1 && board[0][1]==1 && board[0][2]==1
			|| board[1][0]==1 && board[1][1]==1 && board[1][2]==1
			|| board[2][0]==1 && board[2][1]==1 && board[2][2]==1
			|| board[0][0]==1 && board[1][0]==1 && board[2][0]==1
			|| board[0][1]==1 && board[1][1]==1 && board[2][1]==1
			|| board[0][2]==1 && board[1][2]==1 && board[2][2]==1
			|| board[0][0]==1 && board[1][1]==1 && board[2][2]==1
			|| board[0][2]==1 && board[1][1]==1 && board[2][0]==1){

			turno = 0;
			MENSAJE.style.display = "block";
			RESULTADO.innerHTML = "Tres en Raya. Gana X!!";
			CIRCULO.style.display = "none";
			EQUIX.style.display = "block";
			EQUIX.classList.add('game');
		}
	}else if (turno == 1) {
		if(board[y][x] == 0){

			cell = document.getElementById("c"+y+x);
			cell.innerHTML = content_circle;
			board[y][x] = 2;
			Tirada++;
			turno = 0;
		}
		check_circle_end();

	}
	chekcButtom();

}
function check_circle_end () {
	if(board[0][0]==2 && board[0][1]==2 && board[0][2]==2
		|| board[1][0]==2 && board[1][1]==2 && board[1][2]==2
		|| board[2][0]==2 && board[2][1]==2 && board[2][2]==2
		|| board[0][0]==2 && board[1][0]==2 && board[2][0]==2
		|| board[0][1]==2 && board[1][1]==2 && board[2][1]==2
		|| board[0][2]==2 && board[1][2]==2 && board[2][2]==2
		|| board[0][0]==2 && board[1][1]==2 && board[2][2]==2
		|| board[0][2]==2 && board[1][1]==2 && board[2][0]==2){

		MENSAJE.style.display = "block";
		RESULTADO.innerHTML = "Tres en Raya. Gana O!!";
		EQUIX.style.display = "none";
		CIRCULO.style.display = "block";
		CIRCULO.classList.add('games');
	}
}
function chekcButtom() {
	if(turno==0){
		botonX.style.borderBottom = "3px solid #400000";
		botonO.style.borderBottom = "0px solid #400000";
		botonO.style.transform = "scale(1)";
		botonX.style.transform = "scale(1.1)";
	}else if (turno==1) {
		botonX.style.borderBottom = "0px solid #400000";
		botonO.style.borderBottom = "3px solid #400000";
		botonO.style.transform = "scale(1)";
		botonX.style.transform = "scale(1.1)";
	}
}

