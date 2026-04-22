import { iniciarJuego, completarReto, abandonarJuego } from "./temporizador.js";

/*  CLASE MALETA           */

class Maleta {
  constructor(id, imagen, texto, correcta) {
    this.id = id;
    this.imagen = imagen;
    this.texto = texto;
    this.correcta = correcta;
  }

  esCorrecta() {
    return this.correcta;
  }
}
/* CLASE JUEGO  */

class JuegoReto3 {
  constructor() {
    this.contenedor = document.getElementById("reto-1");

    this.maletas = [
      new Maleta(
        0,
        "../assets/img/resources/maleta-sol.png",
        "Toalla, gameboy y crema solar... Lamentablemente no tenemos tiempo de broncearnos en la playa.",
        false
      ),
      new Maleta(
        1,
        "../assets/img/resources/maleta-programador.png",
        "Portátil, Auriculares y mouse...Siempre hay tiempo para analizar código, ¿no?",
        false
      ),
      new Maleta(
        2,
        "../assets/img/resources/maleta-correcta.png",
        "Cuchillo, manual de supervivencia(¡Qué oportuno!) y cantimplora",
        true
      )
    ];
  }

  iniciar() {
    this.mostrarIntro();
  }

  /* PANTALLA 1  */
  
  mostrarIntro() {
    this.contenedor.innerHTML = "";
    this.contenedor.className = "pantalla-contexto";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = "../assets/img/resources/victoria.png";
    imgContainer.appendChild(img);

    const textoContainer = document.createElement("div");
    textoContainer.classList.add("texto-container");

    const titulo = document.createElement("h1");
    titulo.textContent = "¡ESTAS MAMADÍSIMO!";

    const texto = document.createElement("p");
    texto.innerHTML = `
        Una pena que nadie haya podido ver tu heroicidad...
        Has conseguido abrirte paso por la oleada zombie.
        Sales de la habitación y te pones a explorar...
    `;

    const boton = document.createElement("button");
    boton.textContent = "EXPLORAR SALA";
    boton.classList.add("btn-rojo");

    boton.addEventListener("click", () => {
      this.mostrarSeleccion();
    });

    textoContainer.appendChild(titulo);
    textoContainer.appendChild(texto);
    textoContainer.appendChild(boton);

    this.contenedor.appendChild(imgContainer);
    this.contenedor.appendChild(textoContainer);
  }

  
  /* PANTALLA 2 */
  
  mostrarSeleccion() {
    this.contenedor.innerHTML = "";
    this.contenedor.className = "pantalla-contexto";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = "../assets/img/resources/habitacion-maletas.png";
    imgContainer.appendChild(img);

    const zonas = [
      { id: 0, top: "60%", left: "65%" },
      { id: 1, top: "65%", left: "78%" },
      { id: 2, top: "62%", left: "85%" }
    ];

    zonas.forEach(z => {
      const zona = document.createElement("div");
      zona.classList.add("zona-maleta");
      zona.style.top = z.top;
      zona.style.left = z.left;

      zona.addEventListener("click", () => {
        const maleta = this.maletas.find(m => m.id == z.id);
        this.abrirMaleta(maleta);
      });

      imgContainer.appendChild(zona);
    });

    const textoContainer = document.createElement("div");
    textoContainer.classList.add("texto-container");

    const texto = document.createElement("p");
    texto.textContent = "Solo puedes llevarte una...¿Cuál es la que mejor te ayudará a sobrevivir?";

    textoContainer.appendChild(texto);

    this.contenedor.appendChild(imgContainer);
    this.contenedor.appendChild(textoContainer);
  }

  
  /* PANTALLA 3 */
 
  abrirMaleta(maleta) {
    this.contenedor.innerHTML = "";
    this.contenedor.className = "pantalla-contexto";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = maleta.imagen;
    img.id = "maletaImg";

    imgContainer.appendChild(img);

    const textoContainer = document.createElement("div");
    textoContainer.classList.add("texto-container");

    const texto = document.createElement("p");
    texto.textContent = maleta.texto;

    const botonElegir = document.createElement("button");
    botonElegir.textContent = "ELEGIR ESTA MALETA";
    botonElegir.classList.add("btn-rojo");

    const botonVolver = document.createElement("button");
    botonVolver.textContent = "VOLVER";
    botonVolver.classList.add("btn-secundario");

    botonVolver.addEventListener("click", () => {
      this.mostrarSeleccion();
    });

    botonElegir.addEventListener("click", () => {
      this.comprobarResultado(maleta);
    });

    textoContainer.appendChild(texto);
    textoContainer.appendChild(botonElegir);
    textoContainer.appendChild(botonVolver);

    this.contenedor.appendChild(imgContainer);
    this.contenedor.appendChild(textoContainer);

    img.addEventListener("click", () => {
      this.mostrarSeleccion();
    });
  }

 
  /* RESULTADO  */

  comprobarResultado(maleta) {
    if (maleta.esCorrecta()) {
      completarReto();
      return;
    }

    abandonarJuego();
  }
}

/*  INICIO                 */

export function iniciarReto3() {
  const juego = new JuegoReto3();
  juego.iniciar();
}