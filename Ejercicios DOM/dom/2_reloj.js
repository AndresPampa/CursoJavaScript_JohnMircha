// ---------------------------------------------| Reloj  |--------------------------------------------- //

const d = document;

export function digitalClock(clock, btnPlay, btnStop){

    let clockTempo;

    d.addEventListener("click", e =>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() =>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000)

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}


export function alarm(sound, btnPlay, btnStop){

    let alarmTempo;
    // Aunque no se vea tengo que crear la etiqueta para usar la API que reproduce el audio
    const $alarm = d.createElement("audio")
    $alarm.src = sound;

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(() =>{
                $alarm.play();
            },2000)

            e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            //Paramos la alarma
            $alarm.pause();
            //La reiniciamos
            $alarm.currentTime = 0;
            
            //Volvemos a poner funcional la alarma
            d.querySelector(btnPlay).disabled = false;

        }
    })

}