// ---------------------------------------------| Objetos: URL, Historial y Navegador  |--------------------------------------------- //
// Objetos: URL, Historial y Navegador

//Window.location
// console.log("**************OBJETO URL**************");
// console.log(location);
// console.log(location.origin); //La ruta origen de la cual se origina --> Live server*
// console.log(location.protocol); //http: -> el protocolo
// console.log(location.host); // 127.0.0.1:5500
// console.log(location.hostname); // 127.0.0.1
// console.log(location.port); // 5500
// console.log(location.href); // http://127.0.0.1:5500/document%20Object%20Model(DOM)/dom.html
// console.log(location.hash); // Detecta el valor de la url que esta despues de un hash -> #
// console.log(location.pathname); //document%20Object%20Model(DOM)/dom.html
// console.log(location.search); //Nos da los parametros que pasamos por la URL
// // location.reload() //recarga la pagina


// console.log("**************Objeto History(historial)**************");
// console.log(history);
// console.log(history.length); //Cuantas paginas hemos visitado
// console.log(history.back(1)); //vamos para atras la cantidad de paginas para atras
// console.log(history.forward(1)); //vamos a la pagina de adelante 
// console.log(history.go(3)); //Aca podemos escribir -1 para una pagina hacia atras y numeros positivos para paginas adelante



console.log("**************Objeto Navigator(navegador)**************");
console.log(navigator); 
console.log(navigator.connection); //Nos da cierta informacion de la coneccion del usuario
console.log(navigator.geolocation); //Api de geolocalizacion del usuario
console.log(navigator.mediaDevices); //Son los dispositivos como camaras y microfonos
console.log(navigator.mimeTypes); //Tipos de formatos que dependiendo del tipo de aplicacion soportan los navegaores
console.log(navigator.onLine); //El usuario esta en linea o pierda la conexion
console.log(navigator.serviceWorker); //Api que nos ayuda a hacer progresive web app
console.log(navigator.storage); //api de almacenamiento ya sea local storage o web storage
console.log(navigator.usb); //capacidad de detectar dispositivos USB
console.log(navigator.userAgent); //Nos da mucha informacion del usuario y su navegador que se esta conectando a la aplicacion

