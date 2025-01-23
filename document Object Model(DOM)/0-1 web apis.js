// ---------------------------------------------| Web Apis |--------------------------------------------- //
console.log(window);
console.log(document);

const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

// let texto = "Hola rey tu mama es mi novia";
// hablar(texto);

let link = "https://jonmircha.com/dom";
