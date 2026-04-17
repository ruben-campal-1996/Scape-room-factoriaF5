import { creator } from "./colaborators.js";

const main_container = document.querySelector(".main-container");

const container_creators = document.createElement("section");
container_creators.className = "creators-container";

const title = document.createElement("h1");
title.textContent = "Supervivientes de oro";
main_container.appendChild(title); 

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
    img_creator.alt = person.name;
    img_creator.className = "img-user";
    creatorCard.appendChild(img_creator);

    const socials_creator = document.createElement("section");
    socials_creator.className = "socials-container";
    creatorCard.appendChild(socials_creator);

    const url_creador = document.createElement("a");
    url_creador.href = person.url;
    url_creador.classList.add('creator-link', 'btn-git')
    url_creador.textContent = "Ver perfil"; 
    socials_creator.appendChild(url_creador);

    const linkedIn = document.createElement("a");
    linkedIn.href = person.linkedin;
    linkedIn.classList.add('creator-link', 'btn-linkedin');
    linkedIn.textContent = "Ver Linkedin"; 
    socials_creator.appendChild(linkedIn);

    container_creators.appendChild(creatorCard);
  });
}

mostrarCreadores();