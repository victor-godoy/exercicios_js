//leia uma temperatura em graus celsius depois calcule e mostre ela em farehrait

function temperatura() {
  celsius = parseFloat(document.getElementById("celsius").value);
  console.log(celsius);

  fahrenheit = celsius * 1.8 + 32;

  alert(
    " a temperatura: " +
      celsius +
      " em Celsius para Fahrenheit é : " +
      fahrenheit
  );
}
