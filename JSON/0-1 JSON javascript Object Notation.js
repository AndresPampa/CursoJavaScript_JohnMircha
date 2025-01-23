// ---------------------------------------------| JSON: JavaScript Object Notation |--------------------------------------------- //
//UN formato ligero de intercambio de datos

const json = {
    cadena: "jon",
    numero: 35,
    boolean: true,
    arreglo: ["programar", "viciar", "GYM"],
    objeto: {
        twitter: "@pampita",
        email: "PampaElMasPijudo@tuvieja.com"
    },
    nulo: null
}

let jsonString = '{ "cadena": "jon", "numero": "35", "boolean": "true", "arreglo": ["programar", "viciar", "GYM"], "objeto": { "twitter": "@pampita", "email": "PampaElMasPijudo@tuvieja.com"},"nulo": null}';


console.log(json);
console.log(JSON);

//parse
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3,4]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));

//Stringify
console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify({x: 2, y: 3}));
console.log(JSON.stringify(json));
console.log(JSON.parse(jsonString))

const articulo = "https://jonmircha.com/json";
