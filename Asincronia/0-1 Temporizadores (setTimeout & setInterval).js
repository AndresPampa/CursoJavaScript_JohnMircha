// ---------------------------------------------| Temporizadores |--------------------------------------------- //

setTimeout(() =>{
    console.log("Ejecutando un setTimeOut, esto se ejecuta 1 sola vez");
}, 3000);

setInterval(()=>{
    console.log("Esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
}, 1000)

// Creamos un reloj
const reloj = setInterval(()=>{
    console.log(new Date().toLocaleTimeString());
}, 1000)

const temporizador = setTimeout(()=>{
    console.log("Esto no se imprime ya que el clearTimeout lo cancela antes del 1 seg")
},1000)


clearTimeout(temporizador);
clearInterval(reloj);
