// ---------------------------------------------| Contact Form Validation  |--------------------------------------------- //

const d = document;

export default function contactFormValidation(){
    const $form = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");
    
    // console.log($inputs);

    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });

    // Esto se puede hacer en el submit tambien
    d.addEventListener("keyup", (e) =>{
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target;
            // Operador de cortocircuito --> data atribute esta en el objeto dataset
            let pattern = $input.pattern || $input.dataset.pattern;

            // console.log($input, pattern);

            // validar 
            if(pattern && $input.value !== ""){
                // console.log("el input tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }

            if(!pattern){
                // console.log("el input NO tiene patron tiene patron");
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }

        }
    });


    d.addEventListener("submit", (e) =>{
        //Controlamos la accion por default
        // e.preventDefault();
        alert("Enviando formulario");

        const $loader = d.querySelector(".contact-form-loader"),
              $response = d.querySelector(".contact-form-response");
        
        $loader.classList.remove("none");

        setTimeout(() =>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            //Para que el fomrulario se limpie reseteamos
            $form.reset();

            //Volvemos agregar la clase none para que desaparezca el mensaje
            setTimeout(()=>{$response.classList.add("none")},3000)

        }, 3000)

        

    });



};