const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open");
const cerrar = document.querySelector("#close");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

import { reto1 } from "./reto1.js";

reto1();




