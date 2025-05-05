import api from './helpers/wp_api.js';
import {ajax} from './helpers/ajax.js'; //Utilizo la destructuracion porque no utilice la exportacion por default
import {Title} from './components/Title.js';
import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Posts } from './components/Posts.js';
import { PostCard } from './components/PostCard.js';


export function App(){
    const d = document;
    const $root = d.getElementById("root");
    
    $root.appendChild(Header()); //Aca estoy llamando a la funcion title, que me devuelve un h1 y lo agregamos al root
    $root.appendChild(Posts());
    $root.appendChild(Loader());

    ajax({
        url: api.POSTS,
        cbSuccess: (posts) =>{
            console.log(posts);

            let html = "";
            posts.forEach(post => {html += PostCard(post)});
            d.querySelector(".loader").computedStyleMap.display = "none";
            d.getElementById("posts").innerHTML = html;
        }
    })

    //Prueba de error
    // ajax({
    //     url: "tuviejaentanga",
    //     cbSuccess: (post) =>{
    //         console.log(post);
    //     }
    // })
}
