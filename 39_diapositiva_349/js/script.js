//ejemplo while

//entrada: solo variable contador
/*
let contador = 1;
let num = 0;



while ((num != 7 && contador <5) || num == 11){
  let dato = prompt("introduce número del 1 al 10:", "");
  num = parseInt(dato);

  document.write(`El numero introdicido es ${num} </br>`);

  document.write(`El contador es ${contador} </br>`);

  contador++;

  if (num = 7) 
  document.write(
    `</br><h2> Fin del programa <br>contador ya NO es menor que 5.</hs>`
}

document.write(
  `</br><h2> Fin del programa <br>contador ya NO es menor que 5.</hs>`
);

document.write(`</br> último numero introducido es ${num}`);*/

let contador = 1;
let dia = "lunes";

while (
  dia == "lunes" ||
  dia == "martes" ||
  dia == "miercoles" ||
  dia == "jueves" ||
  (dia == "viernes" && contador < 4)
) {
  dia = prompt("¿Que dia es hoy?");

  document.write(`hoy es ${dia}, si trabajas</br>`);

  contador++;
}
document.write(`ingresaste un dia no valido`);
