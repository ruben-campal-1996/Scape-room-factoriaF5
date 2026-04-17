export function reto1() {
  const contenedor = document.getElementById("reto-1");

  
  contenedor.innerHTML = "";
  contenedor.className = "pantalla-contexto";
  

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = "/img/resources/reto1.png";
  imgContainer.appendChild(img);

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

  boton.addEventListener("click", () => {
  contenedor.innerHTML = "";

  // 🔥 CAMBIO 1: usar classList en vez de className
  contenedor.classList.add("pantalla-reto");

  // 🔥 CAMBIO 2: contenedor general (para centrar todo)
  const wrapper = document.createElement("div");
  wrapper.classList.add("reto-container");

  // 🔥 CAMBIO 3: título
  const titulo2 = document.createElement("h2");
  titulo2.textContent = "RESUELVE PARA CONTINUAR:";

  // 🔥 CAMBIO 4: imagen del teclado
  const teclado = document.createElement("div");
  teclado.classList.add("teclado-img");

  // 🔥 CAMBIO 5: dividir operación en 2 líneas (como la imagen)
  const operacion1 = document.createElement("p");
  operacion1.textContent = "(4 + 6) × (2 + 1)";

  const operacion2 = document.createElement("p");
  operacion2.textContent = "(20 ÷ 4) + (3 × 2)";

  // 🔥 CAMBIO 6: contenedor de inputs
  const inputsContainer = document.createElement("div");
  inputsContainer.classList.add("codigo-container");

  // 🔥 CAMBIO 7: inputs dinámicos (más limpio)
  const inputs = [];

  for (let i = 0; i < 4; i++) {
    const input = document.createElement("input");
    input.maxLength = 1;
    input.classList.add("codigo-input");

    inputs.push(input);
    inputsContainer.appendChild(input);
  }

  // 🔥 CAMBIO 8: botón
  const comprobar = document.createElement("button");
  comprobar.textContent = "INTRODUCIR CODIGO";
  comprobar.classList.add("btn-rojo");

  // 🔥 CAMBIO 9: lógica usando array (más pro)
  comprobar.addEventListener("click", () => {
    const codigo = inputs.map(i => i.value).join("");

    if (codigo === "2750") {
      contenedor.innerHTML = "";

      const correcto = document.createElement("h2");
      correcto.textContent = "¡CÓDIGO CORRECTO!";

      const botonOk = document.createElement("button");
      botonOk.textContent = "SIGUIENTE";

      botonOk.addEventListener("click", () => {
        reto2();
      });

      contenedor.appendChild(correcto);
      contenedor.appendChild(botonOk);
    } else {
      contenedor.innerHTML = "";

      const incorrecto = document.createElement("h2");
      incorrecto.textContent = "¡CÓDIGO INCORRECTO!";

      const botonNook = document.createElement("button");
      botonNook.textContent = "REINTENTAR";

      botonNook.addEventListener("click", () => {
        reto1();
      });

      contenedor.appendChild(incorrecto);
      contenedor.appendChild(botonNook);
    }
  });

  // 🔥 CAMBIO 10: orden visual (muy importante)
  wrapper.appendChild(titulo2);
  wrapper.appendChild(teclado);
  wrapper.appendChild(operacion1);
  wrapper.appendChild(operacion2);
  wrapper.appendChild(inputsContainer);
  wrapper.appendChild(comprobar);

  contenedor.appendChild(wrapper);
});

  contenedor.appendChild(imgContainer);

  contenedor.appendChild(textoContainer);
  textoContainer.appendChild(titulo);
  textoContainer.appendChild(texto);
  textoContainer.appendChild(boton);
}
