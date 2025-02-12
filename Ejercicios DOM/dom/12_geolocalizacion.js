// ---------------------------------------------| Geolocalizacion  |--------------------------------------------- //

const d = document,
      n = navigator;


export default function getGeolocation(id){
    const $id = d.getElementById(id);
    const options = {
        //Tomar la mejor lectura: depende e factores externos
        enableHighAcurracy: true,
        timeout: 5000,//5 segundos
        maximuAge: 0, //que no se guarde en cache y no se guarden las lecturas
    };

    //Funciones para manipular si esta todo bien o si hay algun error
    const succes = (position)=>{
        let coords = position.coords;
        // console.log(position);

        $id.innerHTML = `<p> Tu Posicion Actual es :</p>
                    <ul>
                        <li>Latitud: <b>${coords.latitude}</b></li>
                        <li>Longitud: <b>${coords.longitude}</b></li>
                        <li>Precision: <b>coords.acurracy</b> metros</li>
                    </ul>
                    <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 20z" target="_blank" rel="noopener">Ver en Google Maps</a>`
    };
    const error = (err)=>{
        $id.innerHTML = `<p><mark>${err}: ${err.message}</mark></p>`
        console.log(`Error ${err}: ${err.message}`);
    };

    //Recibe 3 parametros
    n.geolocation.getCurrentPosition(succes, error, options);
    // console.log(n.geolocation);
    
    //Hay otro metodo que es watchPosition. Es un lisener que detecta si cambiamos de posicion

}


