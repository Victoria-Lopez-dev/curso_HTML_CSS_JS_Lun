//API incluida en HTML5 -> Drag & Drop 
// "arrastrar" elementos en nuestro proyecto

//atributo -> "arrastrables"
// arrastrables por defecto -> <a> <img>

//para hacer arrastrable un elemento que no lo es -> atributo draggable (valor booleans) , valor "true" para hacerlo arrastrable


//eventos: atributo en el HTML on+evento="funcion()";
//nodo.addEventListener('evento',funcion) 

//eventos -> (7 eventos) entre 3 -4 eventos para que funcione.
//dragstart - dragend - drag - dragenter - dragleave - dragover- drop

// 2 secciones
// elemento a arrastrar
//dragstart(apenas inicial el arrastre) - dragend (cuando suelto el elemento arrastrado - sin importar donde)- drag(se ejecuta mientras lo tenga arrastrando al elemento)

//objeto -> dataTransfer , vive en los eventos del drag&drop
//guarda info de texto
//metodos de dataTransfer : setData(tipo,data) - getData(tipo) - clearData(tipo)

//tipo : "Text" - "URL" -"text/plain" -"text/html"-"text/uri-list"

const funcionInicio=(evento)=>{
    console.log("se inicio el arrastre del cohete");
    //console.dir(evento.target);
 

    evento.dataTransfer.setData("Text",evento.target.src)
}



//<img ondrag="funcionDrag()"/>
// const funcionDrag=()=>{
//     console.log("Se esta ejecutando el drag")
// }



// la zona destino
//dragenter(ejecuta cuando estamos con un elemento arrastrable sobre esta zona destino) - dragleave(similar al dragenter, pero se ejecuta cuando salimos de la zona destino con el elemento arrastrado) - dragover(evento como el drag, que se ejecuta siempre que tengamos el elemento arrastrable pulsado sobre la zona de destino + cuando suelto el elemento)- drop(evento que se ejecuta cuando suelte el elemento arrastrable sobre la zona destino)

// const funcionEntrada=()=>{
//     console.log("Se ejecuto el dragenter")
// }
//dragover y drop van juntos
const funcionDragover=(evento)=>{

    //metodo de los eventos para que no actue por defecto
    // preventDefault()
   evento.preventDefault();
};

const funcionDrop=(event)=>{
    console.log("Se solto el elemnto en  la zona destino");

   
// lo recomendable seria guardar la fuente de la imagen y reproducirla dentro de la etiqueta <img> que creemos con un innerHTML

let fuente= event.dataTransfer.getData("Text");
event.target.innerHTML=`<img src="${fuente}" />`
    document.querySelector("#cohete").style.display="none"
};






//------

//dragstart
const guardarTitulo=(event)=>{
    console.log(event.target.textContent)
    event.dataTransfer.setData("Text",event.target.textContent)
}

//drop
// const funcionDrop=(event)=>{
//    let data= event.dataTransfer.getData("Text");
//     console.log(data);
//     event.target.innerHTML=`<h1>${data}</h1>`

//     document.querySelector("h1").style.display="none"
// }

//si quiero arrastrar una imagen o documento que se encuentre por fuera del HTML
const funcionDrop2=(event)=>{
    let data = event.dataTransfer.files[0];//obtengo informacion de documentos que traigo de afuera del HTML
    console.dir(data)
    event.target.innerHTML=`<img src="./imagenes/img-pdf.png"/>
    <p>${data.name}</p>`
}

//-- resumen : 3 eventos de d&d :
// dragstart(elemento de arrastre - guardo en el dataTransfer)
// - dragover(elemento destino)
// - drop (elemento destino)


// comentar algo...

//comentar -> control+K y  control+C
//descomentar -> control+K y control+U