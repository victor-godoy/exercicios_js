soma1 = parseInt(prompt("Digite um número : "));
soma2 = parseInt(prompt("Digite o segundo número : "));
soma3 = parseInt(prompt("Digite o terceiro número : "));

// Verificando se é um número ou não
if (isNaN(soma1) || isNaN(soma2) || isNaN(soma3)) {
  alert("Digite um número!");
} else {
  let soma = parseInt(soma1 + soma2 + soma3);
  alert("A soma dos números é: " + soma);

  // Corrigindo a subtração
  let subtracao = parseInt(soma1 - soma2 - soma3);
  alert("A subtração dos números é: " + subtracao);
}

// Verificando se é possível dividir sem resultar em zero
if (soma1 !== 0 && soma2 !== 0 && soma3 !== 0) {
  let resultadoDivisao = (soma1 / soma2 / soma3).toFixed(4);
  alert("A divisão dos números é: " + resultadoDivisao);
} else {
  alert("Não pode dividir por 0");
}
