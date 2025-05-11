import api from '../helpers/wp_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';
import { Post } from './Post.js';


export async function Router(){
    //Aca vamos a tener toda la invocacion de las peticiones a la API
    const d = document;
    const w = window;
    const $main = d.getElementById("main");

    let {hash} = location;
    // console.log(hash);

    $main.innerHTML = null; //Limpiamos el contenedor de posts para que no se repitan los posts al cambiar de hash

    if(!hash || hash === "#/"){
            await ajax({
                    url: api.POSTS,
                    cbSuccess: (posts) =>{
                    // console.log(posts);
                    let html = "";
                    posts.forEach(post => {html += PostCard(post)});
                    // d.querySelector(".loader").style.display = "none";<---- Funciona pero es mala practica
                    $main.innerHTML = html;
        }
    });

    }else if(hash.includes("#/search")){
        $main.innerHTML = `<h2>Seccion del Buscador</h2>`;
        // d.querySelector(".loader").style.display = "none"; <---- Funciona pero es mala practica
    }else if(hash === "#/contacto"){
        $main.innerHTML = `<h2>Seccion de Contacto</h2>`;
        // d.querySelector(".loader").style.display = "none";<---- Funciona pero es mala practica
    }else{
        // $main.innerHTML = `<h2>Aqui Cargara el contenido del Post Previamente seleccionado</h2>`;
        // d.querySelector(".loader").style.display = "none";<---- Funciona pero es mala practica
        // console.log(`${api.POSTS}/${localStorage.getItem("wpPostId")}`);

        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) =>{
                // console.log(post);
                $main.innerHTML = Post(post); //Aca estoy llamando a la funcion post, que me devuelve un h1 y lo agregamos al root
            }
        });
    }

    d.querySelector(".loader").style.display = "none";
}