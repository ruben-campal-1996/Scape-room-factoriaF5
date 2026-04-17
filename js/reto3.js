document.addEventListener("DOMContentLoaded", () => {
  mostrarPantalla();
});

function mostrarPantalla() {
  const container = document.getElementById("reto3-container");

  container.innerHTML = `
    <div class="reto3-content">

      <!-- LADO IZQUIERDO -->
      <div class="lado-izquierdo">

        <div class="titulo-emergente">
          <h2 class="texto-supervivencia">¡HAS SOBREVIVIDO!</h2>
        </div>

        <article class="texto">
          <p>Una pena que nadie haya podido ver tu heroicidad...</p>
          <p>Has conseguido abrirte paso por la oleada zombie.</p>
          <p>Sales de la habitación y te pones a explorar...</p>
        </article>

        <div class="boton-container">
          <button id="explorarBtn">EXPLORAR SALAS</button>
        </div>

      </div>

     
      <figure class="imagen-container">
        <img src="../img/resources/victoria.png" alt="Victoria">
      </figure>

    </div>
  `;

  activarBoton();
}

/* ========================= */
/*  SEGUNDA PANTALLA         */
/* ========================= */

function activarBoton() {
  document.getElementById("explorarBtn").addEventListener("click", () => {
    mostrarPantallaMaletas(); //  CAMBIO DE PANTALLA
  });
}
function mostrarPantallaMaletas() {
  const container = document.getElementById("reto3-container");

  container.innerHTML = `
   <div class="pantalla-maletas">


    <div class="lado-izquierdo">

     <div class="titulo-emergente">
        <h2 class="texto-supervivencia">CREO QUE ES MOMENTO DE CORRER:</h2>
      </div>

     
      <article class="texto">
        <h2>¡QUE SUERTE!</h2>
        <p>Hemos encontrado unas maletas con algunos objetos</p>
        <p>Parece que le caemos bien a alguien de arriba...</p>
        <p>Pero... ¿Cuál me llevo?</p>
      </article>

      
      <div class="boton-container">
        <button id="abrirMaletasBtn">ABRIR MALETAS</button>
      </div>

    </div>


  
       <figure class="imagen-container">
        <img src="../img/resources/habitacion-maletas.png" alt="Maletas">
      </figure>

    
   
    </div>
  `;

  activarBotonMaletas();
}
setTimeout(() => {
  mostrarPantallaMaletas();
}, 300);



/* ========================= */
/*  TERCERA PANTALLA        */
/* ========================= */

/*aCTIVAR BOTON*/
function activarBotonMaletas() {
  const boton = document.getElementById("abrirMaletasBtn");

  boton.addEventListener("click", () => {
    mostrarSeleccionMaletas(); //  aquí cambiamos de pantalla
  });
}

mostrarPantallaMaletas();
activarBotonMaletas();

/*PANTALLA 3 MALETAS*****/ 
// ==========================
// 🧠 CLASE
// ==========================
class Maleta {
  constructor(id, correcta, objetos) {
    this.id = id;
    this.correcta = correcta;
    this.objetos = objetos;
  }
}

// ==========================
// 📦 DATOS
// ==========================
const maletas = [
  new Maleta(0, true, ["📕 libro de supervivencia", "🔪 cuchillo", "💧 cantimplora"]),
  new Maleta(1, false, ["🎮 gameboy", "🧴 crema solar", "🧻 toalla"]),
  new Maleta(2, false, ["🧸 peluche", "🍫 chocolate", "🎧 cascos"])
];

// ==========================
// 🧳 PANTALLA SELECCIÓN
// ==========================
function mostrarSeleccionMaletas() {
  const container = document.getElementById("reto3-container");

  container.innerHTML = `
    <div class="pantalla-maletas">

      <div class="fondo">
        <img src="../img/resources/habitacion-maletas.png">
      </div>

      <div class="maletas">
        ${maletas.map(m => `
          <div class="maleta" data-id="${m.id}">
            <img src="../img/resources/maleta-cerrada.png">
          </div>
        `).join("")}
      </div>

    </div>
  `;

  activarEventosMaletas();
}

// ==========================
// ⚙️ EVENTOS
// ==========================
function activarEventosMaletas() {
  const maletasDOM = document.querySelectorAll(".maleta");

  maletasDOM.forEach(m => {
    m.addEventListener("click", () => {
      const id = m.dataset.id;
      const seleccion = maletas[id];

      mostrarDetalleMaleta(seleccion);
    });
  });
}

// ==========================
// 📂 MALETA ABIERTA
// ==========================
function mostrarDetalleMaleta(maleta) {
  const container = document.getElementById("reto3-container");

  container.innerHTML = `
    <div class="pantalla-detalle">

      <div class="imagen-container">
        <img src="../img/resources/maleta-abierta.png">
      </div>

      <div class="objetos-box">
        <h3>Contenido:</h3>
        <ul>
          ${maleta.objetos.map(o => `<li>${o}</li>`).join("")}
        </ul>
      </div>

      <div class="botones">
        <button id="elegirBtn">ELEGIR MALETA</button>
        <button id="volverBtn">VOLVER</button>
      </div>

    </div>
  `;

  document.getElementById("elegirBtn").addEventListener("click", () => {
    mostrarResultado(maleta);
  });

  document.getElementById("volverBtn").addEventListener("click", () => {
    mostrarSeleccionMaletas();
  });
}

// ==========================
// 🎯 RESULTADO
// ==========================
function mostrarResultado(maleta) {
  const container = document.getElementById("reto3-container");

  if (maleta.correcta) {
    container.innerHTML = `
      <div class="resultado">
        <h2>✅ HAS SOBREVIVIDO</h2>
        <p>Buena elección.</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="game-over">

        <div class="imagen-container">
          <img src="../img/resources/habitacion-maletas.png">
          <h2 class="game-over-text">GAME OVER</h2>
        </div>

        <p>No estabas preparado...</p>

        <button onclick="mostrarSeleccionMaletas()">REINTENTAR</button>

      </div>
    `;
  }
}

// ==========================
// 🚀 INICIO
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  mostrarSeleccionMaletas();
});