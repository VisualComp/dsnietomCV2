var lienzo_01;
var lienzo_02;
var img_01;
var img_02;
let opposite = 0;
let sign = -1;

function setup() {
    var myCanvas = createCanvas(1024, 512);
    myCanvas.parent('complementary');

    img_01 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    img_02 = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png');
    
    lienzo_01 = createGraphics(512, 512);
    lienzo_02 = createGraphics(512, 512);
}

function draw() {
    drawImage_01();
    drawImage_02();

    image(lienzo_01, 0, 0);
    image(lienzo_02, 512, 0);
}
// Dibuja la imagen de la Izquierda
function drawImage_01() {
	lienzo_01.image(img_01, 0, 0);
    var title = "IMAGEN ORIGINAL";
	
	lienzo_01.textSize(14);
	lienzo_01.textAlign(CENTER);
    lienzo_01.text(title, 0, 20,lienzo_01.width); 
}
// Dibuja la imagen de la Derecha
function drawImage_02() {
    var title = "OPRIMA LAS TECLAS '->' o '<-' DEL TECLADO";
	
	lienzo_02.textSize(14);
	lienzo_02.textAlign(CENTER);
    lienzo_02.text(title, 0, 20,lienzo_02.width);
    
	loadPixels();
	img_02.loadPixels();
	let img = createImage(512, 512);
	img.loadPixels();
    
	for (let index = 0; index < 4 * (width * height); index += 4){ 
		
		//let index = (x+y*img_02.width)*4; // Posicion del pixel
		let r=img_02.pixels[index+0]; // Componente Red
		let g=img_02.pixels[index+1]; // Componente Green
		let b=img_02.pixels[index+2]; // Componente Blue
		let a=img_02.pixels[index+3]; // Componente Alpha
		
		img.pixels[index+0]=opposite-(sign)*r; // Se calcula el complemento del Rojo (255-r)
		img.pixels[index+1]=opposite-(sign)*g; // Se calcula el complemento del Verde (255-g)
		img.pixels[index+2]=opposite-(sign)*b; // Se calcula el complemento del Azul (255-b)
		img.pixels[index+3]=a;
	}
	img.updatePixels();
	image(img, 512, 0);
}
// Se ejecuta cuandp se presiona cualquier tecla
function keyPressed() {
	if (keyCode === RIGHT_ARROW) { // Colores complementarios
		opposite = 255;
		sign = 1;
	} else if (keyCode === LEFT_ARROW) { // Imagen original
		opposite = 0;
		sign = -1;
  }
}

