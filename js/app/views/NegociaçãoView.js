class NegociaçãoView {
  constructor(elemento) {
    this.NegociaçãoView = elemento; // constructor criado para ter acesso a div de view do dom
  }

  template(model) {
    return ` <table class="table table-hover table-bordered"> 
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
          
        ${model.negociação.map((n) => {
          return `
            <tr>
                <td>${n.data}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
            </tr>

          
          `;
        })}
        </tbody>
        
        <tfoot>
        <td colspan="3"></td>
        <td>${model.negociação.reduce((total, n) => total + n.volume, 0 )}</td>
        </tfoot>
    </table>`; // criei essa função para usar como template parar criar a lista de negociações escrevendo direto do dom
  }

  update(model) {
    this.NegociaçãoView.innerHTML = this.template(model); // o update é para  escrever o template na div criada no dom
  }
}





// o colspan server para dar 3 espaços para a td dentro da tr