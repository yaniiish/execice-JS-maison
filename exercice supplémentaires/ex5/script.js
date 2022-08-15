let formNombre = document.querySelector('.nombre');
let boutonSubmit = document.querySelector('.bouton');
let para = document.querySelector('.affichageReponse');
let value = formNombre.value;


function afficher (event) {
    para.innerHTML += `${Math.pow(formNombre.value, 2)}`
}


console.log(formNombre);
console.log(boutonSubmit);
console.log(value);