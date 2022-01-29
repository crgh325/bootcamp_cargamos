//CONDICIONAL SIMPLE diapo 339

/*
var nota = 7;
console.log("He realizado mi examen.");

//Condición si nota es mayor o igual a 5
if (nota>= 5) {console.log("¡Estoy aprobado!")}; */

//CONDICIONAL DOBLE diapo 342

/*
let nota = 7;
let calificacion = "";
console.log("He realizado mi examen.");

//Condición si nota es mayor o igual a 5
if (nota <= 5) {
  console.log("¡Estoy aprobado!");
}

var not = 4;
console.log("He ralizado mi exámen. Mi resultado es el siguiente:");

//condicion
if (not < 5) {
  //acción A-> nota es menor que 5
  calificacion = "suspendido";
} else {
  //accion B: cualquier otro caso a accion A -> nota es mayor o igual a 5
  calificacion = "aprobado";
}
console.log("Estoy", calificacion);

var nota1 = 7;
console.log("He ralizado mi exámen. Mi resultado es el siguiente:");

//condicion
if (nota1 < 5) {
  //acción A-> nota es menor que 5
  calificacion = "suspendido";
}
if (nota1 >= 5) {
  //acción B-> nota es mayor o igual que 5
  calificacion = "aprobado";
}
console.log("Estoy", calificacion);

let nota2 = 7;
console.log("He ralizado mi exámen. Mi resultado es el siguiente:");

//operador ternario: condicion ? verdadero : falso
let calificacion = nota2 >= 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);

/*
var not = 7;
console.log("He ralizado mi exámen. Mi resultado es el siguiente:");

//condicion
if (not < 5) {
    //acción A-> nota es menor que 5
    calificacion = "suspendido";
}
else{
    //accion B: cualquier otro caso a accion A -> nota es mayor o igual a 5
    calificacion = "aprobado"; 
}
console.log("Estoy", calificacion);

var nota1 = 7;
console.log("He ralizado mi exámen. Mi resultado es el siguiente:");

//condicion
if (nota1 < 5) {
    //acción A-> nota es menor que 5
    calificacion = "suspendido";
}
if (nota1 >= 5){
    //acción B-> nota es mayor o igual que 5
    calificacion = "aprobado";
}
console.log("Estoy", calificacion);

var nota2 = 7;
console.log("He ralizado mi exámen. Mi resultado es el siguiente:");

//operador ternario: condicion ? verdadero : falso
var calificacion = nota2 <5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);*/

//diapositiva 343

/*
let nota = 0.0;
let calificacion = "";

nota = prompt("Ingresa tu nota"); //Devuelve texto
nota = parseFloat(nota);

console.log("tu nota es: ",nota)

console.log("He realizado mi examen.");

Condiciones
if (nota < 5) {
  calificacion = "insuficiente";
} else if (nota < 6) {
  calificacion = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable"
} else {
  calificacion = "Sobre saliente"
}

console.log("Mi calificacion es: ",calificacion) */
/*

*5**
//diapositiva 344

var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

//nota: este ejemplo no es equivalente al ejemplo anterior (leer abajo)
switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    //cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);*/

i = 0;

//condicion:mientras la variable contaro sea menor de 5
while (i > 5) {
  console.log("valor de i:", i);

  i ++; //es igual a i + 1
