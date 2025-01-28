// ---------------------------------------------| DOM: Delegación de Eventos  |--------------------------------------------- //
//Los eventos se los podemos poner al document y de ahi reconocer que elemento lo desencadeno

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//     $linkEventos = document.querySelector(".eventos-flujo a");

document.addEventListener("click", (e)=>{
    console.log(`Click en ${e.target}`);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola Rey!");
        // e.preventDefault(); //Cancela la accion que tenga por default el elemento -> No me abre la nueva pestaña de google.com
        // e.stopPropagation();
    }
});


function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    // e.stopPropagation(); //Detiene la propagacion
}

//todo lo que es windows no hace falta ponerle windows y todo hereda de windows por asi decirlo incluso el document
//No podemos crear lisener de elementos que no estan creados en el DOM, por eso este manera de hacerlo es la mas usada
//Esta es la forma mas optima de trabajar con los eventos en JS.

