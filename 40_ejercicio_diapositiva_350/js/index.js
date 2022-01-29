let contador = 1;
let dia = "";
let feriado = "";

while (dia != "salir"){
    dia = prompt("¿Que dia es hoy");
    feriado = prompt("¿es feriado?");

    document.write (`ingresaste ${dia}, y`);
    document.write (`${feriado} es feriado`);
    }
}

    if(dia == "lunes" || dia == "martes" || dia == "miercoles"){
        document.write (`si trabajas </br>`);
        if (dia == "lunes" && feriado == "si"){
            document.write(`pero te pagan el doble`);
        }
    }
    if(dia == "sabado" || dia == "domingo"){
        document.write (`no trabajas es weekend</br>`);
        
    }
    document.write(</br>)   
}

document.write(`</be>finalizo el programa`);
