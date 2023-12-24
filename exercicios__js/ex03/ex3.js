// ler o valor do input e mostrar no alert

const input = document.getElementById("input");

console.log(input);

function valorInput(event) {
  event.preventDefault();
  valor = event.target.value;

  alert(valor);
}

input.addEventListener("change", valorInput);
