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
        false,
      ),
      new Maleta(
        1,
        "../assets/img/resources/maleta-programador.png",
        "Portátil, Auriculares y mouse...Siempre hay tiempo para analizar código, ¿no?",
        false,
      ),
      new Maleta(
        2,
        "../assets/img/resources/maleta-correcta.png",
        "Cuchillo, manual de supervivencia(¡Qué oportuno!) y cantimplora",
        true,
      ),
    ];
  }
  activarProximidad() {
    const maletas = document.querySelectorAll(".maleta");

    const handler = (x, y) => {
      maletas.forEach((maleta) => {
        const rect = maleta.getBoundingClientRect();

        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;

        const dx = x - centroX;
        const dy = y - centroY;

        const distancia = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (distancia < maxDist) {
          const intensidad = 1 - distancia / maxDist;

          maleta.style.transform = `
  scale(${1 + intensidad * 0.4})
`;

          maleta.style.filter = `
          brightness(${1 + intensidad * 0.5})
          drop-shadow(0 0 ${intensidad * 20}px rgba(255,255,255,0.6))
        `;
        } else {
          maleta.style.transform = "translate(-50%, -50%) scale(1)";
          maleta.style.filter = "none";
        }
      });
    };

    document.addEventListener("mousemove", (e) => {
      handler(e.clientX, e.clientY);
    });

    document.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      handler(touch.clientX, touch.clientY);
    });
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
    texto.innerHTML = ` Una pena que nadie haya podido ver tu heroicidad...
        Has conseguido abrirte paso por la oleada zombie.
        Sales de la habitación y te pones a explorar...`;

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
    imgContainer.classList.add("sala-fondo");

    const maletasWrapper = document.createElement("div");
    maletasWrapper.classList.add("maletas-wrapper");

    this.maletas.forEach((m) => {
      const maleta = document.createElement("img");

      maleta.src = "../assets/img/resources/maleta-cerrada.png";
      maleta.classList.add("maleta");

      maleta.addEventListener("click", () => {
        this.animarApertura(maleta, m);
      });

      maletasWrapper.appendChild(maleta);
    });

    imgContainer.appendChild(maletasWrapper);

    const textoContainer = document.createElement("div");
    textoContainer.classList.add("texto");

    const texto = document.createElement("p");
    texto.textContent =
      "Solo puedes llevarte una...¿Cuál es la que mejor te ayudará a sobrevivir?";

    textoContainer.appendChild(texto);

    imgContainer.appendChild(textoContainer);
    this.contenedor.appendChild(imgContainer);
    this.activarProximidad();
  }

  animarApertura(elemento, maleta) {
    elemento.classList.add("maleta-activa");

    this.contenedor.classList.add("fade-out");

    setTimeout(() => {
      this.contenedor.classList.remove("fade-out");

      this.abrirMaleta(maleta);

      this.contenedor.classList.add("fade-in");

      setTimeout(() => {
        this.contenedor.classList.remove("fade-in");
      }, 400);
    }, 300);
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
    textoContainer.classList.add("texto");

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
