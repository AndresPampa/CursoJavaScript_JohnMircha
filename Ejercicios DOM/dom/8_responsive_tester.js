// ---------------------------------------------| Responsive Tester  |--------------------------------------------- //

const d = document;
const w = window;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester; //Creamos una variable vacia para guardar el window.open


    d.addEventListener("submit", (e) =>{
        // Otra forma diferente a e.targe.matches($form)
        if(e.target === $form) {
            e.preventDefault(); //Para prevenir la accion por default del formulario
            // Se pueden acceder a Todos los elementos de un formulario con la notacion del punto
            tester = w.open($form.direccion.value, 
                            "tester", 
                            // `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`); //Lo que el usuario escribio en ese input
                            `width=${$form.ancho.value}, height=${$form.alto.value}`)

        }
    });

    d.addEventListener("click", (e)=>{
        if(e.target === $form.cerrar) {
            e.preventDefault()
            tester.close();
        }
        
    });

}
