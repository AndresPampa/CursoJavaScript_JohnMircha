// ---------------------------------------------| Ejercicios N° 9 - A|--------------------------------------------- //
//Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes 
    // datos: id de la película en IMDB, 
    // titulo, director, 
    // año de estreno, 
    // país o países de origen, 
    // géneros y 
    // calificación en IMBD.

// Todos los datos del objeto son obligatorios.

// Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// Valida que el título no rebase los 100 caracteres.
// Valida que el director no rebase los 50 caracteres.
// Valida que el año de estreno sea un número entero de 4 dígitos.
// Valida que el país o paises sea introducidos en forma de arreglo.
// Valida que los géneros sean introducidos en forma de arreglo.
// Valida que los géneros introducidos esten dentro de los géneros aceptados*.

// Crea un método estático que devuelva los géneros aceptados*.

// Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.

// Crea un método que devuelva toda la ficha técnica de la película.

// Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// Géneros Aceptados: 
        //Action, 
        // Adult, 
        // Adventure, 
        // Animation, 
        // Biography, 
        // Comedy, 
        // Crime, 
        // Documentary, 
        // Drama, 
        // Family, 
        // Fantasy, 
        // Film Noir, 
        // Game-Show, 
        // History, 
        // Horror, 
        // Musical, 
        // Music, 
        // Mystery, 
        // News, 
        // Reality-TV, 
        // Romance, 
        // Sci-Fi, 
        // Short, 
        // Sport, 
        // Talk-Show, 
        // Thriller, 
        // War, 
        // Western.




class Pelicula {

    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){

        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", 
            "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", 
            "Thriller", "War", "Western"];
    }

    static generosAceptados(){
        return console.info(`Los Generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }
    
    validarCadena(propiedad, valor){
        //Validaciones
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio.`);
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado NO es una cadena de texto.`);

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" Exede el numero de caracteres permitidos = (${longitud}).`)
        
        return true;
    }

    validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
            if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado NO es un numero.`);

        return true;
    }



    validarIMDB(id){
        if(this.validarCadena("IMDB id", id)){
            if(!(/^([a-z]{2})([0-9]{7})$/.test(id))){
                return console.warn(`IMDB id = ${id} no es valido, debe tener 9 caracteres, los primeros 2 letras minusculas y los 7 restantes numeros.`);
            }
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo)){
            this.validarLongitudCadena("Titulo",titulo, 100)
        }
    }


    validarDirector(director){
        if(this.validarCadena("Director", director)){
            this.validarLongitudCadena("Director",director, 50)
        }
    }

    validarEstreno(estreno){
        if(this.validarNumero("Año de estreno", estreno)){
            if(!(/^[0-9]{4}$/.test(estreno))){
                return console.warn(`Año de estreno = ${estreno} no es valido, debe un numero de 4 digitos.`);
            }
        }
    }

    validarArreglo(propiedad, valor){
        //Validaciones
        if(!valor) return console.warn(`${propiedad} "${valor} Esta vacio.`);
        if(!(valor instanceof Array)) return console.warn(`${propiedad} "${valor}" ingresado No es un Arreglo`);
        if(valor.length === 0) return console.warn(`${propiedad} "${valor} No tiene datos`);
        for(let num of valor){
            if(typeof num !== "string") return console.warn(`El valor de ${num} dentro del arreglo [${valor}] no es una cadena de texto`);
        }

        return true;
    }

    validarPais(pais){
        this.validarArreglo("Pais", pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Generos", generos)){
            for(let genero of generos){
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Generos incorrectos = "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                } 
            }
        };

    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion)){
            return (calificacion < 0 || calificacion > 10)
                    ? console.error(`La calificacion es de ${calificacion} y debe ser un numero entre 0 y 10`)
                    : this.calificacion = calificacion.toFixed(1);
        }
    }

    //Metodo para crear la ficha tecnica de la pelicula
    fichaTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais/es: "${this.pais.join("-")}"\nGeneros: "${this.generos.join(", ")}"\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`)
    }


}


// Pelicula.generosAceptados();
// console.log(Pelicula.listaGeneros);

// const peli = new Pelicula({
//     id:"tr1234567",
//     titulo:"Titulo de la Peli",
//     director:"Director de la Peli",
//     estreno: 2020,
//     pais: ["Mexico", "Francia"],
//     generos: ["Comedy", "Sport", "Horror"],
//     calificacion: 7.787

// })

// peli.fichaTecnica()

const pelis = [
    {
        id:"tr1234562",
        titulo:"Titulo de la Peli 1",
        director:"Director de la Peli 1",
        estreno: 2020,
        pais: ["Argentina", "Francia"],
        generos: ["Comedy", "Drama", "Horror"],
        calificacion: 6.879
    },
    {
        id:"tr1234561",
        titulo:"Titulo de la Peli 2",
        director:"Director de la Peli 2",
        estreno: 2021,
        pais: ["Alemania", "Noruega"],
        generos: ["Action", "Sport", "Crime"],
        calificacion: 7.787
    },
    {   id:"tr1234563",
        titulo:"Titulo de la Peli 3",
        director:"Director de la Peli 3",
        estreno: 2022,
        pais: ["Finlandia", "Chile"],
        generos: ["Sport", "Horror"],
        calificacion: 9.541}
];

pelis.forEach(el => new Pelicula(el).fichaTecnica());

