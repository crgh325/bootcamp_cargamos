console.log("Hola mundo - arrays");

//Forma tradicional
let array = new Array("a", "b", "c");
console.log(array);

//mediante literales (preferida)

let array2 = ["a", "b", "c"]; //Array con 3 elementos
console.log(array2);

let literal = []; //Array vacio (0 elementos)
console.log(literal);

let mixto = ["a", 5, true]; // array mixto (string, number, boolean)
console.log(mixto);

let razas = ["poodle", "labrador", "terrier", "pastor"];
razas[0]; //poodle
razas[1]; // labrador
razas[2]; // terrier
razas[3]; // pastor
console.log(razas[3]); // pastor
const nro_razas = razas.length; //4
console.log("El numero de razas es: ", nro_razas);

//4     - 1 = 3
razas[nro_razas - 1]; // pastor
//          4      - 1 = 3
razas[razas.length - 1];

/*adelantando el tema de objetos*/

//propiedad o atributo => obj.propiedad
// funcion o método => obj.funcion()
//obj  .  metodo

/*AÑADIR O ELIMINAR ELEMENTOS*/

let baraja = ["5 espadas", "A corazones", "J diamante", "3 trebol"]; //4 cartas
console.log("mi baraja se compone de 4 cartas: ", baraja); // muestra las cartas

baraja.push("Q corazones"); //agrega una 5ta carta
console.log("agrego una al final", baraja);

let carta = baraja.pop(); // quita la ultima carta
console.log("ahora la baraja es: ", baraja);

let carta2 = baraja.pop(); // nuevamente quita la ultima carta
console.log("mis cartas ahora son: ", baraja); // muestra las cartas actuales (3)

baraja.unshift("K espadas"); // ahora agrega al inicio
console.log("ahora agragramos una al inicio", baraja);

let carta3 = baraja.shift(); // quita del inicio
console.log("al quitar una carta al inicio, tengo: ", baraja);

let carta4 = baraja.shift(); // nuevamente quita del inicio
console.log("si quito otra, ahora son: ", baraja);

//UTILIZANDO PUSH
const serie_num = [1, 2, 3];
console.log(serie_num);

serie_num.push(4, 5, 6);
console.log(serie_num);

serie_num.push(7, 8, 9);
console.log(serie_num);

//UTILIZANDO CONCAT
const serie_num_con = [1, 2, 3];
console.log(serie_num_con);

serie_num_con2 = serie_num_con.concat(4, 5, 6);
console.log(serie_num_con2);

serie_num_con3 = serie_num_con2.concat(7, 8, 9);
console.log(serie_num_con3);

//PUSH VS CONCAT

//usando PUSH
let barajaA = new Array("A diamantes", "4 corazones", "2 trebol", "4 trebol");
let barajaB = new Array("5 diamantes", "Q trebol", "8 corazones");

//barajaA.push(barajaB); // => genera un array dentro de otro array
//console.log(barajaA);

//usando CONCAT
let barajaC = barajaA.concat(barajaB);
console.log("baraja A", barajaA);
console.log("baraja B", barajaB);
console.log("baraja C", barajaC);

console.log("METODO SLICE()");

const frutas = [
  "manzana",
  "banana",
  "mango",
  "uva",
  "naranja",
  "pera",
  "cherry",
];
console.log(frutas);

//let sub_frutas = frutas.slice(1, 4); //el ultimo lo considera, sin mostrarlo ya que es el corte
//console.log(sub_frutas);

//let sub_frutas2 = frutas.slice(2, 5); //el ultimo lo considera, sin mostrarlo ya que es el corte
//console.log(sub_frutas2);

//console.log("METODO SPLICE()");

//let sub_frutasA = frutas.splice(2, 3); // desde 2 despliega 3 elementos
//console.log(frutas);
//console.log(sub_frutasA);

//let sub_frutasC = frutas.slice(1, 5);
//console.log(sub_frutasC);

//let sub_frutasD = frutas.splice(1, 4);
//console.log(sub_frutasD);

let sub_frutasB = frutas.splice(2, 3, "melon");
console.log(frutas);

console.log("BUSQUEDA Y COMPROBACION");

const sports = [
  "golf", //0
  "basketball", //1
  "tennis", //2
  "surfing", //3
  "arqueria", //4
  "karate", //5
  "ciclismo", //6
  "basketball", //7
  "karate", //8
];

const colores = "rojo, azul, verde";

console.log("VALIDAR QUE UNA VARIABLE ES DE TIPO ARRAY");
if (Array.isArray(sports)) {
  console.log("Sports es un arreglo");
} else {
  console.log("sports No es un arreglo");
}

if (Array.isArray(colores)) {
  console.log("Colores es un arreglo");
} else {
  console.log("Colores No es un arreglo");
}

console.log("VALIDAR SI UN ELEMENTO EXISTE");

console.log(sports.includes("tennis"));
console.log(sports.includes("tennis", 3)); // verifica si está incluido "tennis" desde la posicion 3

if (sports.includes("arqueria")) {
  console.log("El deporte Arqueria existe en la lista");
} else {
  console.log("El deporte Arqueria NO existe en la lista");
}

if (sports.includes("box")) {
  console.log("El deporte box existe en la lista");
} else {
  console.log("El deporte box NO existe en la lista");
}

console.log("OBTENER LA POSICION (INDICE) DE UN ELMENTO  .indexOf()");

console.log(sports.indexOf("karate"));
console.log(sports.indexOf("judo")); //-1=> no lo encontró

console.log("OBTENER LA POSICION DE LA ULTIMA APARICION");
console.log(sports.indexOf("basketball")); //1
console.log(sports.lastIndexOf("basketball")); //7

console.log(sports.indexOf("karate")); //5
console.log(sports.lastIndexOf("karate")); //8
console.log(sports.lastIndexOf("karate", 4)); //-1
console.log(sports.lastIndexOf("karate", 6)); //5
console.log(sports.lastIndexOf("karate", 8)); //8
