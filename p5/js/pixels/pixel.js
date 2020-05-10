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
			pixels[index+0]=y; //Red
			pixels[index+1]=0; //Green
			pixels[index+2]=x; //Blue
			pixels[index+3]=random(255); //Alpha
		}
	}
	updatePixels();
}

// Construye el canvas cada vez que se ajusta el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth-300, 400);
  background(210);
  pixelDensity();
}