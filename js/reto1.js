export function reto1() {
  const reto1 = document.getElementById("reto-1");

  reto1.innerHTML = "";

  const titulo = document.createElement("h1");
  titulo.textContent = "PRIMER RETO";

  const texto = document.createElement("p");
  texto.textContent =
    "Te despiertas en una habitación desconocida. Estás algo aturdido... no recuerdas nada. Revisando la sala, te fijas en la puerta, pero está cifrada... ¿Qué contraseña tendrá?";

  const boton = document.createElement("button");
  boton.textContent = "ACERCARSE A LA PUERTA";

  boton.addEventListener("click", () => {
    reto1.innerHTML = "";

    const titulo2 = document.createElement("h2");
    titulo2.textContent = "RESUELVE PARA CONTINUAR";

    const texto2 = document.createElement("p");
    texto2.textContent = "(14 + 6) * (22 + 1) * (20/4) + (30 *15)";

    const dig1 = document.createElement("input");
    const dig2 = document.createElement("input");
    const dig3 = document.createElement("input");
    const dig4 = document.createElement("input");

    const comprobar = document.createElement("button");
    comprobar.textContent = "INTRODUCE CÓDIGO";

    const resultado = document.createElement("p");

    comprobar.addEventListener("click", () => {
      if (input.value === "2750") {
        resultado.textContent = "✔ Correcto, puerta abierta";
      } else {
        resultado.textContent = "❌ Incorrecto";
      }
    });

    reto1.appendChild(titulo2);
    reto1.appendChild(texto2);
    reto1.appendChild(dig1);
    reto1.appendChild(comprobar);
    reto1.appendChild(resultado);
  });

  reto1.appendChild(titulo);
  reto1.appendChild(texto);
  reto1.appendChild(boton);
}
