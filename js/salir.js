export function abandonar(contenedor, final) {
  const boton = document.createElement("button");
  boton.textContent = "ABANDONAR";
  boton.classList.add("btn-salir");
  boton.id = "abandonar";

  boton.addEventListener("click", () => {
    final; // 🔥 ejecuta final de jose luis
  });

  contenedor.appendChild(boton);
}
