function setup() { 
  var myCanvas = createCanvas(windowWidth-300, 400);
  myCanvas.parent('pressedMouse');
  background(210);
} 

function draw() {	
  // Cambia el color de las elipses mientras este presionado el boton del mouse
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255,0,128);
  }
  // Dibuja una elipse en la posicion del mouse
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth-300, 400);
  background(210);
}