//setTimeOut
//emular asincronismo en js
//es una funcion que admite dos parámetros
//1er valor: callback - un valor expresado en milisegundos

//setTimeout(function() {}, 3000 => 3seg)

setTimeout(function() {
    console.log("Hola desde el pasado")
}, 3000);

/***************************************************/

//JS ASÍNCRONO NO ES BLOQUEANTE PARA LO QUE SON NUESTRAS APLICACIONES

console.log("Hola mundo 1")

console.log("Hola mundo 2")

setTimeout(() => {
    console.log("Hola mundo 3")
}, 3000);

console.log("Hola mundo 4")