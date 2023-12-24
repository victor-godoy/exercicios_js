const numeroUsuario = document.querySelector("#numeroUsuario");
const botao = document.querySelector("button");

const fib = (num) => {
  if (num === 0 || num === 1) return num;

  return fib(num - 2) + fib(num - 1);
};

const checkFib = () => {
  const valor = Number(numeroUsuario.value);
  let isFib = false;
  let contador = 0;
  while (fib(contador) <= valor) {
    isFib = fib(contador) === valor;
    contador += 1;
  }

  if (isFib) {
    return alert(`${valor} é o ${contador}* numero de fibonacci`);
  }

  return alert(`${valor} não é fibonacci`);
};

botao.addEventListener("click", checkFib);
