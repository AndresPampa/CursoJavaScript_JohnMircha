import hamburgerMenu from "./1_menu_hamburguesa.js";
import {alarm, digitalClock} from "./2_reloj.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    // Para los id usar # para las clases usar .
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
});



