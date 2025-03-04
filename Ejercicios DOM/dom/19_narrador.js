// ---------------------------------------------| Contact Form Validation  |--------------------------------------------- //

const d = document;
const w = window;

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select");
    const $speechTextarea = d.getElementById("speech-text");
    const $speechBtn = d.getElementById("speech-btn");
    //Esto es lo que nos permite interactuar con las voces de nuestro sistema
    const speechMessage = new SpeechSynthesisUtterance();

    // console.log(speechMessage);

    let voices = [];

    d.addEventListener("DOMContentLoaded", e =>{
        // console.log(w.speechSynthesis);
        //Para tener las voces hay que ejecutarlo en ese evento. Tiene que ser ejecutado dentro de un lisener
        w.speechSynthesis.addEventListener("voiceschanged", e =>{
            // console.log(e);
            voices = w.speechSynthesis.getVoices();
            // console.log(voices); //Arreglo con 20 elementos

            voices.forEach(voice =>{
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} *** ${voice.lang}`;
                $speechSelect.appendChild($option);
            });
        });
    });

    //Seleccionamos la voz y se la asignamos a la instancia de SpeechSynthesisUtterance()
    d.addEventListener("change", e =>{
        if(e.target === $speechSelect){
            speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
            // console.log(speechMessage.voice)
        }
        // console.log(speechMessage); //Chequeamos
    })

    //Para que el narrador lea el texto
    d.addEventListener("click", (e) =>{
        if(e.target === $speechBtn){
            // console.log($speechTextarea.value);
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
            // console.log(speechMessage);
        }
    });

}