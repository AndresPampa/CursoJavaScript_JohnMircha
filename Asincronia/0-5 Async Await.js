// ---------------------------------------------| Async Await |--------------------------------------------- //
//Funciones asincronas que van a esperar a que algo se cumpla para poder ejecutar su proceso
//No reemplazan las promesas, trabajan en conjunto

function cuadradoPromise(value){
    if(typeof value !== "number") return Promise.reject(`Error el valor ingresado = ${value} no es un numero`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                value: value,
                result: value*value
            });
        }, 0 | Math.random()*1000)
    });
    
}


async function funcionAsincronaDeclarada(){
    try{
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log("Fin Async-Await");
    }catch(err){
        console.error(err);
    }
}


funcionAsincronaDeclarada();

//Funcion asincrona expresada
const funcionAsincronaExpresada = async () =>{
    try{
        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log("Fin Async-Await");
    }catch(err){
        console.error(err);
    }
}


funcionAsincronaExpresada();
