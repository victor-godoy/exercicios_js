// leia 2 numeros efetua as 4 operacoes matematicas e mostre os resultados

function operacoes() {
  num1 = parseInt(document.getElementById("num1").value);
  num2 = parseInt(document.getElementById("num2").value);
  slcOperacao = document.querySelector('input[name="operacao"]:checked').value;

  alert("Primeiro número : " + num1);
  alert("Segundo número :" + num2);

  // 1 forma de fazer
  // if (slcOperacao === "soma") {
  //   alert("A soma entre eles:" + parseInt(num1 + num2));
  // }
  // if (slcOperacao === "subtracao") {
  //   alert("A subtração entre eles:" + parseInt(num1 - num2));
  // }
  // if (slcOperacao === "multiplicacao") {
  //   alert("A multiplicação entre eles:" + parseInt(num1 * num2));
  // }
  // if (slcOperacao === "divisao") {
  //   alert("A divisão entre eles:" + parseInt(num1 / num2));
  // }

  // 2 forma de fazer
  switch (slcOperacao) {
    case "soma":
      alert("A soma entre eles:" + parseInt(num1 + num2));
      break;
    case "subtracao":
      alert("A subtração entre eles:" + parseInt(num1 - num2));
      break;
    case "multiplicacao":
      alert("A multiplicação entre eles:" + parseInt(num1 * num2));
      break;
    case "divisao":
      alert("A divisão entre eles:" + parseFloat(num1 / num2).toFixed(3));
      break;
    default:
      alert("Selecione a operação");
  }
}
