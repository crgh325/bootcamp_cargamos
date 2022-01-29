/*const objeto = new Object(); // manera tradicional

const objeto2 = {}; // manera resumida (LITERAL)

const player = {
  name: "Manz",
  lives: 99,
  strength: 10,
};

//notacion con puntos
console.log(player.name);
console.log(player.lives);
console.log(player["strength"]);

//notacion con corchetes
console.log(player["name"]);
console.log(player["lives"]);

let vehiculo = {
  color: "blanco",
  marca: "toyota",
  modelo: "corola",
  kilometros: 0,
  año: 2021,
  cantidad_puertas: 4,
  nuevo: true,
  gasolina: true,
  automatico: false,

  arrancar() {
    return "Estoy arrancando...";
  },

  acelerar() {
    return "Estoy acelerando...";
  },

  frenando() {
    return "Estoy frenando...";
  },
};

console.log(vehiculo.año);
console.log(vehiculo.arrancar); // devuelve todo el codigo de la funcion
console.log(vehiculo.arrancar()); // ejecuta la funcion
console.log(vehiculo.acelerar());

const computadora = {
  color: "negro",
  marca: "dell",
  modelo: "XV",
  ram: 8,
  procesador: "ryzen",
  pantalla: "24",
  sistema: "windows",
  nuevo: true,

  encender() {
    return "Estoy encendiendo...";
  },

  guardar() {
    return "Estoy guardando...";
  },
};*/

let estadio = {
  name: "Lusail",
  country: "Catar",
  competition: "Champions",
  aforo: 80000,
  match(equipo_A, equipo_B) {
    let goles_A = 0;
    let goles_B = 0;
    let resultado = "";

    goles_A = Math.round(Math.random() * 5);
    goles_B = Math.round(Math.random() * 5);

    /*resultado =
      equipo_A.name +
      " vs " +
      equipo_B.name +
      "Score: " +
      goles_A +
      " - " +
      goles_B;*/

    equipo_A.goles += goles_A; //equipo_A.goles = equipo_A.goles + goles_A;
    equipo_B.goles += goles_B;

    if (goles_A > goles_B) {
      equipo_A.puntos += 3;
    }

    if (goles_A < goles_B) {
      equipo_B.puntos += 3;
    }

    if (goles_A == goles_B) {
      equipo_A.puntos += 1;
      equipo_B.puntos += 1;
    }

    resultado = ` ${equipo_A.name} VS ${equipo_B.name} Score: ${goles_A} - ${goles_B}`;

    return resultado;
  },
};

let team_psg = {
  name: "PSG",
  country: "France",
  puntos: 0,
  goles: 0,
  color: "azul y blanco",
};

let team_america = {
  name: "America",
  country: "Mexico",
  color: "amarillo",
  puntos: 0,
  goles: 0,
};

let team_cristal = {
  name: "Cristal",
  country: "Peru",
  color: "celeste",
  puntos: 0,
  goles: 0,
};

let team_comunicaciones = {
  name: "Comunicaciones",
  country: "Guatemala",
  color: "blanco",
  puntos: 0,
  goles: 0,
};

//MAIN

const resultado = estadio.match(team_america, team_psg);

console.log(estadio.match(team_america, team_psg));
console.log(estadio.match(team_cristal, team_psg));
console.log(estadio.match(team_comunicaciones, team_psg));
console.log(estadio.match(team_cristal, team_comunicaciones));
console.log(estadio.match(team_cristal, team_america));
console.log(estadio.match(team_comunicaciones, team_america));

console.log(team_comunicaciones);
console.log(team_cristal);
console.log(team_psg);
console.log(team_america);
