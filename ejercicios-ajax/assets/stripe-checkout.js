import STRIPE_KEYS from "./stripe-keys1.js"; //./stripe-keys.js

// console.log(STRIPE_KEYS);

const d = document, 
    $tacos = d.getElementById("tacos"),
    $template = d.getElementById("taco-template").content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers:{
            Authorization: `bearer ${STRIPE_KEYS.secret}`
        }
    }

let products, prices;

Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions)
])
.then((responses) =>Promise.all(responses.map(res => res.json())))
.then(json => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;
    // console.log(products, prices);

    prices.forEach(el => {
        let productData = products.filter(product => product.id === el.product);
        // console.log(productData);
        $template.querySelector(".taco").setAttribute("data-price", el.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
            ${productData[0].name}
            <br>
            ${el.unit_amount_decimal} ${el.currency.toUpperCase()}`

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $tacos.appendChild($fragment);

})
.catch(err =>{
    console.log(err);
    let message = err.statusText || "Ocurrio un error";
    $tacos.innerHTML = `<p>Error: ${err.status}: ${message}</p>`;
})

//No se necesita esta fetch
// fetch("https://api.stripe.com/v1/products", fetchOptions)
//     .then(res =>{
//         console.log(res);
//         return res.json();
//     })
//     .then(json =>{
//         console.log(json);
//     })


//     fetch("https://api.stripe.com/v1/prices", {
//         headers:{
//             Authorization: `bearer ${STRIPE_KEYS.secret}` //Documentacion de la API
//         }
//     })
//         .then(res =>{
//             console.log(res);
//             return res.json();
//         })
//         .then(json =>{
//             console.log(json);
//         });


