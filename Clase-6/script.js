/*
Canvas -> API grafica

API -> Aplication Programming Interfase (Interfaz de Programacion de Aplicaciones)

-codigo de terceros o propio que nos brindan soluciones o funciones complejas de una manera simple.

- conectores entre servidor,base de datos y el cliente(navegador)

- API externas o incluidas al HTML5

-  API externas: Giphy - Formspree -Youtube Data API - etc....
para traerlas o utilizarlas en nuestros proyectos utilizamos "Asincronia"
- API incluidas en HTML5 : Canvas - Drag&Drop - Web Storage ...


CANVAS -> lienzo 
utiliza JS para ir indicando los trazos que tiene que dibujar.
Utiliza metodos(funciones) para crear los graficos

formas primitivas ->rectangulos y trazos 
*/

//DOM

let canvas=document.querySelector("canvas");//accedo a la etiqueta <canvas>

let lienzo=canvas.getContext("2d");//utilizar todas las propiedades y metodos para dibujar dentro del lienzo.

console.dir(lienzo)


/* Rectangulos */
/* colores de relleno o contorno (podemos utilizar cualquiera de las maneras de definir colores ):
-> fillStyle -> color de relleno
->strokeStyle -> color de contorno
*/ 

/* fillRect(x,y,width,height) | strokeRect() | clearRect()-> utilizado para las animaciones */
lienzo.fillStyle="#FF4467";
lienzo.strokeStyle="darkgoldenrod";
lienzo.lineWidth=3 //ancho del contorno
lienzo.fillRect(130,30,100,10);
lienzo.strokeRect(130,30,100,10);


lienzo.fillStyle="green";
lienzo.strokeRect(100,60,10,10);


/* Trazos  */
/* 
    inicio y fin del trazo  -> beginPath() | closePath()(si utilizo fill() no necesito el closePath()) ;
    moveTo(x,y) -> colocar el "lapiz"en una posicion;
    lineTo(x,y) -> coordenada final donde marcar la linea recta;
    arc(x,y,radio,ang. inicio,ang.final,direccion) -> curvas
    arcTo(x1,y1,x2,y2,radio)
    quadracticCurveTo(pcx,pcy,x,y)
    bezierCurveTo(pcx1,pcy1,pcx2,pcy2,x,y)

    como indica angulos Canvas? -> JS radianes 

   Math.PI /180 * grados -> obetener el valor de los angulos en da ridianes

   Math.PI -> 180grados   

*/

let deg45= Math.PI/180 * 45;


lienzo.strokeStyle="blue";
lienzo.lineWidth=2;

lienzo.beginPath();
lienzo.moveTo(50,50);
lienzo.lineTo(60,70);
lienzo.lineTo(100,70);
lienzo.lineTo(100,90);
//....
lienzo.stroke();//trazos contorno
lienzo.closePath();

//-------------------------

lienzo.beginPath();
lienzo.strokeStyle="red";

lienzo.moveTo(150,50);
lienzo.lineTo(60,70);
lienzo.arc(150,50,60,Math.PI,deg45,true);
lienzo.lineTo(160,70);

//....
 lienzo.stroke();//trazos contorno
// lienzo.closePath();
lienzo.fill()


lienzo.clearRect(20,20,150,50) //del mismo color que el fondo

;
lienzo.beginPath();
lienzo.moveTo(150,50)
lienzo.arcTo(10,10,150,150,50)
lienzo.stroke();
lienzo.closePath();

lienzo.strokeStyle="darkviolet"
lienzo.beginPath();
lienzo.moveTo(0,100);
lienzo.quadraticCurveTo(50,30,140,50);
lienzo.quadraticCurveTo(350,130,200,50);
lienzo.stroke();
lienzo.closePath();




lienzo.beginPath();
lienzo.strokeStyle="black"
lienzo.moveTo(50,20);
lienzo.bezierCurveTo(120,50,5,80,50,130)
lienzo.stroke();
lienzo.closePath();

/* texto:

font -> fuente tipografica
fillText(texto,x,y) -> texto con relleno
strokeText(texto,x,y) -> texto con contorno
*/

lienzo.beginPath();
lienzo.lineWidth=1;
lienzo.strokeStyle="darkblue"
lienzo.font="30px Arial";
lienzo.strokeText("HOLA!",160,150);
lienzo.closePath();

//--------
let valorX=160;


const armarPalabra=setInterval(()=>{
    lienzo.clearRect(0,0,300,50)
    lienzo.beginPath();
    lienzo.font="20px Franklin Gothic Medium";
    lienzo.fillText("chau",valorX,20);
    lienzo.closePath();  
    valorX=valorX+10;  
    console.log(valorX)
},1000);

const pausar=()=>{
    clearInterval(armarPalabra)
}


