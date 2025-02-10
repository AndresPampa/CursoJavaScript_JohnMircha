// ---------------------------------------------| Deteccion de conexion de red  |--------------------------------------------- //

const d = document,
      w = window,
      n = navigator;

export default function networkStatus(){


    const isOnline = () =>{

        const $div = d.createElement("div");

        if(n.onLine){
            $div.textContent = "Conexion Reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        //Clase 71 DOM ->
        d.body.insertAdjacentElement("afterbegin", $div)

        //Removemos despues de 2 segundos
        setTimeout(()=>{
            d.body.removeChild($div)
        }, 2000);
    };
    
     
    w.addEventListener("online", (e)=>{
        isOnline();
    });

    w.addEventListener("offline", (e)=>{
        isOnline();
    });

}