function setup() { 
  var myCanvas = createCanvas(windowWidth-300, 400);
  myCanvas.parent('moveSquares');
  windowResized();
} 

function draw() {
  background(100);
  let inverseX = width-mouseX; // Posicion X contraria del mouse
  let inverseY = height-mouseY; // Posicion Y contraria del mouse
  //Alterna el orden de los rectangulos segun su tamaño
  if(mouseY<inverseY){
	fill(100,0,255,191); // Opacidad al 75%
	// Dibuja un rectangulo en la mitad del lienzo en la posicion X del mouse
	// El rectangugo aumenta su tamaño cuando Y aumenta y veceversa
	rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
	fill(255,0,100,191);
	// Dibuja un rectangulo invertido
	rect(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
  }else {
	// Dibuja un rectangulo invertido
	fill(255,0,100,191);
	rect(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
	// Dibuja un rectangulo en la mitad del lienzo en la posicion X del mouse
	fill(100,0,255,191);
	rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  }
  
}
// Construye el canvas cada vez que se ajusta el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth-300, 400);
  noStroke();
  rectMode(CENTER); // Cambia las coordenadas del rectangulo al centro
}