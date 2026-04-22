const estado = localStorage.getItem("ganado");

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
  h1.className = "h1-final";
  h1.textContent = "EL MUNDO EXTERIOR DA MIEDO";
  contentContainer.appendChild(h1);
  const parraph = document.createElement("p");
  parraph.textContent = "¿TE ATREVES A INTENTARLO DE NUEVO?";
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
  h1.className = "h1-final";
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
}

if(estado != "ganado") {
  mostrarFinalBueno();
} else {
  mostrarFinalMalo();
}