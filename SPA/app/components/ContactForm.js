export function CotactForm(){
    const d = document;
    const $form = d.createElement("form"); //Lo estamos agregando como NODO
    const $styles = d.getElementById("dynamic-style");

    $form.classList.add("contact-form");

    //Estilos dinamicos
    $styles.innerHTML = `
        /* -----------------------------|Reseto inicial - RESET CSS|-----------------------------*/
        :root{
            --main-font:sans-serif;
            --font-size:16px;
        }


        /* reseteo basico para html */
        html{
            box-sizing: border-box;
            font-family: sans-serif;
            font-size: 16px;
        }

        /* Esto se hace para heredar..... NI IDEA... */
        *,
        *:before,
        *:after{
            box-sizing: inherit;
        }

        body{
            margin: 0;
            overflow-x: hidden;
        }

        img{
            max-width: 100%;
            height: auto;
        }

        header h1{
            margin: 0 auto;
            text-align: center;
        }

        /* *************Concat Form Validations************* */
        .contact-form{
            --form-ok-color: #4caf50;
            --form-error-color: #f44336;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
        }

        .contact-form > *{
            padding: 0.5rem;
            margin: 1rem auto;
            display: block;
            width: 100%;
        }

        /* Limitar que se modifique el textarea */
        .contact-form textarea{
            resize: none;;
        }


        .contact-form legend,
        .contact-form-response{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }

        .contact-form input,
        .contact-form textarea{
            font-size: 1rem;
            font-family: sans-serif;
        }

        .contact-form input[type="submit"]{
            width: 50%;
            font-weight: bold;
            cursor: pointer;
        }

        .contact-form *::placeholder{
            color: #000;
        }
        /* Esto es para cuando el texto sea valido le agrega un borde verde */
        .contact-form [required]:valid {
            border: thin solid var(--form-ok-color);
        }

        /* Esto es para cuando el texto sea invalido le agrega un borde rojo. por eso al principio son todos rojos */
        .contact-form [required]:invalid {
            border: thin solid var(--form-error-color);
        }

        .contact-form-error{
            margin-top: -1rem;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 800ms ease;
        }

        .contact-form-loader{
            text-align: center;
        }


        .contact-form-error.is-active{
            display: block;
            animation: show-message 1s 1 normal 0s ease-out both;
        }


        .none{
            display: none;
        }

        @keyframes show-message {
        0%{
            visibility: hidden;
            opacity: 0;
        }
        100%{
            visibility: visible;
            opacity: 1;
        }
        }

    `;

    //Componente
    $form.innerHTML = `

        <!-- Mensaje del formulario o titulo -->
        <legend>Envianos tus comentarios</legend>

        <input type="text" name="name" 
                placeholder="Escribe tu nombre" 
                title="Nombre solo acepta letras y espacios en blanco" 
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
                required>

        <input type="email" 
                required name="email" 
                placeholder="Escribe tu Email" 
                title="Email incorrecto"
                pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$">
                <!-- pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"> -->

        <input type="text" 
                name="subject" 
                placeholder="Asunto a tratar"
                title="El Asunto es requerido"
                required>
        <!-- Se usa data-pattern para limitar los caracteres -->
        <textarea name="comments" 
                    cols="50" 
                    rows="5" 
                    placeholder="Escribe tus comentarios"
                    data-pattern="^.{1,255}$"
                    title="Tu comentario no puede exceder los 255 caracteres"
                    required></textarea>

        <div class="contact-form-loader none">
            <img src="../Ejercicios DOM/assets/spinning-circles.svg" alt="Cargando">
        </div>

        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
        <input type="submit" value="Enviar">
    `;

    function validationForm(){
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
                    e.preventDefault();
                    alert("Enviando formulario");

                    const $loader = d.querySelector(".contact-form-loader"),
                        $response = d.querySelector(".contact-form-response");
                    
                    $loader.classList.remove("none");

                    fetch("https://formsubmit.co/ajax/andrespampa@gmail.com", {
                        method: "POST",
                        body: new FormData(e.target)
                    })
                        .then(res => res.ok ? res.json() : Promise.reject(res))
                        .then(json =>{
                            console.log(json)
                            $loader.classList.add("none");
                            $response.classList.remove("none");
                            $response.innerHTML = `<p>${json.message}</p>`
                            $form.reset();
                        })
                        .catch(err =>{
                            console.log(err);
                            let message = err.statusText || "Ocurrio un error";
                            $response.innerHTML = `<p> ERROR ${err.status}: ${message}</p>`;
                        })
                        .finally(() =>{
                            setTimeout(()=>{
                                $response.classList.add("none")
                                $response.innerHTML = "";
                            },3000)
                        })
                });
            };

    //Este setTimeout es para que se ejecute la funcion validationForm despues de que el DOM este cargado
    setTimeout(() =>{validationForm()}, 100);

    return $form;
}