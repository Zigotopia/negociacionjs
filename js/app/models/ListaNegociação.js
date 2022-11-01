class ListaNegociações {
    #negociações;
  constructor() {
    this.#negociações = [];
  }

  adiciona(negociação){
                       
    this.#negociações.push(negociação)
  }

  get negociação() {
    return [].concat(this.#negociações) // método de programação defensiva que vai me dar um cópia do array original caso alguem tente alterar pro fora

  }
}



// o objetivo de criar mais um model com essa classe é  para blindar o array de futuras alterações