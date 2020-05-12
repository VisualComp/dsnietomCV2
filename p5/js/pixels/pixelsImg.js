let rSlider, gSlider, bSlider;
let img; // Declarar variable 'img'

function setup() {
  // crear lienzo
  createCanvas(800, 600);
  //myCanvas.parent('pixelsImg');
  textSize(14);
  noStroke();

  // crear barras deslizantes
  rSlider = createSlider(-128, 384, 128);
  rSlider.position(20, 20);
  gSlider = createSlider(-128, 384, 128);
  gSlider.position(20, 50);
  bSlider = createSlider(-128, 384, 128);
  bSlider.position(20, 80);
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Red_eyed_tree_frog_edit2.jpg/800px-Red_eyed_tree_frog_edit2.jpg'); 
}

function draw() {
  const R = rSlider.value();
  const G = gSlider.value();
  const B = bSlider.value();
  loadPixels();
  img.loadPixels();
  
  for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++){ 
			let index = (x+y*width)*4; // Posicion del pixel
            let r=img.pixels[index+0]; // Componente Red
            let g=img.pixels[index+1]; // Componente Green
            let b=img.pixels[index+2]; // Componente Blue
            let a=img.pixels[index+3]; // Componente Alpha
			            
			pixels[index+0]=r+R-128;
			pixels[index+1]=g+G-128;
			pixels[index+2]=b+B-128;
			pixels[index+3]=a;
		}
	}
  updatePixels();	
  
  stroke(255);
  textStyle(BOLDITALIC);
  text('RED', 175, 40);
  text('GREEN', 175, 70);
  text('BLUE', 175, 100);
}
