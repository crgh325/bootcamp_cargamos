console.log("APRENDIENDO ORDENACIONES");

const meses = ["octubre", "enero", "febrero", "julio", "marzo"];
console.log(meses);

meses.sort();
console.log(meses);
console.log(meses.reverse());

console.log("FUNCION DE COMPARACION");

//funcion de comparacion para ordenamiento natural
const cadena = [1, 8, 2, 32, 9, 7, 4];
const ascendente = function (a, b) {
  return a - b;
};

console.log(cadena);
console.log(cadena.sort(ascendente));
