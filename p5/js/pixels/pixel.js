let r = 1;
let g = 1;
let b = 1;
let a = 1;

function setup() { 
  var myCanvas = createCanvas(windowWidth-300, 400);
  myCanvas.parent('pixel');
  windowResized();
} 

function draw() {
	loadPixels();
	// Modifica cada pixel del canvas
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++){
			let index = (x+y*width)*4; // Posicion del pixel
			pixels[index+0]=(y)*r; //Red
			pixels[index+1]=(y-x)*g; //Green
			pixels[index+2]=(x)*b; //Blue
			pixels[index+3]=random(255)*a; //Alpha
		}
	}
	updatePixels();
}

function keyPressed() {
  if (key === 'r') { // Extrae el comoponente rojo
    r = 0;
  } else if (key === 'g') { // Extrae el comoponente verde
    g = 0;
  } else if (key === 'b') { // Extrae el comoponente azul
    b = 0;
  } else if (key === 'a') { // Extrae el comoponente alfa
    a = 0;
  } else if (key === 'R') { // Agrega el comoponente rojo
    r = 1;
  } else if (key === 'G') { // Agrega el comoponente verde
    g = 1;
  } else if (key === 'B') { // Agrega el comoponente azul
    b = 1;
  } else if (key === 'A') { // Agrega el comoponente alfa
    a = 1;
  }
}

// Construye el canvas cada vez que se ajusta el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth-300, 400);
  background(210);
  pixelDensity();
}