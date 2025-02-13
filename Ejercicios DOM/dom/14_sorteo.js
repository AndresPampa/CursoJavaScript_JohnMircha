// ---------------------------------------------| Sorteo  |--------------------------------------------- //

const d = document;

export default function draw(btn, selector){

    const getWinner = (selector)=>{
        const $players = d.querySelectorAll(selector);
        const random = Math.floor(Math.random() * $players.length);
        //List item
        const winner = $players[random];

        // console.log($players, random, winner);

        return `El ganador es: .... ${winner.textContent}`;
    }

    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(`El ganador es ${result}`);
            console.log(`El ganador es ${result}`);
        }
    })
}

// //Prueba de youtube
// const getWinnerComment = (selector)=>{
//     const d = document;
//     const $players = d.querySelectorAll(selector);
//     const random = Math.floor(Math.random() * $players.length);
//     //List item
//     const winner = $players[random];

//     return `El ganador es: .... ${winner.textContent}`;
// }


// getWinnerComment(".style-scope ytd-comment-thread-renderer #author-text span");
// // author-thumbnail