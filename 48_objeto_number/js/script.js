const n1 = 4;
const n2 = 15.8;

const n3 = new Number(4);
const n4 = new Number(15.8);

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

console.log(Number.isFinite(42)); //true
console.log(Number.isFinite(Infinity)); //false

console.log(Number.isInteger(5)); //true
console.log(Number.isInteger(4.6)); //false

//Stack Over Flow
console.log(Number.isSafeInteger(1e15)); //true
console.log(Number.isSafeInteger(1e16)); //false

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(5)); //false

console.log(Number.parseInt("42"));
console.log(Number.parseInt("42E"));
console.log(Number.parseInt("Num. 42"));
console.log(Number.parseInt("A"));

let text_number = "348.42";
console.log(Number.parseInt(text_number));
console.log(Number.parseFloat(text_number));

console.log((1.5).toExponential(2)); // "1.50e+0" en exponencial
console.log((1.5).toFixed(2)); // 1.50
console.log((1.5).toPrecision(1)); // 2

//Bases numericas
let decimal = 124;
let binario = "1111100"; // base 2
let octal = "174"; // base 8
let hexadecimal = "7C"; // base 16

console.log(Number.parseInt(binario, 2));
console.log(Number.parseInt(octal, 8));
console.log(Number.parseInt(hexadecimal, 16));

//Formatos numericos
let number = 1.5;

console.log(number.toExponential(2)); //  notacion infinita
console.log(number.toFixed(2)); //
console.log(number.toPrecision(1)); // math.round
