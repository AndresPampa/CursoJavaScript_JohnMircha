// ---------------------------------------------| Propiedades Dinamicas o Compute Properties |--------------------------------------------- //

const objUsuarios = {};
const usuarios = ["pampa", "jon", "tu vieja", "cala", "Kenai"];

console.log(objUsuarios)

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario)

console.log(objUsuarios)

let aleatorio = Math.round(Math.random()*100 + 5)

const objUsuarios2 = {
    [`id_${aleatorio}`]: "valor Aleatorio",
}

console.log(objUsuarios2)