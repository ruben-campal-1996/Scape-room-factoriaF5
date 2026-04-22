export function volumen() {
  const bgMusic = document.getElementById('bg-music');
  const volumeControl = document.getElementById('volume-control');
  const audioToggle = document.getElementById('audio-toggle');
  
  // Lista de todos tus efectos de sonido
  const effects = [
    document.getElementById('beep-sound'),
    document.getElementById('open-sound'),
    document.getElementById('wrong-sound')
  ];

  // Función interna para aplicar el volumen a todo
  const updateAllVolumes = (newVolume) => {
    // Ajustar música de fondo
    bgMusic.volume = newVolume;
    
    // Ajustar cada efecto de la lista
    effects.forEach(sound => {
      if (sound) sound.volume = newVolume;
    });
  };

  // Inicializar todo al valor por defecto del slider (0.05)
  updateAllVolumes(volumeControl.value);

  // Evento al mover el slider
  volumeControl.addEventListener('input', (e) => {
    const val = e.target.value;
    updateAllVolumes(val);
    
    // Si estaba silenciado, quitar el mute
    bgMusic.muted = false;

    // Iniciar la música si está pausada
    if (bgMusic.paused && val > 0) {
      bgMusic.play().catch(() => console.log("Esperando interacción..."));
    }
    
    audioToggle.textContent = val == 0 ? "🔇" : "🔊";
  });

  // Botón de Mute (afecta a todos)
  audioToggle.addEventListener('click', () => {
    const isMuted = !bgMusic.muted;
    bgMusic.muted = isMuted;
    
    effects.forEach(sound => {
      if (sound) sound.muted = isMuted;
    });

    audioToggle.textContent = isMuted ? "🔇" : "🔊";
  });
}