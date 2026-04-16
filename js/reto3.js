document.addEventListener("DOMContentLoaded", () => {
  mostrarPantalla();
});

function mostrarPantalla() {
  const container = document.getElementById("reto3-container");

  container.innerHTML = `
    
   <figure class="imagen-container">
    <img src="../img/resources/victoria.png">
   </figure>
<div class="titulo-emergente">
 <h2 class="texto-supervivencia">ESTAS MAMADÍSIMO!</h2>
 </div>
  <article class="texto">
    <p>Una pena que nadie haya podido ver tu heroicidad...</p>
    <p>Has conseguido abrirte paso por la oleada zombie</p>
    <p>Sales de la habitación y te pones a explorar...</p>
  </article>

  <div class="boton-container">
    <button>EXPLORAR SALAS</button>
  </div>
  `;

  activarBoton();
}

function activarBoton() {
  document.getElementById("continuarBtn").addEventListener("click", () => {
    const reto2Superado = localStorage.getItem("reto2Superado");

    if (reto2Superado === "true") {
      alert("Acceso permitido al reto 3");
    } else {
      alert("Debes completar el reto 2");
    }
  });
}
