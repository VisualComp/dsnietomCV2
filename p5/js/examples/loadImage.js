let img; // Declarar variable 'img'.

function setup() {
  var myCanvas = createCanvas(windowWidth-300, 512);
  myCanvas.parent('loadImage');
  windowResized()
  img = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png'); // Cargar la imagen
}

function draw() {
  
  imageMode(CENTER);
  // Muestra la imagen en su tamaño original en la posición en el centro del canvas
  image(img, width / 2, img.height / 2);
  
  imageMode(CORNER);
  // Muestra la imagen en la posición (0,0) del canvas a la mitad del tamaño
  image(img, 0, 0, img.width / 2, img.height / 2);
  
  imageMode(CORNERS);
  // Muestra la imagen con su esquina inferior derecha en la posición (width, height)
  image(img, width/2+img.height/2, height/2, width, height);
  
  imageMode(CORNER);
  // Muestra la imagen pegada a la derecha de la imagen de tamaño real, a la mitad del tamaño
  image(img, width/2-img.height, height/2, img.width / 2, img.height / 2);
  
  imageMode(CENTER);
  // Muestra la imagen a la mitad del tamaño, moviendose de derecha a izquierda cuando se ajusta la pantalla
  image(img, width+height-((20000/width)*34), height/4, img.width / 2, img.height / 2);
  
  imageMode(CORNER);
  // Muestra la imagen en la posición (0,0) con respecto a la imagen de tamaño real, a 1/4 del tamaño
  image(img, width/2-img.height/2, 0, img.width / 4, img.width / 4);
  
  imageMode(CORNER);
  // Muestra la imagen a 1/4 del tamaño moviendose en diagonal
  image(img, (width/4+img.width/4)+((4000/width)*65), (height/2+img.height)-((6000/width)*65), img.width / 4, img.height / 4);
}
// Construye el canvas cada vez que se ajusta el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth-300, 512);
  background(210);
}