/*//declaracionde la funcion "saludo General" con tipo CamelCase
function saludoGeneral(params) {
  //contenido de la funcion
  console.log("Hola,soy una funcion");
}

//Llamada

saludoGeneral();*/

//definir varibles
//entradas numero que correspoinde a la tabla
//salida la tabla de x numero
/*
function multiplicacion() {
  let i = 0;
  let numero = 1;
  for (i = 0; i <= 10; i++)
    console.log(numero + " x " + i + " = " + numero * i);
}

multiplicacion();*/

//declaracion de la funcion tablaDelUno()

function tablaDelUno() {
  for (i = 0; i <= 10; i++) console.log("1 x ", i, "=", 1 * i);
}

//bucle que ejecuta 3 veces la funcion tablaDelUno()
for (i = 0; i < 3; i++) tablaDelUno();
