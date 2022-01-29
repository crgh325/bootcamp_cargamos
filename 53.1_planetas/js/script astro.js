console.log("hello");

let astronauts = [];
// ASYNC GETTERS

async function getAstronautsData() {
  // get -> Obtener (Convención)
  //1. Hacer la petición (GET)
  // URL : https://handlers.education.launchcode.org/static/planets.json
  const response = await fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  );
  //2. Validar la respuesta
  if (!response.ok) throw Error(response.statusText); // Se detiene la ejecución
  //3. Extraer la informacion
  const data = await response.json();
  //4. Devolver la información
  return data;
}

// MAIN

// const planets = getPlanetsData(); // -> Promesa  (no la data)

async function main() {
  // obtener informacion de planetas
  astronauts = await getAstronautsData();
  let flag = true;
  astronauts.forEach((astronauts) => {
    const slides = document.querySelector("#carousel > .carousel-inner");
    console.log(slides);
    slides.innerHTML += ` 
        <div class="carousel-item ${flag ? "active" : ""}">
        <img
          src="${astronauts.picture}"
          class="d-block w-100"
          alt="..."
        />
        </div> `;
    flag = false;
  });

  console.log(astronauts);
}

// Llamar funcion principal
main();
