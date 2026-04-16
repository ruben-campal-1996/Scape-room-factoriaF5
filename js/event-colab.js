import { creator } from "./colaborators.js";

const main_container = document.querySelector(".main-container");

const container_creators = document.createElement("section");
container_creators.className = "creators-container";

const title = document.createElement("h2");
title.textContent = "Supervivientes de oro";
container_creators.appendChild(title); 

main_container.appendChild(container_creators);

function mostrarCreadores() {
  creator.forEach(person => {
    const creatorCard = document.createElement("section");
    creatorCard.className = "creator";

    const name = document.createElement("h3");
    name.textContent = person.name;
    creatorCard.appendChild(name);

    const img_creator = document.createElement("img");
    img_creator.src = person.img;
    img_creator.alt = person.name; // Good for accessibility!
    img_creator.className = "img-user";
    creatorCard.appendChild(img_creator);

    const url_creador = document.createElement("a");
    url_creador.href = person.url;
    url_creador.className = "creator-link";
    url_creador.textContent = "Ver perfil"; 
    creatorCard.appendChild(url_creador);

    container_creators.appendChild(creatorCard);
  });
}

mostrarCreadores();