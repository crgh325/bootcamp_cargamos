/*var a = 1;
console.log(a); // aqui accedemos a la "A" global que vale 1

function x() {
  console.log(a); // en esta linea el valor de "a" es undefined
  a = 5; //aqui creamos una variable "a" a nivel de funcion

  console.log(a); // aqui el valor de "a" es 5 (a nivel de funcion)
  console.log(window.a); //aqui el valor de "a" es 1 (ambito global)
}

x(); // aqui se ejecuta el codigo de la funcion x()
console.log(a); // en esta linea el valor de "a" es 1*/

/** opcion 1: bucle con let */

console.log("Antes: ", p); //antes:undefined
//para (iniciar iterador ; iterador < total ; iterador++)
for (let p = 0; p < 3; p++) {
  console.log("-", p); //durante: 0, 1, 2
}
console.log("Despues: ", p); // despues de undefined

/** opcion 2: bucle con var */

console.log("Antes: ", p); //antes:undefined
for (var p = 0; p < 3; p++) {
  console.log("-", p); //durante: 0, 1, 2
}
console.log("Despues: ", p); // despues: 3wtf
