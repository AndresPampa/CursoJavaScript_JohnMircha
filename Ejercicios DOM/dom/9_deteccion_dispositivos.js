// ---------------------------------------------| Responsive Tester  |--------------------------------------------- //

const d = document;
const n = navigator;
const ua = n.userAgent;


export default function userDeviceInfo(id){

    const $id = d.getElementById(id);
    const isMobile = {
        android: ()=>ua.match(/android/i),
        ios: ()=> ua.match(/iphone|ipad|pod/i),
        any: function(){//Esto se hace para tener de referencia el contecto donde se ha creado isMobile
            return this.android() || this.ios()
        }
    };

    const isDesktop = {
        linux: ()=> ua.match(/android/i),
        mac: ()=> ua.match(/iphone|ipad|pod/i),
        windows: ()=> ua.match(/windows nt/i),
        any: function(){//Esto se hace para tener de referencia el contecto donde se ha creado isMobile
            return this.linux() || this.mac() || this.windows()
        }
    };

    const isBrowser = {
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/zafari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera|opera mini/i),
        edge: ()=> ua.match(/edge/i),
        ie: ()=> ua.match(/msie|iemobile/i),
        any: function(){//Esto se hace para tener de referencia el contecto donde se ha creado isMobile
            return this.chrome() || 
                   this.safari() || 
                   this.firefox() ||
                   this.opera() ||
                   this.edge() ||
                   this.ie()
        }
    };

    // console.log(ua);
    // console.log(isMobile.android())
    // console.log(isMobile.ios())
    // console.log(isMobile.any());
    // console.log(isDesktop.any());
    // console.log(isBrowser.any());

    //Si mobile es verdadero imprimime que tiene caso contrario es desktop imprimie desktop.any()
    $id.innerHTML = `
            <ul>
                <li>User Agent: <b>${ua}</b></li>
                <br>
                <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
                <br>
                <li>Navegador: <b>${isBrowser.any()}</b></li>
            </ul>
    `
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }

    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Si estas usando WIndows sos nacional y popular</mark></p>`;
    }

    if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Si estas usando mac sos Careta hijo de la yuta</mark></p>`;
    }

    // Redirecciones
    if(isMobile.android()){
        window.location.href = "https://www.google.com/"
    }

}
