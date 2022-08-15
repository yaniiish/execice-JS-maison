let formNombre = document.querySelector('.nombre');
let boutonSubmit = document.querySelector('.bouton');
let para = document.querySelector('.affichageReponse');
let value = formNombre.value;

function afficher (event) {
    event.preventDefault();
    para.innerHTML += `${formNombre.value}`
}

console.log(formNombre);
console.log(boutonSubmit);
console.log(value);