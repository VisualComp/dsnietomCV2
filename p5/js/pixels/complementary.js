var lienzo_01; // Lienzo imagen original
var lienzo_02; // Lienzo imagen invertida
var img_01;
var img_02;

let c =false;
let m =false;
let y =false;

function setup() {
    var myCanvas = createCanvas(772, 600);
    myCanvas.parent('complementary');

    img_01 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ara_macao_qtl1.jpg/386px-Ara_macao_qtl1.jpg');
    img_02 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ara_macao_qtl1.jpg/386px-Ara_macao_qtl1.jpg');
    
    lienzo_01 = createGraphics(386, 600);
	lienzo_02 = createGraphics(386, 600);
}

function draw() {
    drawImage_01();
    drawImage_02();

    image(lienzo_01, 0, 0);
    image(lienzo_02, 386, 0);
}
// Dibuja la imagen de la Izquierda
function drawImage_01() {
	lienzo_01.image(img_01, 0, 0);
    var title = "IMAGEN ORIGINAL";
	
	lienzo_01.textSize(14);
	lienzo_01.stroke(255);
	lienzo_01.textStyle(BOLDITALIC);
	lienzo_01.textAlign(CENTER);
    lienzo_01.text(title, 0, 20,lienzo_01.width); 
}
// Dibuja la imagen de la Derecha
function drawImage_02() {
    var title = "IMAGEN OPUESTA";
	
	lienzo_02.textSize(14);
	lienzo_02.stroke(255);
	lienzo_02.textStyle(BOLDITALIC);
	lienzo_02.textAlign(CENTER);
    lienzo_02.text(title, 0, 20,lienzo_02.width);
    
	loadPixels();
	img_02.loadPixels();
	let img = createImage(386, 600);
	img.loadPixels();
    
	for (let index = 0; index < 4 * (width * height); index += 4){ 
		
		//let index = (x+y*img_02.width)*4; // Posicion del pixel
		let r=img_02.pixels[index+0]; // Componente Red
		let g=img_02.pixels[index+1]; // Componente Green
		let b=img_02.pixels[index+2]; // Componente Blue
		let a=img_02.pixels[index+3]; // Componente Alpha

		if (c){
			img.pixels[index+0]=255-r; // Se calcula el opuesto del Rojo (cian)
		}else{
			img.pixels[index+0]=r;
		}
		if (m){
			img.pixels[index+1]=255-g; // Se calcula el opuesto del Verde (magenta)
		}else{
			img.pixels[index+1]=g;
		}
		if (y){
			img.pixels[index+2]=255-b; // Se calcula el opuesto del Azul (amarrillo)
		}else{
			img.pixels[index+2]=b;
		}		
		img.pixels[index+3]=a;
	}
	img.updatePixels();
	image(img, 386, 0);
}
// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
	if (key === '1') { // Colores complementarios
		c=true;
		m=true;
		y=true;
	} else if (key === '0') { // Imagen original
		c=false;
		m=false;
		y=false;
  } else if (key === 'r' || key === 'R') { // Complemento Rojo
		c=true;
  } else if (key === 'g' || key === 'G') { // Complemento Verde
		m=true;
  } else if (key === 'b' || key === 'B') { // Complemento Azul
		y=true;
  }
}