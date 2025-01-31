// ---------------------------------------------| Cuenta Regresiva  |--------------------------------------------- //

const d =  document;

export default function countdown(id,limitDate, finalMessage){

    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();//Voy a obtener el valor de la fecha en milisegundos

    
    const countdownTempo = setInterval(()=>{
        // console.log(countdownDate, new Date().getTime());
        let now = new Date().getTime();
        let limitTime = countdownDate - now;
        let days = Math.floor(limitTime/(1000 * 60 * 60 * 24)), 
            hours = Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)), 
            minutes =("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2), 
            seconds =("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);
        //El slice y el 0 es para que aparezca el 0 cuando es menor que 10, es para que se vea como un reloj digital

        $countdown.innerHTML = `
            <h3> Faltan: ${days} Dias 
                         ${hours} Horas 
                         ${minutes} Minutos 
                         ${seconds} Segundos </h3>`;
    
        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3> ${finalMessage} </h3>`;
        }

    }, 1000)

}

