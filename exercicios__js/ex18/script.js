// invertendo

function inverter(texto) {
  var saida = "";
  for (var i = texto.length - 1; i >= 0; i--) {
    saida += texto[i];
  }
  return saida;
}

var textoOriginal = "testando aqui";
var textoInvertido = inverter(textoOriginal);

alert("Texto normal: " + textoOriginal);
alert("Texto invertido: " + textoInvertido);

// i-- == Decrementa i após cada iteração.
// saida += texto[i] == Dentro do loop, cada caractere de texto é concatenado à variável saida. O caractere é acessado usando texto[i], onde i é o índice atual.
