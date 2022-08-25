let resultatAddition = document.querySelector(".resultatAddition")
let resulatatMultiplication = document.querySelector(".resulatatMultiplication")
let champsA = document.querySelector(".champsA")
let champsB = document.querySelector(".champsB")
let boutonAddition = document.querySelector(".boutonAddition")
let boutonMultiplication = document.querySelector(".boutonMultiplication")
let creer = document.querySelector(".creer")

let deuxChiffres;

creer.addEventListener('click', creerCombinaison)

function creerCombinaison(){
    deuxChiffres = new Calcul(champsA.value, champsB.value)
    console.log(deuxChiffres);
}

boutonAddition.addEventListener('click', addition)

function addition(){
    deuxChiffres.add();
    resultatAddition.innerText = deuxChiffres.add()
}

boutonMultiplication.addEventListener("click", multiplication)

function multiplication() {
    deuxChiffres.multiplie()
    resulatatMultiplication.innerText = deuxChiffres.multiplie()

}