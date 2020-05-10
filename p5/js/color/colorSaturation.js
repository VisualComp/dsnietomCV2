const barWidth = 20;
let lastBar = -1;

function setup() { 
  var myCanvas = createCanvas(windowWidth-300, 400);
  myCanvas.parent('colorSaturation');
  windowResized();
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 66); // Asigna el color de reyeno segun la posicion Y del mouse
    noStroke();
	rect(barX, 0, barWidth, height); // Crea un rectangulo en la posicion X del mouse
	stroke(1);
	rect(width-barWidth*2, height-barWidth*2,barWidth,barWidth); // Crea un rectangulo en la esquina inferior derecha con el color de tinte
    lastBar = whichBar;
  }
}

// Construye el canvas cada vez que se ajusta el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth-300, 400);
  colorMode(HSB, width, height, 100); //Se cambia el modo del color a HSB
  background(210);
}