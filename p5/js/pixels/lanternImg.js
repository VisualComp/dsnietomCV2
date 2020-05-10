let img; // Declarar variable 'img'

function setup() { 
  var myCanvas = createCanvas(1024, 638);
  myCanvas.parent('lanternImg');
  background(210);
  pixelDensity();
  img = loadImage('https://live.staticflickr.com/1512/26690052576_7b62e59221_b.jpg');
} 

function draw() {

	loadPixels();
    img.loadPixels();
   
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++){ 
			let index = (x+y*width)*4; // Posicion del pixel
            let r=img.pixels[index+0]; // Componente Red
            let g=img.pixels[index+1]; // Componente Green
            let b=img.pixels[index+2]; // Componente Blue
            let a=img.pixels[index+3]; // Componente Alpha
            let d=dist(mouseX,mouseY,x,y); // Distancia entre la posicion del mouse y el punto (x,y)
			let factor=map(d,0,150,2,0); // Escala el valor de d en losvalores de 0-150 a 2-0 
			
			pixels[index+0]=r*factor;
			pixels[index+1]=g*factor;
			pixels[index+2]=b*factor;
			pixels[index+3]=a;
		}
	}
	updatePixels();
}