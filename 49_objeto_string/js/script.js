const texto1 = "¡Hola a todos!";
const texto2 = "pablito clavo un clavito en la calva de un calvito";

const texto3 = new String("¡Hola a todos!");
const texto4 = new String("otro mensaje de texto");

console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);

console.log(`El texto: "${texto2}" tiene ${texto2.length} caracteres`);

console.log("================================");

//metodos de posiciones

let frase1 = "camaron que se duerme se lo lleva la corriente";
let frase2 = "en boca cerrada no entran moscas";
let frase3 = "feliz como una lombriz";
let frase4 = "De tal palo tal astilla";
let frase5 = "Mal de muchos,  consuelo de pocos";
let frase6 = "¡Chinchilete!,  ¡yo machete!";
let frase7 = "mas vale tarde que nunca";
let frase8 = "el pato que no conoce el oceano en cualquier lago es feliz";
let frase9 = "ya nos cayo el chahuistle";
let frase10 = "No hay peor ciego que el que no quiere ver";

console.log(frase3);
console.log(frase3.length);
console.log(frase3.charAt(0));
console.log(frase3.charAt(6));
console.log(frase3[11]);
console.log(frase3[15]);

console.log(frase7);
frase7 = frase7.concat(" que");
frase7 = frase7 + " tonto el";
frase7 = `${frase7} que no `;
frase7 += "lo haga";

console.log(frase7);

frase7 = new String(frase7);

console.log(frase7.indexOf("u"));
console.log(frase7.indexOf("tonto")); //busca la posicion de la palabra
console.log(frase7.indexOf("taza")); //-1 => no existe la palabra
console.log(frase7.indexOf("que")); //15
console.log(frase7.indexOf("que", 18)); // 25
console.log(frase7.indexOf("que", 48)); // -1 => no existe desde la posicion 38

console.log("================================");

console.log(frase7.lastIndexOf("que")); // 35
console.log(frase7.lastIndexOf(" ")); // 35
console.log(frase7.lastIndexOf("que", 24)); // 15

console.log(frase7.lastIndexOf(" ", 32)); // 28 busqueda hacia arriba

console.log("================================");
console.log("el + sirve para concatenar y a la vez para sumar");
let direccion = "Calle Santa Rosa" + 1 + 2 + 3;
console.log(direccion);
let direccion2 = "Calle Santa Rosa " + (1 + 2 + 3);
console.log(direccion2);

console.log("================================");
console.log("metodos de busqueda");

console.log("Manz".startsWith("M")); // true
console.log("Manz".startsWith("a", 1)); // true
console.log("Manz".endsWith("o")); // false
console.log("Manz".endsWith("n", 3)); // true
console.log("Manz".includes("an")); // true
console.log("Manz".includes("M", 1)); // false

frase10 = new String(frase10);
console.log(frase10);
console.log(frase10.startsWith("No hay pe"));
console.log(frase10.startsWith("ciego"));
console.log(frase10.startsWith("No"));
console.log(frase10.startsWith("no"));

console.log(frase10.startsWith("ciego", 12));
console.log(frase10.endsWith("quiere ver"));
console.log(frase10.endsWith("kiere ver"));
console.log(frase10.endsWith("ciego", 17)); // No hay peor ciego

console.log(frase10.includes("peor"));
console.log(frase10.includes("peor"));

frase1 = new String(frase1);
console.log(frase1);

console.log(frase1.startsWith("camaron"));
console.log(frase1.search("^camaron"));
console.log(frase1.endsWith("corriente"));
console.log(frase1.search("corriente$"));

frase9 = new String(frase9);
console.log(frase9.search("^ya nos cayo el chahuistle$"));

let numero = "163";
console.log(numero.match("^[0-9]*$"));
console.log(numero.search("^[0-9] [0-5] [0-9]$"));

console.log("================================");
console.log("metodos para transformar");
