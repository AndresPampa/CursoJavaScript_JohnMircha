// ---------------------------------------------| Asincronia y Even loop |--------------------------------------------- //
// Procesamiento single thread y multi thread
// Operaciones de CPU y Operaciones de I(in)/O(out)
// Operaciones COncurrentes y Paralelas
// Operaciones Bloqueantes y No Bloqueantes
// Operaciones Sincronicas y Asincronicas

//JavaScript usa un modelo asincrono y no bloqueante con un loop de evento implementado en un solo hilo(single thread) para operaciones de entrada y salida(input/output)

// Codigo Sincrono Bloqueante
(() =>{
    console.log("Codigo Sincrono")
    console.log("Inicio")
    function dos(){
        console.log("dos")
    }
    function uno(){
        console.log("uno")
        dos();
        console.log("tres")
    }

    uno();
    console.log("fin")
})();


// Codigo Asincrono NO bloqueante
(() =>{
    console.log("Codigo Asincronica")
    console.log("Inicio")
    function dos(){
        setTimeout(()=>{
            console.log("dos")
        }, 1000);
    }
    function uno(){
        setTimeout(()=>{
            console.log("uno")
        },0)
        dos();
        console.log("tres")
    }

    uno();
    console.log("fin")
})();
