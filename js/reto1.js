import { iniciarJuego, completarReto, abandonarJuego } from "./temporizador.js";

export function reto1() {
  const contenedor = document.getElementById("reto-1");


     // ESTO HACE QUE EL BOTON DE ABANDONAR FUNCIONE JEJE
document.addEventListener("DOMContentLoaded", () => {
  const btnAbandonar = document.getElementById("abandonar");

  if (btnAbandonar) {
    btnAbandonar.addEventListener("click", abandonarJuego);
  }
});     // ESTO HACE QUE EL BOTON DE ABANDONAR FUNCIONE JEJE

  iniciarJuego();

  contenedor.innerHTML = "";
  contenedor.className = "pantalla-contexto";

  // 🔹 IMAGEN
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = "../assets/img/resources/reto 1.png";
  imgContainer.appendChild(img);

  // 🔹 TEXTO
  const textoContainer = document.createElement("div");
  textoContainer.classList.add("texto-container");

  const titulo = document.createElement("h1");
  titulo.textContent = "PRIMER RETO";

  const texto = document.createElement("p");
  texto.textContent =
    "Te despiertas en una habitación desconocida. Estás algo aturdido... no recuerdas nada. Revisando la sala, te fijas en la puerta, pero está cifrada... ¿Qué contraseña tendrá?";

  const boton = document.createElement("button");
  boton.textContent = "ACERCARSE A LA PUERTA";
  boton.classList.add("btn-rojo");

  // 🔥 EVENTO PRINCIPAL
  boton.addEventListener("click", () => {
    contenedor.innerHTML = "";
    contenedor.classList.add("pantalla-reto");

    const wrapper = document.createElement("div");
    wrapper.classList.add("reto-container");

    const titulo2 = document.createElement("h1");
    titulo2.textContent = "RESUELVE PARA CONTINUAR:";

    const teclado = document.createElement("div");
    teclado.classList.add("teclado-img");

    const operacion1 = document.createElement("p");
    operacion1.textContent = "(8 - 5) x 4";

    const operacion2 = document.createElement("p");
    operacion2.textContent = "(24 ÷ 3) + (4 x 6)";

    // 🔹 INPUTS
    const inputsContainer = document.createElement("div");
    inputsContainer.classList.add("codigo-container");

    const inputs = [];

    for (let i = 0; i < 4; i++) {
      const input = document.createElement("input");
      input.maxLength = 1;
      input.classList.add("codigo-input");

      inputs.push(input);
      inputsContainer.appendChild(input);
    }

    // 🔹 BOTÓN COMPROBAR
    const comprobar = document.createElement("button");
    comprobar.textContent = "INTRODUCIR CODIGO";
    comprobar.classList.add("btn-rojo");

    // 🔥 VALIDACIÓN
    comprobar.addEventListener("click", () => {
      const codigo = inputs.map(i => i.value).join("");

      if (codigo === "1234") {
        contenedor.innerHTML = "";

        const resultadoWrapper = document.createElement("div");
        resultadoWrapper.classList.add("resultado-container");

        const correcto = document.createElement("h1");
        correcto.textContent = "¡CÓDIGO CORRECTO!";
        correcto.classList.add("correcto-texto");

        const botonOk = document.createElement("button");
        botonOk.textContent = "SIGUIENTE";
        botonOk.classList.add("btn-verde");

        botonOk.addEventListener("click", () => {
          completarReto();
        });

        resultadoWrapper.appendChild(correcto);
        resultadoWrapper.appendChild(botonOk);

        contenedor.appendChild(resultadoWrapper);

      } else {
        contenedor.innerHTML = "";
        contenedor.classList.add("pantalla-reto");

        const errorWrapper = document.createElement("div");
        errorWrapper.classList.add("resultado-container");  /*lo corregí para ahorrar lineas de codigo*/

        const incorrecto = document.createElement("h1"); /* todos son h1*/
        incorrecto.textContent = "¡CÓDIGO INCORRECTO!";
        incorrecto.classList.add("error-texto");

        const botonReintentar = document.createElement("button");
        botonReintentar.textContent = "REINTENTAR";
        botonReintentar.classList.add("btn-rojo");

        botonReintentar.addEventListener("click", () => {
          boton.click();
        });

        errorWrapper.appendChild(incorrecto);
        errorWrapper.appendChild(botonReintentar);

        contenedor.appendChild(errorWrapper);
      }
    });

    // 🔹 MONTAJE DEL RETO
    wrapper.appendChild(titulo2);
    wrapper.appendChild(teclado);
    wrapper.appendChild(operacion1);
    wrapper.appendChild(operacion2);
    wrapper.appendChild(inputsContainer);
    wrapper.appendChild(comprobar);

    contenedor.appendChild(wrapper);
  });

  // 🔹 PANTALLA INICIAL
  contenedor.appendChild(imgContainer);
  textoContainer.appendChild(titulo);
  textoContainer.appendChild(texto);
  textoContainer.appendChild(boton);

  contenedor.appendChild(textoContainer);
}



