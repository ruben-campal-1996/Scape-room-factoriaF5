export function iniciarReto3() {
  const contenedor = document.getElementById("reto-1"); //Cambiarlo por reto 2 en cuanto este

  /* ========================= */
  /*  PRIMERA PANTALLA         */
  /* ========================= */

  contenedor.innerHTML = "";
  contenedor.className = "pantalla-contexto"; // 👈 reutilizamos lo que se ha creado en reto1.js

  //IMAGEN AGARRAMOS LOS CONTENEDORES Y LOS MODIFICAMOS
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = "../assets/img/resources/victoria.png";
  imgContainer.appendChild(img);

  //TEXTO
  const textoContainer = document.createElement("div");
  textoContainer.classList.add("texto-container");

  const titulo = document.createElement("h1");
  titulo.textContent = "¡ESTAS MAMADÍSIMO!";

  const texto = document.createElement("p");
  texto.innerHTML = `
        Una pena que nadie haya podido ver tu heroicidad...
        Has conseguido abrirte paso por la oleada zombie.
        Sales de la habitación y te pones a explorar...
  `;

  const boton = document.createElement("button");
  boton.textContent = "EXPLORAR SALA";
  boton.classList.add("btn-rojo");

  // CAMBIO DE PANTALLA
  boton.addEventListener("click", () => {
    mostrarSeleccionMaletas();
  });

  //
  textoContainer.appendChild(titulo);
  textoContainer.appendChild(texto);
  textoContainer.appendChild(boton);

  contenedor.appendChild(imgContainer);
  contenedor.appendChild(textoContainer);
}

/* ========================= */
/*  SEGUNDA PANTALLA         */
/* ========================= */

function mostrarSeleccionMaletas() {
  const contenedor = document.getElementById("reto-1");

  contenedor.innerHTML = "";
  contenedor.className = "pantalla-contexto";

  //SALA
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = "../assets/img/resources/habitacion-maletas.png";
  imgContainer.appendChild(img);

  // ZONAS DE MALETAS
  const zonas = [
    { id: 0, top: "60%", left: "65%" },
    { id: 1, top: "65%", left: "78%" },
    { id: 2, top: "62%", left: "85%" }
  ];
  zonas.forEach(z => {
    const zona = document.createElement("div");
    zona.classList.add("zona-maleta");
    zona.style.top = z.top;
    zona.style.left = z.left;
    zona.dataset.id = z.id;

    zona.addEventListener("click", () => abrirMaleta(z.id));

    imgContainer.appendChild(zona);
  });

  //TEXTO DENTRO DE SALA
  const textoContainer = document.createElement("div");
  textoContainer.classList.add("texto-container");

  const texto = document.createElement("p");
  texto.textContent = "Solo puedes llevarte una...¿Cuál es la que mejor te ayudará a sobrevivir?";


  textoContainer.appendChild(texto);
 // MONTAJE
  contenedor.appendChild(imgContainer);
  contenedor.appendChild(textoContainer);
}

/* ========================= */
/*  TERCERA PANTALLA         */
/* ========================= */
function abrirMaleta(id) {
  const contenedor = document.getElementById("reto-1");

  contenedor.innerHTML = "";
  contenedor.className = "pantalla-contexto";

  // IMAGEN MALETAS
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");

  let textoContenido = "";

  if (id == 0) {
    img.src = "../assets/img/resources/maleta-sol.png";
    textoContenido = "Toalla, gameboy y crema solar... Lamentablemente no tenemos tiempo de broncearnos en la playa.";
  }

  if (id == 1) {
    img.src = "../assets/img/resources/maleta-programador.png";
    textoContenido = "Portátil, Auriculares y mouse...Siempre hay tiempo para analizar código, ¿no?";
  }

  if (id == 2) {
    img.src = "../assets/img/resources/maleta-correcta.png";
    textoContenido = "Cuchillo, manual de supervivencia(¡Qué oportuno!) y cantimplora";
  }

  img.id = "maletaImg";

  imgContainer.appendChild(img);

  // TEXTO
  const textoContainer = document.createElement("div");
  textoContainer.classList.add("texto-container");

  const texto = document.createElement("p");
  texto.textContent = textoContenido;

  //  BOTÓN ELEGIR
  const botonElegir = document.createElement("button");
  botonElegir.textContent = "ELEGIR";
  botonElegir.classList.add("btn-rojo");

  //BOTON VOLVER 
const botonVolver = document.createElement("button");
botonVolver.textContent = "VOLVER";
botonVolver.classList.add("btn-rojo");

botonVolver.addEventListener("click", () => {
  mostrarSeleccionMaletas();
});

  // 🔥 EVENTO ELEGIR
  botonElegir.addEventListener("click", () => {
    comprobarResultado(id);
  });

  textoContainer.appendChild(texto);
  textoContainer.appendChild(botonElegir);
 textoContainer.appendChild(botonVolver);
  // 🔹 MONTAJE
  contenedor.appendChild(imgContainer);
  contenedor.appendChild(textoContainer);

}



//RESULTADO
function comprobarResultado(id) {

  //MALETA  CORRECTA (maleta 3 → id 2)
  if (id == 2) {
    localStorage.setItem("estadoJuego", "ganado");
    window.location.href = "./templates/final.html";
    return;
  }

  // MALETA INCORRECTA
  localStorage.setItem("estadoJuego", "perdido");
  window.location.href = "./templates/final.html";
}


