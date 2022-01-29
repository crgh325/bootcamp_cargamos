//fA = Funcion A
const funcionA = function () {
  console.log("Ejecutando función A");
};

const funcionB = function () {
  console.log("Ejecutando función B");
};

//fC = Funcion C
const activandoFuncion = function (fx) {
  console.log("Ejecutando funcion C");
  fx(); // callback
};

//MAIN

activandoFuncion(funcionA);
activandoFuncion(funcionB);

console.log("==========================");

let vegetales = ["zanahoria", "lechuga", "tomate"];

//Hacer una ensalada
//1 seleccionar vegetales
//2 cortar vegetales
//3 mezclarlos
//4 aderezar todo

//FUNCIONES

const cortarVegetales = function () {
  console.log("Cortar:", vegetales);
};

const mezclarVegetales = function (cortar) {
  cortar();
  console.log("Mezclar:", vegetales);
};

const aderezarVegetales = function (mezclar, cortar) {
  mezclar(cortar);
  console.log("Aderezado", vegetales);
};

function prepararEnsalada() {
  aderezarVegetales(mezclarVegetales, cortarVegetales);
}
//siempre es de adelante hacia atras //del final al inicio
//MAIN

prepararEnsalada();

console.log("==========================");

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

console.log("==========================");
//tres formas de definir las funciones
const sum = function (x, y) {
  return x + y;
};

function mult(x, y) {
  return x * y;
}

const div = (x, y) => {
  return x / y;
};

function areaTriangulo(sum_callback, mult_callback, div_callback) {
  let area = 0;
  let base = 12,
    altura = 21;

  area = div_callback(mult_callback(base, altura), 2);

  return area;
}

areaTriangulo(sum, mult, div);

console.log(areaTriangulo(sum, mult, div));

console.log("==========================");

const saludo = () => {
  console.log("Hola a todos");
};

setTimeout(saludo, 3000);

saludo();

console.log("==========================");
//EJEMPLO DE LATENCIA
function traerUsers(callback) {
  console.log("loading...");
  setTimeout(() => {
    let response = ["User1", "User2", "User3"];
    callback(response);
  }, 3000); // 3 seconds
}

function mostrarUsers(users) {
  console.log(users);
}

//MAIN
traerUsers(mostrarUsers);

console.log("==========================");
