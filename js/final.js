const estado = localStorage.getItem("estadoJuego");

const main = document.querySelector(".main-container");
const hero = document.createElement("section");
hero.id = "hero";
main.appendChild(hero);
const hero_container = document.createElement("div");
hero_container.className = "hero-container";
hero.appendChild(hero_container);

function mostrarFinalBueno() {
  const img_container = document.createElement("div");
  img_container.className = "img-container";
  hero_container.appendChild(img_container);
  const img = document.createElement("img");
  img.src = "../assets/img/resources/salida-scape.png";
  img_container.appendChild(img);
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  hero.appendChild(contentContainer);
  const h1 = document.createElement("h1");
  h1.textContent = "¡FELICIDADES!";
  contentContainer.appendChild(h1);
  const parraph = document.createElement("p");
  parraph.textContent = "Has logrado escapar.";
  contentContainer.appendChild(parraph);
  const a_return = document.createElement("a");
  a_return.href = "../index.html";
  a_return.className = "btn-return";
  a_return.textContent = "Volver al inicio.";
  contentContainer.appendChild(a_return);
  
}

function mostrarFinalMalo() {
  const img_container = document.createElement("div");
  img_container.className = "img-container";
  hero_container.appendChild(img_container);
  const img = document.createElement("img");
  img.src = "../assets/img/resources/game-over.png";
  img_container.appendChild(img);
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  hero.appendChild(contentContainer)
  const h1 = document.createElement("h1");
  h1.textContent = "¡HAS PERDIDO!";
  contentContainer.appendChild(h1);
  const parraph = document.createElement("p");
  parraph.textContent = "No has logrado escapar.";
  contentContainer.appendChild(parraph);
  const a_return = document.createElement("a");
  a_return.href = "../index.html";
  a_return.className = "btn-return";
  a_return.textContent = "Volver al inicio.";
  contentContainer.appendChild(a_return);
  const audioDerrota = document.createElement("audio");
  audioDerrota.src = "/assets/themes/zombie-sound.mp3";
  audioDerrota.id = "audio-derrota";
  audioDerrota.preload = "auto";
  audioDerrota.play();
}

if(estado == "ganado") {
  mostrarFinalBueno();
} else {
  mostrarFinalMalo();
}