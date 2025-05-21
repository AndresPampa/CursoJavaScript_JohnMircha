import { App } from "./App.js";
import api from "./helpers/wp_api.js";

const d = document;

d.addEventListener("DOMContentLoaded", App); //No tengo que ponerle los parentesis porque eso significa invocacion instantanea, y no quiero eso, quiero que se ejecute cuando el DOM este cargado

window.addEventListener("hashchange", ()=>{
    api.page = 1; //Cada vez que cambie el hash, vuelvo a la pagina 1
    App();
});