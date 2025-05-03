import api from './helpers/wp_api.js';
import {ajax} from './helpers/ajax.js'; //Utilizo la destructuracion porque no utilice la exportacion por default


export function App(){
    document.getElementById("root").innerHTML =`<h1>Bienvenidos a mi primer SPA con vanilla JS </h1>`;

    ajax({
        url:api.POSTS,
        cbSuccess: json => {
            console.log(json);
        }
    });

    ajax({
        url: api.CATEGORIES,
        cbSuccess: json =>{
            console.log(json);
        }
    })
}

console.log(api);