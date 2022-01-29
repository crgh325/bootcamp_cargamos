//SIEMPRE PRIMERO LAS FUNCIONES

function tablaMultiplicar(tabla, hasta = 10) {
  for (let i = 0; i <= hasta; i++) console.log(tabla, "x", i, "=", tabla * i);
}

// Y LUEGO EL MAIN

//Ejecucion
//tablaMultiplicar(1, 10); // tabla del 1
//tablaMultiplicar(5, 10); // tabla del 5
