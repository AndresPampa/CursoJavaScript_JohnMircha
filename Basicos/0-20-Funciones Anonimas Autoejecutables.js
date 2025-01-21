// ---------------------------------------------| Funciones Anonimas Autoejecutables |--------------------------------------------- //

//IIFE (Immediately Invoked Function Expression)

(function(){
    console.log("Mi primer IIFE");
})();
    
// (function(d, w, c){
//     console.log("Mi Segunda IIFE");
//     console.log(d);//Document
//     console.log(w);//Window
//     console.log(c);//Console
//     c.log("Este es un console.log")
// })(document, window, console);


(function(c){
    console.log("Mi Segunda IIFE");
    console.log(c);//Console
    c.log("Este es un console.log")
})(console);


//formas de escribir funciones anonimas autoejecutables

//Clasica
(function(){

})();

//La Crockford (Javascript The Good Parts)
((function(){
    console.log("Version Crockford");
})());

//Unaria
+function(){
    console.log("Version unaria");
}();

//Facebook
!function(){
    console.log("Version Facebook");
}();

