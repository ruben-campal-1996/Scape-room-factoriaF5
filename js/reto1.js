//import { createElement } from "react";
import { iniciarJuego, completarReto, abandonarJuego } from "./temporizador.js";
import { reto2Contexto } from "./reto2.js";
import { iniciarReto3 } from "./reto3.js"; /* PARA ENLAZAR LOS RETOS ENTRE ELLOS DEBERIAMOS AQUI AÑADIR EL RETO 2 EN CUANTO ESTE*/
 
export function reto1() {
  const contenedor = document.getElementById("reto-1");

  // ESTO HACE QUE EL BOTON DE ABANDONAR FUNCIONE JEJE
  document.addEventListener("DOMContentLoaded", () => {
    const btnAbandonar = document.getElementById("abandonar");

    if (btnAbandonar) {
      btnAbandonar.addEventListener("click", abandonarJuego);
    }
  }); // ESTO HACE QUE EL BOTON DE ABANDONAR FUNCIONE JEJE

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
    // const inputsContainer = document.createElement("div");
    // inputsContainer.classList.add("codigo-container");

    // const inputs = [];

    // for (let i = 0; i < 4; i++) {
    //   const input = document.createElement("input");
    //   input.maxLength = 1;
    //   input.classList.add("codigo-input");

    //   inputs.push(input);
    //   inputsContainer.appendChild(input);
    // }

    // Inputs carrusel

    const inputs = [];
    const displays = [];

    const inputsContainer = document.createElement("div");
    inputsContainer.classList.add("codigo-container");

    for (let i = 0; i < 4; i++) {
      const cont = document.createElement("div");
      cont.classList.add("digit-container");

      const up = document.createElement("button");
      up.classList.add("btn-flecha");
      up.textContent = "▲";

      const display = document.createElement("div");
      display.classList.add("digit-display");
      display.textContent = "0";
      display.tabIndex = 0;

      const down = document.createElement("button");
      down.classList.add("btn-flecha");
      down.textContent = "▼";

      let valor = 0;

      // 🔼 Sube
      up.addEventListener("click", () => {
        valor = (valor + 1) % 10;
        display.textContent = valor;
        display.focus();
        });

      // 🔽 BAja
      down.addEventListener("click", () => {
        valor = (valor - 1 + 10) % 10;
        display.textContent = valor;
        display.focus();
      });

      // ⌨️ TECLADO
      display.addEventListener("keydown", (e) => {
        if (/^[0-9]$/.test(e.key)) {
          valor = Number(e.key);
          display.textContent = valor;

          if (i < 3) displays[i + 1].focus();
        }

        if (e.key === "Backspace" && i > 0) {
          displays[i - 1].focus();
        }

        e.preventDefault();
      });

      cont.appendChild(up);
      cont.appendChild(display);
      cont.appendChild(down);

      inputs.push(() => valor);
      displays.push(display);

      inputsContainer.appendChild(cont);
    }

    // 🔹 BOTÓN COMPROBAR
    const comprobar = document.createElement("button");
    comprobar.textContent = "INTRODUCIR CODIGO";
    comprobar.classList.add("btn-rojo");

    // 🔥 VALIDACIÓN
    comprobar.addEventListener("click", () => {
      const codigo = inputs.map((fn) => fn()).join("");

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
          const main = document.querySelector("main")
          contenedor.innerHTML= ""
          contenedor.className = ""
          reto2Contexto();
        });

/* botonOk.addEventListener("click", () => {
  contenedor.innerHTML = '<div id="reto3-content"></div>'; 
  iniciarReto3();
}); */
        
        resultadoWrapper.appendChild(correcto);
        resultadoWrapper.appendChild(botonOk);

        contenedor.appendChild(resultadoWrapper);
      } else {
        contenedor.innerHTML = "";
        contenedor.classList.add("pantalla-reto");

        const errorWrapper = document.createElement("div");
        errorWrapper.classList.add(
          "resultado-container",
        ); /*lo corregí para ahorrar lineas de codigo*/

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
