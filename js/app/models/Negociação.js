class Negociação {

    #data;   // o cerquilha aqui funcionou como modo de tornar privado o valor da data depois de creiado. Nesse caso só é acessivel com métodos get
    #quantidade;
    #valor;
    #volume
    
    
    constructor(data,quantidade,valor){

        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
        this.#volume = quantidade * valor
    }
         // utilizei o get aqui para encapsular os dados para eles só serem utilizado nas leitura
    get data(){ 
        
        return this.#data
    }

    get quantidade(){
        return this.#quantidade
    }
    
    get valor(){
        return this.#valor
    }

    get volume(){
        return this.#volume
    }


    

}

 
