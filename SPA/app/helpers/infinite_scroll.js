import { PostCard } from "../components/PostCard.js";
import { SearhCard } from "../components/SearchCard.js";
import api from "../helpers/wp_api.js";
import { ajax } from "./ajax.js";

export async function infiniteScroll(){

    const d = document;
    const w = window;

    let query = localStorage.getItem("wpSearch");
    let apiURL;
    let Component; //High Order Component(HOC)


    w.addEventListener("scroll", async e =>{
        let {scrollTop, clientHeight, scrollHeight} = d.documentElement;
        let {hash} = w.location;

        // console.log(scrollTop, clientHeight, scrollHeight, hash);

        if(scrollTop + clientHeight >= scrollHeight){
            api.page++;

            if(!hash || hash === "#/"){
                apiURL = `${api.POSTS}&page=${api.page}`;
                Component = PostCard;
            }else if(hash.includes("#/search")){
                apiURL = `${api.POSTS}${query}&page=${api.page}`;
                Component = SearhCard;
            }else{
                return false;
            }

            d.querySelector(".loader").style.display = "block";
            
            await ajax({
                url:apiURL,
                cbSuccess: (posts) =>{
                    // console.log(posts);
                    let html = "";
                    posts.forEach((post) => (html += Component(post)));
                    d.getElementById("main").insertAdjacentHTML("beforeend", html);
                    d.querySelector(".loader").style.display = "none";
                }
        });

        }

    })




}