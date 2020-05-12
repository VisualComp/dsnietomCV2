let img; // Declarar variable 'img'
let lightness = 210; // Variable de ligereza
let gray=0;

function setup() { 
  var myCanvas = createCanvas(800, 588);
  myCanvas.parent('pixelsGray');
  background(210);
  pixelDensity();
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Fire_breathing_2_Luc_Viatour.jpg/800px-Fire_breathing_2_Luc_Viatour.jpg');
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
			
			if (gray===1){
				let I=(r+g+b)/3; // Promedio de los tres componentes
				lightness = I;
			} else if (gray===2){
				let V= max(r,g,b); // Componente mas grande de un color
				lightness = V;
			} else if (gray===3){
				let L=(max(r,g,b)+min(r,g,b))/2; // Promedio entre el componente mas grande y el mas pequeño
				lightness = L;
			}
			//let Y= 0.2989*r + 0.5870*g + 0.1140*b; // promedio ponderado de RGB con corrección gamma (Luma)
			            
			pixels[index+0]=lightness;
			pixels[index+1]=lightness;
			pixels[index+2]=lightness;
			pixels[index+3]=a;
			
			if (gray===0){ // Imagen original
				pixels[index+0]=r;
				pixels[index+1]=g;
				pixels[index+2]=b;
				pixels[index+3]=a;
			}
		}
	}
	updatePixels();
}

// Se ejecuta cuando se presiona cualquier tecla
function keyPressed() {
	if (key === '0') {
    gray = 0;
  } else if (key === '1') { 
    gray = 1;
  } else if (key === '2') {
    gray = 2;
  } else if (key === '3') {
    gray = 3;
  }
  
}