let img;    // Almacena la primera captura
let resolution = 6; // Determina la resolucion del caracter

let lienzo01; //Lienzo donde se mostrara el codigo ascii
let lienzo02;   //Lienzo que mostrara el video original

const heightI = 512; //Define la altura de los lienzos
const widthI = 550; // Define la anchura de los lienzos

let letters = "@&$o%8#*+=-':. " ; //Cadena de caracteres ascii
let ascii=[];   //Almacena la cadena de caracteres

function preload() {

    img = createCapture(VIDEO);
    img_01 = createCapture(VIDEO);
}


function setup() {    

    var myCanvas = createCanvas(widthI*2 + 20, heightI);
    myCanvas.parent('asciiVideo');

    img_01.hide(); //Ocultan los videos por
    img.hide();

    background(255);

    lienzo01 = createGraphics(widthI, heightI);
    lienzo02 = createGraphics(widthI, heightI);
}


function draw(){

    lienzo01.textFont("Georgia", resolution + 4);
    lienzo01.background(255);

    calcArray();
    asciify();

    drawLienzo02();

    image(lienzo01, widthI + 10 ,0);
    image(lienzo02, 0, 0);
}


// Funciones diseñadas 



const calcArray = ()=>{ // Realiza el mapeo para almacenarlos en el array ascii

    for (let i = 0; i < 256; i++) {
        let index = int(map(i, 0, 256, 0, letters.length));
        ascii[i] = letters.charAt(index);
    }

    
}



const drawLienzo02 = ()=>{ // Diagrama el video en el lienzo 2
    lienzo02.image(img_01,0,0);
}


const asciify = ()=>{ // Diagrama los caracteres en e lienzo 1

  // since the text is just black and white, converting the image
  // to grayscale seems a little more accurate when calculating brightness
    img.loadPixels();

    // grab the color of every nth pixel in the image
    // and replace it with the character of similar brightness
    for (let y = 0; y < img.height; y += resolution) 
    {
        for (let x = 0; x < img.width; x += resolution) 
        {
            
            let index = (x+y*img.width)*4; // Posicion del pixel
            let r=img.pixels[index+0]; // Componente Red
            let g=img.pixels[index+1]; // Componente Green
            let b=img.pixels[index+2]; // Componente Blue
            let a=img.pixels[index+3]; // Componente Alpha
            
            lienzo01.text(ascii[int(brightness(color(r,g,b,a)))], x, y); // Dibuja los caracteres
        }
    }
}
