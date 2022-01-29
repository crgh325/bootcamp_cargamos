const CREDITO_C = 2,
  CREDITO_B = 3,
  CREDITO_A = 4,
  P1 = 0.3,
  P2 = 0.3,
  PF = 0.4;

// FUNCIONES

// MAIN

let p1_hist = 0,
  p2_hist = 0,
  ef_hist = 0,
  p1_mat = 0,
  p2_mat = 0,
  ef_mat = 0,
  p1_geo = 0,
  p2_geo = 0,
  ef_geo = 0,
  p1_art = 0,
  p2_art = 0,
  ef_art = 0,
  promedio_hist = 0,
  promedio_mat = 0,
  promedio_geo = 0,
  promedio_art = 0,
  producto_hist = 0,
  producto_mat = 0,
  producto_geo = 0,
  producto_art = 0;

//Solicitando todas las notas al usuario
//Historia
p1_hist = prompt("Ingrese la nota P1 de Historia:");
console.log("Nota P1 de Historia es: ", p1_hist);

p2_hist = prompt("Ingrese la nota P1 de Historia:");
console.log("Nota P2 de Historia es: ", p2_hist);

ef_hist = prompt("Ingrese la nota P1 de Historia:");
console.log("Nota EF de Historia es: ", ef_hist);

promedio_hist = p1_hist * P1 + p2_hist * P2 + ef_hist * PF;
producto_hist = promedio_hist * CREDITO_B;
console.log(
  "el promedio es: ",
  promedio_hist,
  "equivalente a: ",
  producto_hist,
  "créditos"
);

//Matemática
p1_mat = prompt("Ingrese la nota P1 de Matemática:");
console.log("Nota P1 de Matemática es: ", p1_mat);

p2_mat = prompt("Ingrese la nota P1 de Matemática:");
console.log("Nota P2 de Matemática es: ", p2_mat);

ef_mat = prompt("Ingrese la nota P1 de Matemática:");
console.log("Nota EF de Matemática es: ", ef_mat);

promedio_mat = p1_mat * P1 + p2_mat * P2 + ef_mat * PF;
producto_mat = promedio_mat * CREDITO_A;
console.log(
  "el promedio es: ",
  promedio_mat,
  "equivalente a: ",
  producto_mat,
  "créditos"
);

//Geografía
p1_geo = prompt("Ingrese la nota P1 de Geografía:");
console.log("Nota P1 de Geografía es: ", p1_geo);

p2_geo = prompt("Ingrese la nota P1 de Geografía:");
console.log("Nota P2 de Geografía es: ", p2_geo);

ef_geo = prompt("Ingrese la nota P1 de Geografía:");
console.log("Nota EF de Geografía es: ", ef_geo);

promedio_geo = p1_geo * P1 + p2_geo * P2 + ef_geo * PF;
producto_geo = promedio_geo * CREDITO_B;
console.log(
  "el promedio es: ",
  promedio_geo,
  "equivalente a: ",
  producto_geo,
  "créditos"
);

//Arte
p1_art = prompt("Ingrese la nota P1 de Arte:");
console.log("Nota P1 de Arte es: ", p1_art);

p2_art = prompt("Ingrese la nota P1 de Arte:");
console.log("Nota P2 de Arte es: ", p2_art);

ef_art = prompt("Ingrese la nota P1 de Arte:");
console.log("Nota EF de Arte es: ", ef_art);

promedio_art = p1_art * P1 + p2_art * P2 + ef_art * PF;
producto_art = promedio_art * CREDITO_C;
console.log(
  "el promedio es: ",
  promedio_art,
  "equivalente a: ",
  producto_art,
  "créditos"
);
