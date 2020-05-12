let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/20091007_Koi_Fish_Shanghai_7301.jpg/800px-20091007_Koi_Fish_Shanghai_7301.jpg');
}

function setup() {
	var myCanvas = createCanvas(800, 532);
	myCanvas.parent('pointillize');
	smallPoint = 4; // Tamaño minimo elipse
	largePoint = 30; // Tamaño maximo elipse
	background(210);
	img.loadPixels();
}

function draw() {
	img.loadPixels();	
	// Imagen miniatura
	image(img, img.width-img.width / 4, 0, img.width / 4, img.height / 4);
	
	// Tamaño de la elipse segun las posicion X del mouse
	let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
	// Posicion aleatoria para escoger un pixel
	let x = floor(random(img.width));
	let y = floor(random(img.height));

	let index = (x+y*width)*4; // Posicion del pixel
	let r=img.pixels[index+0]; // Componente Red
	let g=img.pixels[index+1]; // Componente Green
	let b=img.pixels[index+2]; // Componente Blue
	let a=img.pixels[index+3]; // Componente Alpha

	noStroke();
	fill(r,g,b,a); // Color de la elipse segun el color del pixel
	ellipse(x, y, pointillize, pointillize);
}
