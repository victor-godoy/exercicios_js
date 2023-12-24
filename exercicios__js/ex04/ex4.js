// dois valores, que trocam dps

function valorInput() {
  var inputA = document.getElementById("inputA").value;
  var inputB = document.getElementById("inputB").value;

  // para trocar os valores preciso de 3 variaveis
  // no caso quero passar o valor do meu inputB para a nova variavel
  // ai passo o valor do meu inputA para o a variael b ou inputB
  // agora eu mando os valores da minha variavel c para a variavel a( inputA)

  var c = inputB;
  inputB = inputA;
  inputA = c;

  alert("Valor A: " + inputA);
  alert("Valor B: " + inputB);

  console.log("Valor A:", inputA);
  console.log("Valor B:", inputB);
}
