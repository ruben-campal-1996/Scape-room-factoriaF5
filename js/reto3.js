import { iniciarJuego, completarReto, abandonarJuego } from "./temporizador.js";

/*  CLASE MALETA           */

class Maleta {
  constructor(id, imagen, texto, correcta, objetos) {
    this.id = id;
    this.imagen = imagen;
    this.texto = texto;
    this.correcta = correcta;
    this.objetos = objetos;
  }

  esCorrecta() {
    return this.correcta;
  }
}

/* CLASE JUEGO  */

class JuegoReto3 {
  constructor() {
    this.contenedor = document.getElementById("reto");

    // 🎧 AUDIO (solo apertura de maleta)
    this.soundMaleta = document.getElementById("interaccion-maleta");

    this.maletas = [
      new Maleta(
        0,
        "../assets/img/resources/maleta-abierta.png",
        "Toalla, gameboy y crema solar... Lamentablemente no tenemos tiempo de broncearnos en la playa.",
        false,
        [
          "../assets/img/resources/toalla.png",
          "../assets/img/resources/gameboy.png",
          "../assets/img/resources/crema.png",
        ],
      ),
      new Maleta(
        1,
        "../assets/img/resources/maleta-abierta.png",
        "Portátil, Auriculares y manual de git...Siempre hay tiempo para analizar código, ¿no?",
        false,
        [
          "../assets/img/resources/portatil.png",
          "../assets/img/resources/auriculares.png",
          "../assets/img/resources/libro-sagrado.png",
        ],
      ),
      new Maleta(
        2,
        "../assets/img/resources/maleta-abierta.png",
        "Cuchillo, manual de supervivencia(¡Qué oportuno!) y cantimplora",
        true,
        [
          "../assets/img/resources/cuchillo.png",
          "../assets/img/resources/manual.png",
          "../assets/img/resources/cantimplora.png",
        ],
      ),
    ];
  }

  /* 🎧 SONIDO SOLO EN CLICK DE MALETA */
  playMaletaSound() {
    if (!this.soundMaleta) return;

    this.soundMaleta.currentTime = 0;
    this.soundMaleta.play();
  }

  activarProximidad() {
    if (this.proximidadActiva) return;
    this.proximidadActiva = true;

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

          maleta.style.transform = `scale(${1 + intensidad * 0.4})`;

          maleta.style.filter = `
            brightness(${1 + intensidad * 0.5})
            drop-shadow(0 0 ${intensidad * 20}px rgba(255,255,255,0.6))
          `;
        } else {
          maleta.style.transform = "scale(1)";
          maleta.style.filter = "none";
        }
      });
    };

    this._mouseHandler = (e) => handler(e.clientX, e.clientY);
    this._touchHandler = (e) => {
      const touch = e.touches[0];
      handler(touch.clientX, touch.clientY);
    };

    document.addEventListener("mousemove", this._mouseHandler);
    document.addEventListener("touchmove", this._touchHandler);
  }

  desactivarProximidad() {
    if (!this.proximidadActiva) return;

    document.removeEventListener("mousemove", this._mouseHandler);
    document.removeEventListener("touchmove", this._touchHandler);

    this.proximidadActiva = false;
  }

  iniciar() {
    this.mostrarIntro();
  }

  /* PANTALLA 1 */

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
    texto.innerHTML = `Una pena que nadie haya podido ver tu heroicidad...
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
    this.contenedor.className = "pantalla-contexto pantalla-seleccion";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("sala-fondo");

    const maletasWrapper = document.createElement("div");
    maletasWrapper.classList.add("maletas-wrapper");

    this.maletas.forEach((m) => {
      const maleta = document.createElement("img");

      maleta.src = "../assets/img/resources/maleta-cerrada.png";
      maleta.classList.add("maleta");

      maleta.addEventListener("click", () => {
        this.playMaletaSound(); // 🎧 SOLO AQUÍ
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
    this.desactivarProximidad();

    this.contenedor.innerHTML = "";
    this.contenedor.className = "pantalla-contexto pantalla-maleta";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const maletaWrapper = document.createElement("div");
    maletaWrapper.classList.add("maleta-wrapper");

    const img = document.createElement("img");
    img.src = "../assets/img/resources/maleta-abierta.png";
    img.classList.add("maleta-open-img");

    maletaWrapper.appendChild(img);

    const objetosContainer = document.createElement("div");
    objetosContainer.classList.add("objetos-container");

    maleta.objetos.forEach((ruta, i) => {
      const obj = document.createElement("img");
      obj.src = ruta;
      obj.classList.add("objeto");
      obj.style.animationDelay = `${i * 0.15}s`;
      objetosContainer.appendChild(obj);
    });

    maletaWrapper.appendChild(objetosContainer);
    imgContainer.appendChild(maletaWrapper);

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

    const botonesContainer = document.createElement("div");
    botonesContainer.classList.add("boton-container");

    botonesContainer.appendChild(botonElegir);
    botonesContainer.appendChild(botonVolver);

    textoContainer.appendChild(texto);
    textoContainer.appendChild(botonesContainer);

    this.contenedor.appendChild(imgContainer);
    this.contenedor.appendChild(textoContainer);

    botonVolver.addEventListener("click", () => {
      this.mostrarSeleccion();
    });

    botonElegir.addEventListener("click", () => {
      this.comprobarResultado(maleta);
    });

    img.addEventListener("click", () => {
      this.mostrarSeleccion();
    });
  }

  /* RESULTADO */

  comprobarResultado(maleta) {
    if (maleta.esCorrecta()) {
      completarReto();
      return;
    }

    abandonarJuego();
  }
}

/* INICIO */

export function iniciarReto3() {
  const juego = new JuegoReto3();
  juego.iniciar();
}