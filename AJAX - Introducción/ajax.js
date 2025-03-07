//Funcion anonima autoejecutable
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