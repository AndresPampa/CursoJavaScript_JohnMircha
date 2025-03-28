document.addEventListener("DOMContentLoaded", e=>{
    const includeHTML = (el, url) =>{

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", e =>{
            if(xhr.readyState !== 4)return;

            if(xhr.status >= 200 && xhr.status < 300){
                // El outer es como el inner pero reemplaza el elemento. en este cado el div
                el.outerHTML = xhr.responseText;
            }else{
                let message = xhr.statusText || 
                "Error al cargar el archivo, verifica que estes haciendo la peticion por HTTP o HTTPS";

                el.outerHTML = `<div class="error">${xhr.status}: ${message}</div>`;
            }
        })

        xhr.open("GET", url);
        xhr.setRequestHeader("Content-Type", "text/html; charset=UTF-8");
        xhr.send();

    }

    document.querySelectorAll("[data-include]")
    .forEach( el => includeHTML(el, el.getAttribute("data-include")));

});