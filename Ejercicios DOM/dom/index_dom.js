import hamburgerMenu from "./1_menu_hamburguesa.js";
import {alarm, digitalClock} from "./2_reloj.js";
import { moveBall, shortcuts } from "./3_teclado.js";
import countdown from "./4_cuenta_regresiva.js";
import scrollTopButton from "./5_boton_scroll.js";
import darkTheme from "./6_tema_oscuro.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    // Para los id usar # para las clases usar .
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Oct 06, 2025 16:55:00", "Feliz cumple Rey ✨🎉");
    scrollTopButton(".scroll-top-btn");
    darkTheme("");
});


//Keyup, keydown
d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");

});



