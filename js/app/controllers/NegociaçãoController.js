class NegociaçãoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this.inputDAta = $("#data");
    this.inputQuantidade = $("#quantidade");
    this.inputValor = $("#valor");
    this.ListaNegociação = new ListaNegociações()
    this.negociaçãoView = new NegociaçãoView($("#negociação_view"))
    this.negociaçãoView.update(this.ListaNegociação)
  }

  adiciona(event){
    event.preventDefault();
     let data = DateHelper.textoParaData(this.inputDAta.value)
     

    let negociação = new Negociação(
      data,
      this.inputQuantidade.value,
      this.inputValor.value

    )
    this.ListaNegociação.adiciona(negociação)
    this.negociaçãoView.update(this.ListaNegociação);
    
    this.#limpaFormulario()
                                                                          // +1 aqui para nao dar o erro do mes errado
    
     console.log(this.ListaNegociação.negociação)
  }

  #limpaFormulario(){
    this.inputDAta.value =""
    this.inputQuantidade.value=1
    this.inputValor.value = 0.0
    this.inputDAta.focus()

  }
}

// coisas que temos que evitar no javascript é percorrrer o dom
