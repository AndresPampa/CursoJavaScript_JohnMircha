// ---------------------------------------------| BOM: Propiedades y Eventos  |--------------------------------------------- //
// Browser Object Model que cuelga directamente de Window

window.addEventListener("resize", e =>{
    console.clear();
    console.log("***********EVENTO RESIZE***********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


window.addEventListener("scroll", e =>{
    console.clear();
    console.log("***********EVENTO Scroll***********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


window.addEventListener("load", e =>{
    console.log("***********EVENTO LOAD***********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


//Es muy apropiado usar este metodo en vez del evento load. Este carga mas rapido que windows -> load
document.addEventListener("DOMContentLoaded", e =>{
    console.log("***********EVENTO DOMContentLoaded***********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})
