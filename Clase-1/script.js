//Comentarios
//funcionalidad - comportamiento 

//tipos : string(caracteres) - number(numeros) - booleans(booleanos : verdadero -falso -> true false)
// palabras reservadas : undefined(indefinido) - null (nulo) - NaN(not a number)

//strings -> comillas : " ", ' ', ` `.
// "Juan"
// 'una pequeña oracion...'
// `fjhdfhilu
// ${undefined}
// 9489rehjh `

//number -> numeros

33245 
33.5// 33 coma 5
33,5// dos numeros distintos: 33 y el 5

NaN //Not a Number -> 

"hola"-5// resultado NaN 

//booleans - booleanos
true 
false

//variables -> espacios de memoria para almacenar datos..

//definimos -> res nombre=valor; : var - let -const

let nombre_persona="Juan";

const valor=444;
//utilizamos

//modificar el contenido

nombre_persona=true;

//valor="hola";nos tira error ya que al definirlo como const no permite cambiar el contenido

console.log(nombre_persona);

//operadores : Aritmeticos ,Comparacion ,Logicos
//Aritmeticos: +-*/ -> +(suma matematica o concatenacion)

"3hola3"/22;


//Comparacion -> true /false -> > < >= <= === == != !==

//length -> largo (strings cantidad de caracteres)
//true ->1 false -> 0 
//>< <= >= -> comparar numeros 
//igualdad y desigualdad ==, != (compara solo valores) | ===, !== (compara valor y tipo )

//"hola" -> "h","o","l","a" -> 4


console.log("33" !== 33)

//Logicos -> comparan operaciones : booleanoes (true o false)
//&&(and - 'y' -> necesita que sus operaciones den true para devolver true)
//||(or, "o" -> con que alguna de true nos devuelve el valor true )
//!(not o 'no' -> nos devuelve el inverso )

//      true                         &&  false                       -> false
//contraseña === constraseñaRegistrada && usuario === usuarioRegistrado 

let edad=15;
let adultoResp=true

//  false || false               -> false
edad>16 || adultoResp == true

//                                  !    false -> true
//!undefined -> ! -> lo opuesto -> !(operacion)

//condicionales -> if/else/op.ternario / switch;

//operador ternario

//sintaxis: condicion ? accion-true :accion-false;


edad>16 || adultoResp == true ? console.log("vendemos la entrada"): console.log("no podemos venderle entrada");

//if/else

//sintaxis ->
// if(condicion){
//  accion/es
//}else{
//     accion/es
// }

// if(producto == "liquidacion"){
//     console.log("aplico descuentos..")
// };

if(edad>16 || adultoResp == true){
    console.log("vendemos la entrada")
}else{
    console.log("no podemos venderle entrada")
};


//funciones -> conjunto de instrucciones 

//tradicionales - funciones flechas (arrow functions)
//definimos - creamos - declarar

//tradicionales -> function nombre(params){acciones...};

function saludar(){

    alert("HOLA!!! funcion saludar")
};

function promedio2num(num1,num2){
    let suma =num1+num2;

    return suma/2

}

//funciones flechas -> const nombre=(params)=>{acciones...};

const saludar2=(num1,num2)=>{
    let suma =num1+num2;
    suma/2
    alert("HOLA!!! funcion saludar2")
}

//ejecutamos - invocar

//console.log(saludar2(33,44))

let resultado=promedio2num(33,44);

//bucles -> iteracion de una accion for/while/do while/for of / forEach/map/find/filter
//for(inicial;condicion;accionxcadavuelta){acciones se repiten}
//for(ref of array){acciones se repiten}
//while(condicion){acciones que se repiten}
//do{acciones que se repiten}while(condicion)
//array.forEach((ref)=>{accionres x cada item})
//array.map((ref)=>{accionres x cada item})
//array.filter((ref)=>{comparacion})
//array.find((ref)=>{comparacion})

//array -> listas -> [],separan cada item con una coma (,)
//metodos ->push(),unshift(),shift(),pop(),spice(),slice()

//objetos -> descripcion de un ente ,de algp

//{}-> propiedad:valor separando cada par de propiedad/valor con una coma

let remera={
    color:["azul","rosa"],
    precio:2000,
    descuento:false
}
let lista=[remera,true,"dato..",333];

let alumno1={
    nombre:"Juan",
    apellido:"Perez",
    edad:33
}

let alumnos=[alumno1,"Pedro"];
