const Component = (function(){
    //Creamos el constructor del componenete
    const Constructor = function(options){
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    };

    //Agregamos los metodos al prototipo del constructor del componente
    //Render UI
    Constructor.prototype.render = function(){
        const $el = d.querySelector(this.el);
        if(!$el) return;
        $el.innerHTML = this.template(this.data);

        console.log(this.data);
    }

    //Actualizar el State de forma reactiva
    Constructor.prototype.setState = function(){
        for(let key in obj){
                if(this.data.hasOwnProperty(key)){
                    this.data[key] = obj[key];
                }
            }

        this.render();
    }

    //Obtenemos una copia inmutable del State
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.data))
    }

    

    return Constructor

})();