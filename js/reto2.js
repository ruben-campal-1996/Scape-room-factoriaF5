import { iniciarReto3 } from "./reto3.js"

// ---FUNCIONES DE CREACIÓN DOM---
function crearDiv(id="", clase) {
    const nuevoDiv = document.createElement("div")
    if (id) {nuevoDiv.id = id}
    nuevoDiv.classList.add(clase)
    return nuevoDiv
}
function crearEnlace(texto,clase) {
    const nuevoEnlace = document.createElement("a")
    nuevoEnlace.textContent = texto
    nuevoEnlace.classList.add(clase)
    return nuevoEnlace
}
function crearSection(id,clase) {
    const nuevoSection = document.createElement("section")
    nuevoSection.id = id
    nuevoSection.classList.add(clase)
    return nuevoSection
}
function crearImagen(src,alt="", clase="") {
    const nuevaImg = document.createElement("img")
    nuevaImg.src = src
    if (alt) {nuevaImg.alt = alt}
    if (clase) {nuevaImg.classList.add(clase)}
    return nuevaImg
}
function crearBoton(texto, clase) {
    const btn = document.createElement("button")
    btn.type="button"
    btn.classList.add(clase)
    btn.textContent = texto
    return btn
}
function crearTexto(tag,texto) {
    const nuevoTexto = document.createElement(tag)
    nuevoTexto.textContent= texto
    return nuevoTexto
}

// ---INICIO RETO 2---
export function reto2Contexto() {
    const main = document.querySelector("main")

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "../css/reto2.css"

document.head.appendChild(link)

    const hero = document.getElementById("reto")
    const divGeneral = crearDiv("", "general-container")
    const divImg = crearDiv("", "img-container-r2")
    const imgPuerta = crearImagen("../assets/img/resources/reto-2-1.png", "puerta abierta con zombies intentando entrar")
    const textContainer = crearDiv("", "text-container")
    const h1 = crearTexto("h1", "ENHORABUENA")
    const pContainer = crearDiv("", "p-container")
    const textos = [
        "Te vas a abrir paso a traves de la puerta, pero escuchas algo...",
        "¡AGUANTA LA PUERTA!",
        "Son muchos, y no podrás resistir eternamente... pero recuerdas que detrás tuyo había una mesa.",
        "¿Que deberías coger para sobrevivir?"
    ]
    textos.forEach(texto => {   //Introducir los párrafos dentro del div contenedor
        const p = document.createElement("p", texto)
        p.textContent = texto
        pContainer.appendChild(p)
    })
    const boton = crearBoton("Escoger objeto", "btn-start-r2")
    
    main.append(hero)
    hero.append(divGeneral)
    divGeneral.append(divImg, textContainer)
    divImg.append(imgPuerta)
    textContainer.append(h1, pContainer, boton)

    boton.addEventListener("click", () => {
        hero.innerHTML = ""
        reto2Prueba()
    })
}

// PRUEBA RETO 2
function reto2Prueba() {
    const main = document.querySelector("main")
    
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "../css/reto2.css"

document.head.appendChild(link)

    const hero = document.getElementById("reto")
    const divGeneral = crearDiv("","general-container")
    const divImg = crearDiv("","img-container")
    divImg.classList.add("overlay")
    const divImgItems = crearDiv("","img-items-container")
    const textContainer = crearDiv("", "textContainer")
    const imgMesa = crearImagen("../assets/img/resources/mesa-vacia.png", "Imagen de una mesa", "img-mesa")
    const imgObjetos = [
        {
            type: "machete",
            descripcion: "¿Un machete? Pero si esto es un laboratorio..",
            imagen: "../assets/img/resources/machete.png",
            mensaje: "Coges el machete, y te preparas para defender...",
            correcto: true
        },
        {
            type: "lupa",
            descripcion: "una lupa ensangrentada y sucia",
            imagen: "../assets/img/resources/lupa.png",
            mensaje: "... Yo si que te voy a dar con la lupa. Escoge otra cosa.",
            correcto: false
        },
        {
            type: "jeringuilla",
            descripcion: "Una jeringuilla usada",
            imagen: "../assets/img/resources/jeringuilla.png",
            mensaje: "¿A quien le gusta un jeringazo? ¡OUCH! Pero.. escoge otra cosa.",
            correcto: false
        },
        {
            type: "probeta",
            descripcion: "Una probeta, aún contiene algo de un líquido desconocido..",
            imagen: "../assets/img/resources/probeta.png",
            mensaje: "Excelente boomerang (de 1 solo uso)... Escoge otra cosa.",
            correcto: false
        }
    ]

// ---LÓGICA E IMPLEMENTACIÓN DE IMAGENES---
    let objetoSeleccionado = null;
    let seleccionBloqueada = false;

    imgObjetos.forEach((objeto) => {
        const imagen = crearImagen(objeto.imagen, objeto.descripcion, "item")
        imagen.classList.add(objeto.type)

        imagen.addEventListener("click", () => {
            if (seleccionBloqueada) return;

            const todas = document.querySelectorAll(".item")
            todas.forEach(img => img.classList.remove("seleccionado"))
            imagen.classList.add("seleccionado")
            objetoSeleccionado = objeto;
        })
        divImgItems.append(imagen)
    })
    
    const h1 = crearTexto("h1","ESCOGE OBJETO...")
    const boton = crearBoton("Seleccionar", "btn-reto2")
    main.append(hero)
    hero.append(divGeneral)
    divGeneral.append(divImg, textContainer)
    divImg.append(imgMesa, divImgItems)
    textContainer.append(h1, boton)

   // Overlay base (ya lo tienes)
const mensajeOverlay = crearDiv("", "mensaje-overlay")
const mensajeTexto = crearTexto("p", "")
const botonReintentar = crearBoton("Escoger otro objeto", "btn-reintentar")
const botonContinuar = crearBoton("Continuar", "btn-continuar") // NUEVO
mensajeOverlay.classList.add("hidden")


botonContinuar.classList.add("hidden") // Oculto por defecto
botonReintentar.classList.add("hidden")
mensajeOverlay.append(mensajeTexto, botonReintentar, botonContinuar)
main.append(mensajeOverlay)

boton.addEventListener("click", () => {
    if (!objetoSeleccionado) {
        alert("Selecciona un objeto primero")
        return
    }

    seleccionBloqueada = true
    mensajeTexto.textContent = objetoSeleccionado.mensaje
    mensajeOverlay.classList.remove("hidden")

    if (objetoSeleccionado.correcto) {
        botonReintentar.classList.add("hidden")
        botonContinuar.classList.remove("hidden")
    } else {
        botonReintentar.classList.remove("hidden")
        botonContinuar.classList.add("hidden")
    }
})

botonReintentar.addEventListener("click", () => {
    // Resetear estado
    seleccionBloqueada = false
    objetoSeleccionado = null

    // Quitar selección visual
    const todas = document.querySelectorAll(".item")
    todas.forEach(img => img.classList.remove("seleccionado"))

    // Ocultar overlay
    mensajeOverlay.classList.add("hidden")
})
botonContinuar.addEventListener("click", () => {
    mensajeOverlay.remove()
    hero.innerHTML = ""
    hero.className = ""
    iniciarReto3() // La función que corresponda
})

}