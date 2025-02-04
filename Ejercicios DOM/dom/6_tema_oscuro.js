// ---------------------------------------------| Tema Oscuro  |--------------------------------------------- //

const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn);

    //Cuando aplicamos [] significa que aplica la regla a los que tengan estos atributos
    const $selectors = d.querySelectorAll("[data-dark]");
    // console.log($selectors);

    let moon = "🌙",
        sun = "🌞";
    
    
    const lightMode = () =>{
        $selectors.forEach((el => el.classList.remove(classDark)));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }

    const darkMode = () =>{
        //A cada elemento del nodeList le agregamos la clase que anteriormente le pasamos como parametro
        $selectors.forEach((el => el.classList.add(classDark)));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    }
    
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();
            }else{
                lightMode();
            }
        }
    });

    //QUeremos cargar el DOM Content Load. Porque a la hora que cargue nuestro navegador vaya a preguntar a localStorage si estamos con tema oscuro o no.
    //No podemos tener dentro de la funcion un DOMcontentLoad porque ya esta ejecutando en el index_dom.js por eso no funciona el alert
    d.addEventListener("DOMContentLoaded", e=>{
        //LE sacamos las llaves {} a los condicionales porque solo ejecutan 1 linea de codigo
        if(ls.getItem("theme") === null) ls.setItem("theme", "light");
        
        if(ls.getItem("theme") === "light") lightMode();
        
        if(ls.getItem("theme") === "dark") darkMode();
        
    });

}