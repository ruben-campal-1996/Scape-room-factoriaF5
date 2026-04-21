// ---FUNCIONES DE CREACIÓN DOM---
function crearDiv(clase) {
    const nuevoDiv = document.createElement("div")
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
function crearImagen(src,alt, clase="") {
    const nuevaImg = document.createElement("img")
    nuevaImg.src = src
    nuevaImg.alt = alt

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

// ---FUNCION PARA CAMBIAR ENTRE PANTALLAS DOM---
function cambiarPantalla(pantallaFn) {
    const main= document.querySelector("main")
    main.innerHTML =""
    pantallaFn(main)
}
// ---INICIO RETO 2---
function reto2Contexto() {
    const main = document.querySelector("main")

    const hero = crearSection("hero", "hero-section")
    const divGeneral = crearDiv("general-container")
    const divImg = crearDiv("img-container")
    const imgPuerta = crearImagen("../assets/img/resources/reto-2-1.png", "puerta abierta con zombies intentando entrar")
    const textContainer = crearDiv("textContainer")
    const h1 = crearTexto("h1", "ENHORABUENA")
    const pContainer = crearDiv("p-container")
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
    const boton = crearBoton("Escoger objeto", "btn-reto2")
    
    main.append(hero)
    hero.append(divGeneral)
    divGeneral.append(divImg, textContainer)
    divImg.append(imgPuerta)
    textContainer.append(h1, pContainer, boton)

    boton.addEventListener("click", () => cambiarPantalla(reto2Prueba))
}

// PRUEBA RETO 2
function reto2Prueba() {
    const main = document.querySelector("main")

    const hero = crearSection("hero", "hero-section")
    const divImg = crearDiv("general-container")
    const imgMesa = crearImagen("../assets/img/resources/mesa-vacia.png")
    const img
}


/* function crearBoton() {
    const nuevoBoton = document.createElement("button")

} */

/* function escena1Reto2(){
    const main = document.querySelector("main")
    
    const nuevaSection = document.createElement("section")
    const divGeneral = document.createElement("div")
    const contentContainer = document.createElement("div")
    const imgContainer = document.createElement("div")
    const img = document.createElement("img")
    const h1 = document.createElement("h1")
    const textContainer = document.createElement("div")
    const textos = [
        "Te vas a abrir paso a traves de la puerta, pero escuchas algo...",
        "¡AGUANTA LA PUERTA!",
    "Son muchos, y no podrás resistir eternamente... pero recuerdas que detrás tuyo había una mesa.",
    "¿Que deberías coger para sobrevivir?"
]
const boton = document.createElement("button")


nuevaSection.id = "reto2"
divGeneral.classList.add("general-container")
contentContainer.classList.add("content-container")
imgContainer.classList.add("img-container")
textContainer.classList.add("text-container")
h1.textContent="¡HAS DESCRIFADO LA CONTRASEÑA!"
boton.classList.add("btn-start-r2")
boton.textContent="Escoger objeto"

textos.forEach(texto => {   //Introducir los párrafos dentro del div contenedor
    const p = document.createElement("p")
    p.textContent = texto
    textContainer.appendChild(p) 
})

img.src="/assets/img/resources/reto-2-1.png"
img.alt="zombies intentando entrar por una puerta"

main.appendChild(nuevaSection)
nuevaSection.appendChild(divGeneral)
divGeneral.appendChild(imgContainer)
divGeneral.appendChild(contentContainer)
contentContainer.appendChild(h1)
contentContainer.appendChild(textContainer)
imgContainer.appendChild(img)
contentContainer.appendChild(boton)

boton.addEventListener("click", () => {
    limpiarPantalla()
})
}
*/
reto2Contexto() 