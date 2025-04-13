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
    };

let products, prices;

const moneyFormat = (num) =>`$${num.slice(0, -2)}.${num.slice(-2)}`; //Funcion que me formatea el price o dinero

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
            ${moneyFormat(el.unit_amount_decimal)} ${el.currency.toUpperCase()}`

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


d.addEventListener("click", (e) =>{
    // console.log(e.target);
    if(e.target.matches(".taco *")){
        // alert("A comprar!!");
        let price = e.target.parentElement.getAttribute("data-price");
        console.log(price);
        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems:[{price: price, quantity: 1}],
            mode: "subscription",
            successUrl: "http://127.0.0.1:5500/ejercicios-ajax/assets/stripe-success.html",
            // cancelUrl: "https://example.com/cancel",
        })
        .then(res =>{
            console.log(res)
            if(res.error){
                // console.log(res.error);
                $tacos.insertAdjacentHTML("afterend", res.error.message);
            }
        })
    }
});
