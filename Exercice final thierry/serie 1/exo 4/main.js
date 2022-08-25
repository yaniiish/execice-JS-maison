let inputPrenom = document.querySelector(".prenom");
let inputNom = document.querySelector(".nom");
let inputTauxHoraires = document.querySelector(".tauxHoraires");
let inputNombreHeure = document.querySelector(".nombreHeure");
console.log(inputNom);

let creer = document.querySelector(".creer");
let calculeSalaireHebdo = document.querySelector(".caluleSalaireHebdo");
let calculeSalaireMensuel = document.querySelector(".caluleSalaireMensuel");

let resultatSalaireHebdo = document.querySelector(".resultatSalaireHebdo")
let resultatSalaireMensuel = document.querySelector(".resultatSalaireMensuel")


let nouveauSalarié;
let salaireHebdo;

creer.addEventListener("click", creerSalarie);

function creerSalarie(){
    nouveauSalarié = new Salarie(inputPrenom.value, inputNom.value, inputTauxHoraires.value, inputNombreHeure.value);
    console.log(nouveauSalarié);
}

calculeSalaireHebdo.addEventListener("click", calculeSalaireHebdoSalarie)

function calculeSalaireHebdoSalarie(){
    salaireHebdo = nouveauSalarié.tauxHoraire*nouveauSalarié.nombreHeuresHebdo
    resultatSalaireHebdo.innerText = `${nouveauSalarié.nom}  ${nouveauSalarié.prenom}, votre salaire HEBDO est de ${salaireHebdo} € par semaine.`
}

calculeSalaireMensuel.addEventListener('click',calculeSalaireMensuelSalarie)

function calculeSalaireMensuelSalarie(){
    resultatSalaireMensuel.innerText = `Votre salaire mensuel est donc ${salaireHebdo*4}€.`
}

