class DateHelper {

  constructor(){
    throw new Error('date helper nao pode ser ser instanciada')
  }
  static textoParaData(texto) {
    return new Date(
      ...texto
        .split("-")
        .map((item, indice) => item - (indice % 2))
    ).toLocaleDateString();
  }
}





// criamos o helper para ter um acesso facil ao metodo caso precisamos usar dentro de outras classes
// o static é usado para invocar um método direto da classe, ou seja sem uma instancia do new para usar porem ela nao tem acesso aos atributos de classe para referenciar 