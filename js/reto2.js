const main = document.querySelector("main")

const nuevaSection = document.createElement("section")
const divGeneral = document.createElement("div")
const imgContainer = document.createElement("div")
const img = document.createElement("img")
const h1 = document.createElement("h1")
const textContainer = document.createElement("div")
const textos = [
    "Te vas a abrir paso a traves de la puerta, pero escuchas algo... ¡AGUANTA LA PUERTA!",
    "Son muchos, y no podrás resistir eternamente... pero recuerdas que detrás tuyo había una mesa.",
    "Que deberías coger para sobrevivir?"
]


nuevaSection.id = "reto2"
divGeneral.classList.add("general-container")
imgContainer.classList.add("img-container")
textContainer.classList.add("text-container")
h1.textContent="¡HAS DESCRIFADO LA CONTRASEÑA!"

textos.forEach(texto => {
    const p = document.createElement("p")
    p.textContent = texto
    textContainer.appendChild(p) 
})

img.src="/img/resources/reto-2-1.png"
img.alt="zombies intentando entrar por una puerta"

main.appendChild(nuevaSection)
nuevaSection.appendChild(divGeneral)
divGeneral.appendChild(imgContainer)
divGeneral.appendChild(h1)
divGeneral.appendChild(textContainer)
imgContainer.appendChild(img)

