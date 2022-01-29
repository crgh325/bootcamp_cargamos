// FUNCIONES                    5     10
function generarNumeroAleatorio(min, max) {
  // Entrada: numero maximo
  // Salida : numero aleatorio entre 0 - numero maximo
  //Inicializacion de variables
  let suerte = 0; //
  let random = 0;
  // 3 y el 6
  suerte = Math.random() * (max - min); // (0.01 - 0.99) * 3 = 0.01 - 2.99
  random = min + Math.round(suerte); // round(5.59)+3 = 6+3 = 9 , round(0.06)+3 = 0+3 = 3

  return random;
}

function avanzar() {
  let metros = 0;
  metros = generarNumeroAleatorio(10, 20);
  return metros;
}

// MAIN

let auto = 0;
const META = 100;

do {
  auto += avanzar();
  console.log("El auto avanzó: ", auto, "metros");
} while (auto < META);

console.log("El total recorrido es:", auto, "metros");
