export function volumen() {
  const audio = document.getElementById('bg-music');
  const volumeControl = document.getElementById('volume-control');
  const audioToggle = document.getElementById('audio-toggle');

  // Ajustar volumen inicial
  audio.volume = volumeControl.value;

  // Evento para cambiar el volumen
  volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
   
    if (audio.paused) {
      audio.play();
    }
    
    // Cambiar icono si está en silencio
    audioToggle.textContent = e.target.value == 0 ? "🔇" : "🔊";
  });

  // Opcional: Click en el icono para Mutear/Desmutear
  audioToggle.addEventListener('click', () => {
    if (audio.muted) {
      audio.muted = false;
      audioToggle.innerText = "🔊";
    } else {
      audio.muted = true;
      audioToggle.innerText = "🔇";
    }
  });
}