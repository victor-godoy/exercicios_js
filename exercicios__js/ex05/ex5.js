// leia as idades de duas criancas. Apos calcule e mostre as somas das idades e a media.

function calculoIdade() {
  var idade1 = parseInt(document.getElementById("idade1").value);
  var idade2 = parseInt(document.getElementById("idade2").value);

  soma = idade1 + idade2;
  media = soma / 2;

  console.log(idade1);
  console.log(idade2);

  alert("A soma das idades: " + soma);
  alert("A média das idades: " + media);

  console.log("A soma das idades: " + soma);
  console.log("A média das idades: " + media);
}
