// ---------------------------------------------| Cuenta Regresiva  |--------------------------------------------- //

const d = document,
      w = window;

export default function scrollTopButton(btn){

    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) =>{
        // console.log(w.pageYOffset, d.documentElement.scrollTop)
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop; //cualquiera de las 2 que ande
        // Como la propiedad pageYOffset esta obsoleta lo hagp con la de documentElement.scrollTop.
        if(scrollTop > 660){
            $scrollBtn.classList.remove("hidden");
        }else {
            $scrollBtn.classList.add("hidden");
        }

    })
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
                // Para deslizamiento horizontal -> left: 0
            });
        };
    });

}