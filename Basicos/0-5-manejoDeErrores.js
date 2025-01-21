// ---------------------------------------------| MANEJO DE ERRORES |--------------------------------------------- //


try{
    console.log("En el try se agrega el codigo a evaluar");
    // noExiste;
    console.log("Segundo mensaje del try");
}catch(error){
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
    console.log(error);
}finally{
    console.log("En el bloque finally se ejecutara siempre al final del bloque try-catch");
}


try{
    let numero = "y";
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero");
    }
    console.log(numero*numero);
}catch(error){
    console.log(`Se produjo el siguiente error: ${error}`);
}

















