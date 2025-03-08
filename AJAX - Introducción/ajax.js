//Funcion anonima autoejecutable
//---------------------------------------------- | XMLHttpRequest | ----------------------------------------------
(() =>{
    //1 - Creamos una instancia de XMLHttpRequest 
    const xhr = new XMLHttpRequest();

    const $xhr = document.getElementById("xhr");
    //UN fragmento es un mecanismo especial del DOM que se crea y se le pueden agregar todos los elementos de manera dinamica
    const $fragment = document.createDocumentFragment();

    //2 - Asignamos el evento o manejo de los eventos
    xhr.addEventListener("readystatechange", (e)=>{
        if(xhr.readyState !== 4){
            return;
        }

        // console.log(xhr);

        //Validamos que la petision sea correcta
        if(xhr.status >= 200 && xhr.status < 300){
            // console.log(`Exito`);
            //aca viene la respuesta del metodo GET
            // console.log(xhr.responseText)

            //El metodo JSON tiene 2 metodos: parse y stringify
            //parse convierte un string a un objeto
            //stringify convierte un objeto a un string
            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -/- ${el.email} -/- ${el.phone}`;
                $fragment.appendChild($li);
            });

            //Le agregamos como hijo este fragmento al ol que tiene el id= xhr
            $xhr.appendChild($fragment);


        }else{
            // console.log(`Error`);
            //el objeto XMLHttpRequest tiene una propiedad statusText donde te devuelve el mensaje de error
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        // console.log("Este mensaje cargara de cualquier forma");
        
    });

    //3 - Abrimos la conexion o endpoint
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //Se pueden consumir apis de manera local

    //4 - Enviamos la peticion
    xhr.send();

})();

//----------------------------------------------| Fetch | ----------------------------------------------
(()=>{
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();

    //Funciona con apis internas y externas y devuelve una promesa
    //El metodo fetch recibe 2 parametros, el primero es la url y el segundo es un objeto con la configuracion
    fetch("https://jsonplaceholder.typicode.com/users", {
        method:"GET" //Por defecto es GET
    }).then(res =>{
        // console.log(res);
        return res.ok ? res.json() : Promise.reject(res);
    }).then(json =>{
        // console.log(json);
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -/- ${el.email} -/- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);

    }).catch(err =>{
        // console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    }).finally(()=>{
        // console.log("Esto se ejecuta siempre al final"); //El finally es opcional
    });


})();

//----------------------------------------------| Fetch con async await | ----------------------------------------------

(()=>{
    const $fetchAsync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/user");
            let json = await res.json();

            // console.log(json, res);
            
            //Manejamos el error
            if(res.ok === false) throw {status: res.status, statusText: res.statusText};

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -/- ${el.email} -/- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        }catch(err){
            console.log("Estoy en el catch: ",err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }finally{
            console.log("Esto se ejecuta siempre");
        }
        
    }

    getData();

})();