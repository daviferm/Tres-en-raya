

function ClearBoard(){
	for (i=0; i<3; i++){
		for (j=0; j<3; j++){
			board[i][j] = 0;

			botonX.style.borderBottom = "4px solid #400000";
			botonO.style.borderBottom = "0px solid #400000";
			botonO.style.transform = "scale(1)";
			botonX.style.transform = "scale(1.2)";
			cell = document.getElementById("c"+i+j).innerHTML = "";
			Tirada = 0;
			obtions = 9;
			game = true;
			document.getElementById("number_obt").innerHTML = obtions;
			width_scroll = 0;
			document.getElementById("progreso").style.width = "5%";
		}
	}
}

function CheckCell(y, x){
	if(Tirada < max_Tirada){

	switch (Tirada) {
		case (0):
			PaintCrossCell(y, x);
			checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();			
			break;
		case (1):
			botonX.style.borderBottom = "4px solid #400000";
			botonO.style.borderBottom = "0px solid #400000";
			botonO.style.transform = "scale(1)";
			botonX.style.transform = "scale(1.2)";
			PaintCircleCell(y, x);
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (2):
			PaintCrossCell(y, x);
			checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (4):
			PaintCrossCell(y, x);
			checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress();
			break;
		case (6):
			PaintCrossCell(y, x);
			checkCell_O();
			Chedk_obtions();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress()
			break;
		case (8):
			PaintCrossCell(y, x);
			Chedk_obtions();
			Check_Game();
			if(game == true){
				checkCell_O_end();
			}
			Check_Game();
			document.getElementById("number_obt").innerHTML = obtions;
			width_progress()
			break;
		default:

			break;
		}
	}else {
		document.getElementById("mensaje").style.display = "block";
		document.getElementById("resultado").innerHTML = "Partida en tablas!!";
		document.getElementById("caja_circulo").style.display = "block";
		document.getElementById("caja_equix").style.display = "block";
	}
}
function width_progress(){
	width_scroll = ((obtions_total - obtions) * (scroll_total / 9));
	document.getElementById("progreso").style.width = width_scroll + "px";
	console.log(width_scroll); 
}

function Chedk_obtions(){
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
	console.log(obtions);
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

	document.getElementById("mensaje").style.display = "block";
	document.getElementById("resultado").innerHTML = "Partida en tablas!!";
	document.getElementById("caja_equix").style.left = "35%";
	document.getElementById("caja_circulo").style.left = "50%";
	document.getElementById("caja_circulo").style.display = "block";
	document.getElementById("caja_equix").style.display = "block";
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
	if(Tirada == 1 ){
	
	if(board[0][0]==0){PaintCircleCell(0, 0)};
	
	
		CheckCell_true = false;
		while (CheckCell_true == false) {

		Cell_y=Math.round(Math.random()*2);
		Cell_x=Math.round(Math.random()*2);

		if(board[Cell_y][Cell_x] == 0){
			CheckCell_true = true;
			PaintCircleCell(Cell_y, Cell_x);
			}
		}
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

			
	CheckCell_tru = false;
		while (CheckCell_tru == false) {

		Celda_y=Math.round(Math.random()*2);
		Celda_x=Math.round(Math.random()*2);

		if(board[Celda_y][Celda_x] == 0){
			CheckCell_tru = true;
			PaintCircleCell(Celda_y, Celda_x);
		}
		}
		}
	
	
	console.log("Tirada: "+ Tirada);
}

function PaintCircleCell(y, x){
	if(turno == 1){

	if(board[y][x] == 0){
		cell = document.getElementById("c"+y+x);
		cell.innerHTML = "<img src='Circulo.gif'></img>";
		board[y][x] = 2;
		Tirada++;
		turno = 0;
	}
	if(board[0][0]==2 && board[0][1]==2 && board[0][2]==2
		|| board[1][0]==2 && board[1][1]==2 && board[1][2]==2
		|| board[2][0]==2 && board[2][1]==2 && board[2][2]==2
		|| board[0][0]==2 && board[1][0]==2 && board[2][0]==2
		|| board[0][1]==2 && board[1][1]==2 && board[2][1]==2
		|| board[0][2]==2 && board[1][2]==2 && board[2][2]==2
		|| board[0][0]==2 && board[1][1]==2 && board[2][2]==2
		|| board[0][2]==2 && board[1][1]==2 && board[2][0]==2){

	document.getElementById("mensaje").style.display = "block";
	document.getElementById("resultado").innerHTML = "Tres en Raya. Gana O!!";
	document.getElementById("caja_equix").style.display = "none";
	document.getElementById("caja_circulo").style.left = "40%";
	document.getElementById("caja_circulo").style.display = "block";

	}
	}
	
}

function PaintCrossCell(y, x){
	if(turno == 0){

	if(board[y][x] == 0){
		cell = document.getElementById("c"+y+x);
		cell.innerHTML = "<img src='Equix.gif'></img>";
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
	document.getElementById("mensaje").style.display = "block";
	document.getElementById("resultado").innerHTML = "Tres en Raya. Gana X!!";
	document.getElementById("caja_circulo").style.display = "none";
	document.getElementById("caja_equix").style.left = "42%";
	document.getElementById("caja_equix").style.display = "block";

	}	
	}
	botonX.style.borderBottom = "4px solid #400000";
	botonO.style.borderBottom = "0px solid #400000";
	botonO.style.transform = "scale(1)";
	botonX.style.transform = "scale(1.2)";

}






