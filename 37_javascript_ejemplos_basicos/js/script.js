console.log("hola mundo");
/*
//algoritmo: area de trapesio
//entrada: base superior (b1), base inferior (b2) y altura (h)
//salida: area del trapecio (area)


//inicializacion de variables
let b1 = 0.0;
let b2 = 0.0;
let ht = 0.0;
let areat = 0.0;

//solicitar la informacion al usuario
b1 = prompt ("Ingresa la base superior");
console.log ("la base superior es:", b1);
b1= parseFloat(b1);

b2 = prompt ("Ingresa la base inferior");
console.log ("la base inferior es:", b2);
b2= parseFloat(b2);

h = prompt ("Ingresa la altura");
console.log ("la altura es:", ht);
h= parseFloat(h);

//calculo del area del trapesio
areat = (((b1 + b2)*ht)/2);
areat=parseFloat(areat)

//mostrar el resultado
console.log("el area del trapecio es:", areat);*/

/*
//algoritmo: area de cilindro
//entrada: radio (rd) y altura (h)
//salida: area del cilindro (area)


//inicializacion de variables
let rdc = 0.0;
let hc = 0.0;
let area = 0.0;
const pi = 3.1416;

//solicitar la informacion al usuario
rdc = prompt ("Ingresa el valor del radio:");
console.log ("valor del radio es:", rdc);
rdc= parseFloat(rdc);

hc = prompt ("Ingresa la altura:");
console.log ("valor del radio es:", hc);
hc = parseFloat(hc);

//calculo del area del cilindro
area = (2 * pi * rdc) + (2 * pi * (rdc * rdc)) ;
area=parseFloat(area);

//mostrar el resultado
console.log("el area del cilindro es:", area);*/

/*
//algoritmo: volumen de cilindro
//entrada: radio (rd) y altura (h)
//salida: volumen del cilindro (vl)

//inicializacion de variables
let rd = 0.0;
let h = 0.0;
let vl = 0.0;
const pi = 3.1416;

//solicitar la informacion al usuario
rdc = prompt ("Ingresa el valor del radio:");
console.log ("valor del radio es:", rdc);
rdc= parseFloat(rdc);

hc = prompt ("Ingresa la altura:");
console.log ("valor del radio es:", hc);
hc= parseFloat(hc);

//calculo del volumen del cilindro
vl = pi * (rdc * rdc) * hc;
vl=parseFloat(vl);

//mostrar el resultado
console.log("el volumen del cilindro es:", vl);*/

//algoritmo: movimiento rectilineo uniforme
//entrada: velocidad (ve) y altura (ti)
//salida: distancia (ds)

//inicializacion de variables
let ve = 0.0;
let ti = 0.0;
let di = 0.0;

//solicitar la informacion al usuario
ve = prompt("Ingresa la velocidad del viaje: (en kilometros)");
console.log("La velocidad durante el viaje es:", ve, "kilometros");
ve = parseFloat(ve);

ti = prompt("Ingresa el tiempo del recorrido: (en horas)");
console.log("El tiempo del recorrido es:", ti, "horas");
ti = parseFloat(ti);

//calculo la distancia recorrida
di = ve * ti;
di = parseFloat(di);

//mostrar el resultado
console.log("La distancia recorrida en el viaje es:", di, "kilometros");
