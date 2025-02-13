// ---------------------------------------------| Filtro de busquedas  |--------------------------------------------- //

const d = document;


export default function searchFilters(input, selector){
    d.addEventListener("keyup", e =>{
        if(e.target.matches(input)){
            // console.log(`El valor de la key es: ${e.key}`);
            // console.log(`El valor de e es : ${e.target.value}`)

            //Para apretar escape y limpiar el input
            if(e.key === "Escape") e.target.value = "";

            d.querySelectorAll(selector).forEach(el =>{
                // cada uno de los elementos tiene un contenido de texto que deberia matchear con lo que el usuario escribe
                //Ademas se lo pasamos a un operador ternario si ejecuta verdadero le agragamos la clase filter, si es falso se la sacamos
                // console.log(el.textContent)
                (el.textContent.toLowerCase().includes(e.target.value.toLowerCase())) 
                ? el.classList.remove("filter") 
                : el.classList.add("filter");
            });
        }
    });
}