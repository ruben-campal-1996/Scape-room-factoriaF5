// ===============================
// CONFIG
// ===============================
const DURACION = 600; // segundos

let tiempo = DURACION;
let intervalo = null;
let juegoTerminado = false;

// ===============================
// INICIAR JUEGO (llamar en reto.html)
// ===============================
export function iniciarJuego() {
  // estado inicial
  localStorage.setItem("estadoJuego", "jugando");

  iniciarTemporizador();
  actualizarTimer();
}

function terminarJuego(estado) {
  if (juegoTerminado) return; // 👈 evita doble ejecución

  juegoTerminado = true;

  if (intervalo) clearInterval(intervalo);

  localStorage.setItem("estadoJuego", estado);

  window.location.href = "../templates/final.html";
}

// ===============================
// TEMPORIZADOR
// ===============================
function iniciarTemporizador() {
  if (intervalo) return;

  intervalo = setInterval(() => {
    tiempo--;

    actualizarTimer();

    if (tiempo <= 0) {
      tiempo = 0;
      terminarJuego("perdido");
    }

  }, 1000);
}

// ===============================
// CUANDO EL USUARIO GANA (llamar desde reto1.js)
// ===============================
export function completarReto() {
  terminarJuego("ganado");
}

// ===============================
// ACTUALIZAR UI TIMER
// ===============================
function actualizarTimer() {
  const el = document.getElementById("timer");
  if (!el) return;

  const min = Math.floor(tiempo / 60);
  const seg = tiempo % 60;

  el.textContent = `${min}:${seg.toString().padStart(2, "0")}`;
}


// ===============================
// FINAL.HTML → PINTAR RESULTADO
// ===============================
export function pintarFinal() {
  const estado = localStorage.getItem("estadoJuego");
  const container = document.getElementById("resultado");

  
  if (!container) return;
  container.innerHTML = "";

  if (estado === "ganado") {
    container.innerHTML = `
      <div>
        <h2>🎉 VICTORIA</h2>
        <p>Has completado el reto a tiempo</p>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div>
        <h2 style="color:red;">⏱️ DERROTA</h2>
        <p>Se acabó el tiempo</p>
      </div>
    `;
  }
}