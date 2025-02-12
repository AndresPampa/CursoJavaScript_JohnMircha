import networkStatus from "./10_deteccion_red.js";
import webCam from "./11_deteccion_camara_web.js";
import getGeolocation from "./12_geolocalizacion.js";
import hamburgerMenu from "./1_menu_hamburguesa.js";
import {alarm, digitalClock} from "./2_reloj.js";
import { moveBall, shortcuts } from "./3_teclado.js";
import countdown from "./4_cuenta_regresiva.js";
import scrollTopButton from "./5_boton_scroll.js";
import darkTheme from "./6_tema_oscuro.js";
import responsiveMedia from "./7_responsive.js";
import responsiveTester from "./8_responsive_tester.js";
import userDeviceInfo from "./9_deteccion_dispositivos.js";

const d = document;


d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    // Para los id usar # para las clases usar .
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Oct 06, 2025 16:55:00", "Feliz cumple Rey ✨🎉");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", 
                    "(min-width: 1024px)", 
                    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc?si=GrqNgm7IWqErCPx4" target="_blank">Ver video</a>`, 
                    `<iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/6IwUl-4pAzc?si=GrqNgm7IWqErCPx4" 
                        // title="YouTube video player" 
                        // frameborder="0" allow="accelerometer; 
                        // autoplay; clipboard-write; 
                        // encrypted-media; gyroscope; picture-in-picture; web-share" 
                        // referrerpolicy="strict-origin-when-cross-origin" 
                        // allowfullscreen></iframe>`);

    responsiveMedia("gmaps", 
                    "(min-width: 1024px)", 
                    `<a href="https://maps.app.goo.gl/VGvqPZn8Fc5Qbcuw8" target="_blank">Ver Mapa</a>`, 
                    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18694.200939994604!2d-84.08202480256774!3d9.936317672437612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e37caeec4097%3A0x2f5c8ecb40662d2!2sLa%20Concha%20de%20la%20Lora!5e0!3m2!1ses!2sar!4v1738357719549!5m2!1ses!2sar" 
                    // width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
                    // referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    
    responsiveTester("responsive-tester");

    userDeviceInfo("user-device");

    webCam("webcam");
    
    getGeolocation("geolocation");

});

//Keyup, keydown
d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");

});


// La invocamos afuera para que no se cancelen los DOMcontentLoad
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();



