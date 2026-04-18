let intervalo = null;  /*para 

export function iniciarTemporizador() {
  if (intervalo) return;   /*el temporizador no se duplica*/

  let tiempoGuardado = localStorage.getItem("tiempo");

  let tiempo = tiempoGuardado ? parseInt(tiempoGuardado) : 300;

  intervalo = setInterval(() => {
    tiempo--;

    localStorage.setItem("tiempo", tiempo);

    actualizarTimer(tiempo);

    if (tiempo <= 0) {
      clearInterval(intervalo);
      finDelJuego();
    }

  }, 1000);
}

function actualizarTimer(tiempo) {
  const timer = document.getElementById("timer");

  if (timer) {
    const min = Math.floor(tiempo / 60);
    const seg = tiempo % 60;

    timer.textContent = `${min}:${seg.toString().padStart(2, "0")}`;
  }
}

function finDelJuego() {
  localStorage.removeItem("tiempo");

  const container = document.getElementById("reto3-container");

  if (container) {
    container.innerHTML = `
      <div class="pantalla-maletas">
        <h2 style="color:red;">⏰ TIEMPO AGOTADO</h2>
        <p>No has logrado escapar...</p>
        <button onclick="reiniciarJuego()">REINTENTAR</button>
      </div>
    `;
  }
}

// 🔥 FUNCIÓN GLOBAL
export function reiniciarJuego() {
  localStorage.removeItem("tiempo");
  location.reload();
}