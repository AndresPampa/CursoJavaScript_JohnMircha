// ---------------------------------------------| Responsive Design  |--------------------------------------------- //

const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    // id que vamos a cambiar
    // La media query
    // El contenido de Mobile y el contenido de la pagina cuando lo abren desde una computadora

    // Detectamos la media QUery. Podemos asignarle un lisener a la mediaQuery
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }

    }

    // Esta deprecada esta funcion
    // breakpoint.addListener(responsive);

    //Mejora de codigo deprecado
    breakpoint.addEventListener("change", responsive)
    
    // Corremos esta linea para que aparezca el contenido a penas iniciamos la pagina
    responsive(breakpoint);
}