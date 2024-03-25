//DOM -> Document Object Model -> interfaz entre HTML y JS 


//nodos -> elementos HTML 
//metodos para acceder a nodos :
// getElementById()
// getElementsByClassName() *
// getElementsByTagName() *
//querySelector() -> me trae el primer nodo que cumple con ese selector
//querySelectorAll() *

//* -> nos trae un array con todo nodo/elemento HTML que cumple con esa clase|etiqueta|selector

let h1=document.getElementsByTagName("h1");
let h1bis=document.querySelector("h1");
//document -> HTML

// //window -> pagina 
// console.dir(h1)
// console.dir(h1bis)


let video2=document.querySelector("#video2");
console.dir(video2)
video2.muted=true;
console.dir(video2);
const mostrarDuracion=()=>{
    video2.duration//duracion segundos
    if(video2.duration <60){
        document.querySelector(".duracion").textContent="00:"+video2.duration.toFixed(0)

    }
};
setTimeout(()=>{       
     document.querySelector(".duracion").textContent="00:"+video2.duration.toFixed(0)
},2000);

//funcion para que nos permita mutear o reproducir el sonido
const mutear=(event)=>{
    video2.muted=!video2.muted
    if(video2.muted == false){
        event.target.textContent="SONIDO OFF"
    }else{
        event.target.textContent="SONIDO ON"
    }
    
}
//metodo JS -> setInterval()-> clearInterval()| setTimeout()

let mostrarTiempoActual;

const pausar=(event)=>{
    console.dir(event)
    //video como audio metodo pause()
    video2.pause()
    console.dir(video2)    
    clearInterval(mostrarTiempoActual)// pausar esa accion ciclica de actualizar los segundos del tiempo de reproduccion
}

function reproducir() {
    //video como audio metodo play()
    video2.play()
    mostrarTiempoActual=setInterval(()=>{
        document.querySelector(".actual").textContent="00:"+video2.currentTime.toFixed(0);
        console.log(video2.currentTime)
    },1000)
}
