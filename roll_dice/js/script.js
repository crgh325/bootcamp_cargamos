let numero = Math.round(Math.random() * 6 + 1);
let obj_dado = document.getElementById("salida");
let obj_mensaje = document.getElementById("mensaje");

function validarNumero(copy_numero, copy_obj_dato) {
  switch (copy_numero) {
    case 1:
      copy_obj_dato.innerHTML = "<img src='images/lado 1.jpg' />";
      break;
    case 2:
      copy_obj_dato.innerHTML = "<img src='images/lado 2.jpg' />";
      break;
    case 3:
      copy_obj_dato.innerHTML = "<img src='images/lado 3.jpg' />";
      break;
    case 4:
      copy_obj_dato.innerHTML = "<img src='images/lado 4.jpg' />";
      break;
    case 5:
      copy_obj_dato.innerHTML = "<img src='images/lado 5.jpg' />";
      break;
    case 6:
      copy_obj_dato.innerHTML = "<img src='images/lado 6.jpg' />";
      break;
  }
}

obj_dado.innerHTML = "<img src='images/rolling.gif' />";

setTimeout(validarNumero, 2000, numero, obj_dado);

obj_mensaje.innerHTML = "el numero es: " + numero;
