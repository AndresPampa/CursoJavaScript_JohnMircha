// ---------------------------------------------| Menu Hamburguesa  |--------------------------------------------- //
export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;

    d.addEventListener("click", e =>{
        // el `${panelBtn} *` hace referencia a todo elemento que tenga el boton dentro
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
            console.log(e.target)
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}