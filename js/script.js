import { reto1 } from "./reto1.js";
import { volumen } from "./volume.js";

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open");
const cerrar = document.querySelector("#close");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

// JUEGO (solo si existe el contenedor)   
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("reto");

  if (contenedor) {
    reto1();
    volumen();
  }
});
