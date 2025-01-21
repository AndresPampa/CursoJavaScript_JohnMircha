// ---------------------------------------------| Promises |--------------------------------------------- //
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

cuadradoPromise(0)
    .then((obj)=>{
        console.log("Inicio Promise");
        console.log(`Promise ${obj.value}, ${obj.result}`)
        return cuadradoPromise(1);
    })
    .then(obj =>{
        console.log("Inicio Promise 2");
        console.log(`Promise ${obj.value}, ${obj.result}`)
        return cuadradoPromise(2);
    })
    .then(obj =>{
        console.log("Inicio Promise 3");
        console.log(`Promise ${obj.value}, ${obj.result}`)
        return cuadradoPromise(3);
    })
    .then(obj =>{
        console.log("Inicio Promise 4");
        console.log(`Promise ${obj.value}, ${obj.result}`)
        return cuadradoPromise(4);
    })
    .then(obj =>{
        console.log("FIN DE LAS PROMESAS");
        console.log(`Promise ${obj.value}, ${obj.result}`)
    })
    .catch(err => console.error(err));

//El metodo fetch ya utiliza promesas
//Firebase tambien trabaja con promesas