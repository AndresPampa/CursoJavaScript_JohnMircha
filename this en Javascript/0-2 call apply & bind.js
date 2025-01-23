// ---------------------------------------------| call, apply & bind |--------------------------------------------- //

console.log(this) // window
this.lugar = "Contexto Global";

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde ${this.lugar}`);
}

saludar("hola", "Pampa");

const obj = {
    lugar: "contexto Objeto",

}

//Llamo a un nuevo contexto o un nuevo this
saludar.call(obj, "Hola", "Pampa");
saludar.apply(null, ["Hola", "Tu vieja"]);
saludar.call(null, "Hi", "Pampa");

const persona = {
    nombre: "jon",
    saludar: function(){
        console.log(`Hola ${this.nombre}`)
    }
}

const otraPersona = {
    // saludar: persona.saludar

    //Enlaza el contexto de persona
    // saludar: persona.saludar.bind(persona)

    //Enlaza el contexto global
    saludar: persona.saludar.bind(this)
}

otraPersona.saludar();