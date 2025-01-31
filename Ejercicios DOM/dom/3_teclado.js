// ---------------------------------------------| Eventos del teclado  |--------------------------------------------- //

const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitBall = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect();

    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log("Limite bola",limitBall, limitBall.left);
    // console.log("Limite Stage", limitStage, limitStage.left);
    // console.log("Limite bola",limitBall, limitBall.top);
    // console.log("Limite Stage", limitStage, limitStage.top);

    // Todos los elementos del dom tienen un metodo que se llama getBoundingClientRect -> nos da un objeto con la posicion del objecto

    switch(e.keyCode){
        case 37:
            if(limitBall.left > limitStage.left){
                e.preventDefault(); //Cancela los comportemientos por default que tiene la pc
                x--;
            };
            break;
        case 38:
            // Para que sea perfecta debemos redondear los decimales utilizando la clase Math
            if(limitBall.top > limitStage.top){
                e.preventDefault(); //Cancela los comportemientos por default que tiene la pc
                y--;
            };
            
            break;
        case 39:
            if(limitBall.right < limitStage.right){
                e.preventDefault(); //Cancela los comportemientos por default que tiene la pc
                x++
            };
            break;
        case 40:
            // Para que sea perfecta debemos redondear los decimales utilizando la clase Math
            if(limitBall.bottom < limitStage.bottom){
                e.preventDefault(); //Cancela los comportemientos por default que tiene la pc
                y++;
            }
            break;

        default: //NO hacemos nada
            break;
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}


export function shortcuts(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e.shiftKey);

    if(e.key === "a" && e.eltKey){
        alert("Has Lanzado una alerta con el Teclado");
    }

    if(e.key === "c" && e.eltKey){
        confirm("Has Lanzado una confirmacion con el Teclado");
    }

    if(e.key === "p" && e.eltKey){
        prompt("Has Lanzado un aviso con el Teclado");
    }
}

