import {Title} from './components/Title.js';
import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';


export function App(){
    const d = document;
    const $root = d.getElementById("root");
    
    $root.innerHTML = null; //Limpiamos el contenedor root para que no se repita el contenido al cambiar de hash

    $root.appendChild(Header()); //Aca estoy llamando a la funcion title, que me devuelve un h1 y lo agregamos al root
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router(); //Aca llamo a la funcion router, que es la que va a manejar las peticiones a la API y el enrutamiento de la SPA

}
