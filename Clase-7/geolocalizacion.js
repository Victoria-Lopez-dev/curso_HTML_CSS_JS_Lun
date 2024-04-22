// API -> interfaz de programacion de aplicaciones
// conector entre servidor y un browser
// funciones mas complejas de una manera simple

// APIs incluidas HTML5 -> CANVAS ( interfas grafica) - Geolocalizacion y Drag&Drop
//APIs externas -> asincronia ( tema adicional del campus )


// Geolocalizacion ->ubicacion dispositivo del usuario
//siempre con el permiso del usuario.

const funcionOk=(position)=>{
    console.log("Se pudo ubicar" )
    console.log(position);

    //dentro del objeto position tenemos en coords la informacion sobre la ubicacion y en timestamp el tiempo que tardo en ubicarlo

    //longitude - latitude
    let texto=document.querySelector("p");
    texto.textContent="el usuario se ubica en las coordenadas "+ position.coords.latitude + " "+position.coords.longitude + " con una precision de " + position.coords.accuracy +" metros..."

};
const funcionError=(error)=>{
    console.log("no pudimos ubicarlo" );
    console.log(error);
    let texto=document.querySelector("p");
    if(error.code == 1){
        texto.textContent =" vimos que no nos permite ubicarlo y necesitamos dicho permiso por algo..."
    }
    if(error.code == 2){
        texto.textContent ="Por ciertos inconvenientes no logramos ubicarlo, vuelva a refrezcar la pagina "
    }
    if(error.code ==3){
        texto.textContent =" no tenemos el tiempo suficiente para ubicarlo.."
    }
    // objeto error : codigo y un mensaje tres codigos que nos puede devolver
    //1 -> usuario no nos dio permiso
    //2 -> no pudo ubicarlo
    //3 -> no hubo tiempo suficiente para ubicarlo
};
const objetoConfig={
    enableHighAccuracy:true,//booleano
    //timeout:3000,milisegundos
    //maximumAge -> tiempo en milisegundos de espera entre cada solicitud
};



navigator.geolocation.getCurrentPosition(funcionOk,funcionError,objetoConfig);


