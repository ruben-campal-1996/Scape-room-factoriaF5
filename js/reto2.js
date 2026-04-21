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
    const divGeneral = crearDiv("general-container")
    const divImg = crearDiv("img-container")
    const divImgItems = crearDiv("img-items-container")
    const textContainer = crearDiv("textContainer")
    const imgMesa = crearImagen("../assets/img/resources/mesa-vacia.png", "Imagen de una mesa", "img-mesa")
    const imgMachete = crearImagen("../assets/img/resources/machete.png", "Imagen de un machete", "img-item") 
    const imgJeringuilla = crearImagen("../assets/img/resources/jeringuilla.png", "Imagen de una jeringuilla", "img-item") 
    const imgLupa = crearImagen("../assets/img/resources/lupa.png", "Imagen de una lupa", "img-item") 
    const imgProbeta = crearImagen("../assets/img/resources/probeta.png", "Imagen de una probeta", "img-item")
    const h1 = crearTexto("h1","ESCOGE OBJETO...")
    const boton = crearBoton("Seleccionar", "btn-reto2")

    main.append(hero)
    hero.append(divGeneral, textContainer)
    divGeneral.append(divImg, textContainer)
    divImg.append(imgMesa, divImgItems)
    divImgItems.append(imgJeringuilla, imgLupa, imgMachete, imgProbeta)
    textContainer.append(h1, boton)
}
reto2Contexto() 