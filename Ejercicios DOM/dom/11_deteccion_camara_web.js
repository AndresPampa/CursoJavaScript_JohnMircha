// ---------------------------------------------| Deteccion de la camara WEB  |--------------------------------------------- //

const d = document,
      n = navigator;

export default function webCam(id){
    const $video = d.getElementById(id);
    // console.log(n.mediaDevices)

    if(n.mediaDevices.getUserMedia){
        // Permite utilizar la camara web y le pasamos un object con video y audio. Esta funcion es una promesa
        n.mediaDevices.getUserMedia({video:true, audio:false})
                            .then(stream =>{
                                // console.log(stream);
                                // srcObject mando la fuente pero a manera de objeto.
                                $video.srcObject = stream; //Solo toma una fotografia y se queda por eso agregamos el metodo play() abajo
                                $video.play()
                            })
                            .catch(err =>{
                                $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}<mark/><p/>`);
                                console.log(`Sucedio el siguiente error: ${err}`);
                            })
    };

}