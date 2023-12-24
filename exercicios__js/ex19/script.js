/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

let divVendas = document.querySelector("vendas");

fetch("dados.json").then((response) => {
  // response vai me gerar o dado que preciso

  response.json().then((vendas) => {
    // vai ser transformado em json
    console.log(vendas); // me mostra a arry vendas

    vendas.vendas.map((elementos) => {
      // vai me mostrar cada elemento

      const valor = elementos.valor;
    });

    const menorValor = vendas.vendas.reduce(
      (prev, curr) => (prev.valor < curr.valor ? prev : curr)
      //soma
    );

    const maiorValor = vendas.vendas.reduce((prev, curr) =>
      prev.valor > curr.valor ? prev : curr
    );

    alert("Menor valor " + menorValor.valor + " No dia " + menorValor.dia);
    alert("Maior valor " + maiorValor.valor + " No dia " + maiorValor.dia); // me mostra os valores
  });
});
