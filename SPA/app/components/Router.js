import api from '../helpers/wp_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';


export function Router(){
    //Aca vamos a tener toda la invocacion de las peticiones a la API
    const d = document;
    const w = window;
    const $posts = d.getElementById("posts");

    let {hash} = location;
    console.log(hash);

    $posts.innerHTML = null; //Limpiamos el contenedor de posts para que no se repitan los posts al cambiar de hash

    if(!hash || hash === "#/"){
            ajax({
                url: api.POSTS,
                cbSuccess: (posts) =>{
                // console.log(posts);
                let html = "";
                posts.forEach(post => {html += PostCard(post)});
                d.querySelector(".loader").computedStyleMap.display = "none";
                $posts.innerHTML = html;
        }
    });

    }else if(hash.includes("#/search")){
        $posts.innerHTML = `<h2>Seccion del Buscador</h2>`;
    }else if(hash === "#/contacto"){
        $posts.innerHTML = `<h2>Seccion de Contacto</h2>`;
    }else{
        $posts.innerHTML = `<h2>Aqui Cargara el contenido del Post Previamente seleccionado</h2>`;
    }
}