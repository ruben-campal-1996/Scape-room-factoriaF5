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
    texto2.textContent = "(14 + 6) * (22 + 1) * (20/4) + (30 * 15)";

    // inputs
    const i1 = document.createElement("input");
    const i2 = document.createElement("input");
    const i3 = document.createElement("input");
    const i4 = document.createElement("input");

    i1.maxLength = 1;
    i2.maxLength = 1;
    i3.maxLength = 1;
    i4.maxLength = 1;

    // botón comprobar
    const comprobar = document.createElement("button");
    comprobar.textContent = "COMPROBAR";

    // resultado
    const resultado = document.createElement("p");

    comprobar.addEventListener("click", () => {
      const codigo = i1.value + i2.value + i3.value + i4.value;

      if (codigo === "2750") {
        reto1.innerHTML = "";
        const correcto = document.createElement("h2");
        correcto.textContent = "!CODIGO CORRECTO!";
        const botonOk = document.createElement("button");
        botonOk.textContent = "SIGUIENTE"
        

        reto1.appendChild(correcto)
        reto1.appendChild(botonOk)

      } else {
        reto1.innerHTML = "";
        const incorrecto = document.createElement("h2");
        incorrecto.textContent = "!CODIGO INCORRECTO!";
        const botonNook = document.createElement("button");
        botonNook.textContent = "REINTENTAR";     
        reto1.appendChild(incorrecto);
        reto1.appendChild(botonNook)
      }
    });

    reto1.appendChild(titulo2);
    reto1.appendChild(texto2);
    reto1.appendChild(i1);
    reto1.appendChild(i2);
    reto1.appendChild(i3);
    reto1.appendChild(i4);
    reto1.appendChild(comprobar);
    reto1.appendChild(resultado);
  });

  reto1.appendChild(titulo);
  reto1.appendChild(texto);
  reto1.appendChild(boton);
}
