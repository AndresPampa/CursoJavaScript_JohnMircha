export function PostCard(props){
    let {date, id, slug, title, _embedded} = props;

    let dateFormat = new Date(date).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";

    //No puedo asignar un evento a un elemento que no existe en el DOM.
    document.addEventListener("click", (e) =>{
        if(!e.target.matches(".post-card a")) return false; //Si no es un elemento que tenga la clase post-card y sea un link, no hace nada
        localStorage.setItem("wpPostId", e.target.dataset.id); //Guardo el id del post en el localStorage para luego poder usarlo en la peticion a la API
        // console.log(e.target.dataset.id);
    });

    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
            </p>
        </article>
    `;
}