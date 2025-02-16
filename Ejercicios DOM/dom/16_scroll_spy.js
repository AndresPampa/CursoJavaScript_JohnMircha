// ---------------------------------------------| ScrollSpy  |--------------------------------------------- //

const d = document;

export default function scrollSpy(){

    const $sections = d.querySelectorAll(".section[data-scroll-spy]")

    const cb = (entries) =>{
        // console.log("Entries", entries);
        entries.forEach(entry =>{
            // console.log("entry", entry)
            const id = entry.target.getAttribute("id");
            // console.log(id);

            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    } 

    // root hace referencia
    const observer = new IntersectionObserver(cb, {
        // root
        // rootMargin: "-250px",//Reducimos el area de observacion
        threshold: [0.5, 0.75] //va de 0 a 1 donde 0 es cuando el elemento entra en el viewport y 1 cuando sale
    });
    // console.log("Observer", observer);

    $sections.forEach(el =>{observer.observe(el)});

}