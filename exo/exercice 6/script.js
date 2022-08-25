let nom = prompt("Quel est votre nom ?");
let affichage = document.querySelector(".para");
affichage.innerHTML = "Bienvenue " + nom + " !";

console.log(affichage);