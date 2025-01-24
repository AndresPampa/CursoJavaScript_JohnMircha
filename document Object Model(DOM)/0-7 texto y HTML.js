// ---------------------------------------------| Texto y HTML |--------------------------------------------- //
//

const $whatitsDOM = document.getElementById("que-es");

//Esto lo utiliza react
{/* <></> */}

let text =`
<p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
    API para documentos HTML y XML.
</p>
<p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>`;

//Fue creada para internet explorer. No reconoce las etiquetas HTML
// $whatitsDOM.innerText = text;

//Es el estandar --> no tiene en cuenta las indentaciones pero sigue sin interpretar las etiquetas html
$whatitsDOM.textContent = text; //Si es solo texto utilizar esta opcion

//Para que reconozca etiquetas HTML
$whatitsDOM.innerHTML = text; //Si quiero insertar codigo HTML utilizar esta opcion

$whatitsDOM.outerHTML = text; //Me crea los elementos separados












