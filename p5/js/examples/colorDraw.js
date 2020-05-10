let strokeLine = 5; // Variable para definir el grosor de la linea
// Variables para definir el color de la linea
let r = 0;
let g = 0;
let b = 0;

function setup() { 
  var myCanvas = createCanvas(windowWidth-300, 400);
  myCanvas.parent('colorDraw');
  windowResized();
  // Crea un nuevo lienzo dentro de la pantalla
  pg = createGraphics(500, 350);
  pg.background(255);
} 

function draw() {
	// Ejecuta el metodo touchMoved() cada vez que se presiona el click del mouse
	if (mouseIsPressed) {
		touchMoved();
	}
	//imageMode(CENTER);
	// Dibuja el bufer offscree en la pantalla con image()
	image(pg, width/2-250,height/2-175);
}

function touchMoved() { 
  pg.strokeWeight(strokeLine); // Grosor de la linea
  pg.stroke(r,g,b); // Color de la linea
  // Dibuja una linea en las cordenadas del mouse
  pg.line(mouseX-width/2+250, mouseY-height/2+175, pmouseX-width/2+250, pmouseY-height/2+175);
  return false;
}
// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
  if (keyCode === RIGHT_ARROW) { // Aumenta el grosor de la linea
    strokeLine = strokeLine+2;
  } else if (keyCode === LEFT_ARROW) { // Disminuye el grosor de la linea
    strokeLine = abs(strokeLine-2);
  } // Cambia el color de la linea
	else if (key === 'w' || key === 'W') { // Blanco
    r = 255;
    g = 255;
    b = 255;
  } else if (key === 'k' || key === 'K') { // Negro
    r = 0;
    g = 0;
    b = 0;
  } else if (key === 'r' || key === 'R') { // Rojo
    r = 255;
    g = 0;
    b = 0;
  } else if (key === 'g' || key === 'G') { // Verde
    r = 0;
    g = 255;
    b = 0;
  } else if (key === 'b' || key === 'B') { // Azul
    r = 0;
    g = 0;
    b = 255;
  } else if (key === 'm' || key === 'M') { // Magenta
    r = 255;
    g = 0;
    b = 255;
  } else if (key === 'y' || key === 'Y') { // Amarillo
    r = 255;
    g = 255;
    b = 0;
  } else if (key === 'c' || key === 'C') { // Cian
    r = 0;
    g = 255;
    b = 255;
  } else if (key === 'o' || key === 'O') { // Naranja
    r = 255;
    g = 128;
    b = 0;
  } else if (key === 'p' || key === 'P') { //Purpura
    r = 128;
    g = 0;
    b = 128;
  }
}
// Construye el canvas cada vez que se ajusta el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth-300, 400);
  background(210);
  // Crea un rectangulo para que sirva como lienzo, en el centro del canvas
  fill(255);
  strokeWeight(2);
  stroke(0);
  rectMode(CENTER);
  rect(width/2,height/2,500,350);
}