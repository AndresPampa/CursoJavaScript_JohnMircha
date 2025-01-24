// ---------------------------------------------| Template HTML  |--------------------------------------------- //
//

const $cards = document.querySelector(".cards"),
      $template = document.getElementById("template-card").content,
      $fragment = document.createDocumentFragment(),
      $cardContent = [
        {
          title: "Tecnología",
          img: "http://fpoimg.com/200x200?text=Tegnologia"
        },
        {
          title: "Animales",
          img: "http://fpoimg.com/200x200?text=Animales"
        },
        {
          title: "Arquitectura",
          img: "http://fpoimg.com/200x200?text=Arquitectura"
        },
        {
          title: "Gente",
          img: "http://fpoimg.com/200x200?text=Gente"
        },
        {
          title: "Naturaleza",
          img: "http://fpoimg.com/200x200?text=Naturaleza"
        },
      ];


$cardContent.forEach((el) =>{
    $template.querySelector("img").setAttribute("scr", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    //Clonar la estructura
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);


})

$cards.appendChild($fragment);
