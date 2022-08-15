let bouton = document.querySelector(".bouton")
let remplir = document.querySelector(".champ")
let paragraphe = document.querySelector(".afficher")
console.log(bouton);
console.log(remplir);
console.log(paragraphe);

bouton.addEventListener("click", auClick)

function auClick (e) {
    paragraphe.innerHTML += `${eval(remplir.value)}`
}