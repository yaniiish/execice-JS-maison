
let stagiaireC = new Stagiaire("Lucette","Anderson");
let stagiaireD = new Stagiaire("herda","yanis");

let stagiaires = [stagiaireC, stagiaireD]

console.log(stagiaires);

console.log(stagiaires[1].salutation());
console.log(stagiaireC.nom);
console.log(stagiaireD);



let dwwm = new Classe("DWWM", new Date(2022, 08, 20), new Date(2023, 03, 20))
dwwm.ajouterStagiaire(stagiaireC)
dwwm.ajouterStagiaire(stagiaireD)

console.log(dwwm);


var stage;


var afficher = document.querySelector('.afficher');
afficher.addEventListener('click', afficherStage);

var creer = document.querySelector('.creer');
creer.addEventListener('click', creerStage);



function creerStage() {
    var nomFormation = document.querySelector(".nomFormation");
    var dateDebut = document.querySelector(".dateDebut");
    var dateFin = document.querySelector(".dateFin")
    stage = new Classe(nomFormation.value, dateDebut.value, dateFin.value)
    console.log(nomFormation,dateDebut,dateFin);

    
    document.body.appendChild(ajoutStagiaireFormulaireNom);
    document.body.appendChild(ajoutStagiaireFormulairePrenom);
    document.body.appendChild(boutonAjoutStagiaire);
}

function afficherStage(){
    console.log(stage);
    var affichage = document.querySelector(".affichage");
    stageJsonIntitule = JSON.stringify(stage.intitule);
    stageJsonDateDebut = JSON.stringify(stage.dateDebut);
    stageJsonDateFin = JSON.stringify(stage.dateFin);
    affichage.innerHTML += `${stageJsonIntitule + stageJsonDateDebut + stageJsonDateFin}`;
}



var ajoutStagiaireFormulaireNom = document.createElement("input");
ajoutStagiaireFormulaireNom.placeholder = "Nom stagiaire";
var ajoutStagiaireFormulairePrenom = document.createElement("input");
ajoutStagiaireFormulairePrenom.placeholder = "Prénom stagiaire";

var boutonAjoutStagiaire = document.createElement("button");
boutonAjoutStagiaire.innerText = "ajout stagiaire";
boutonAjoutStagiaire.addEventListener("click", ajoutStagiaire);

function ajoutStagiaire() {
    let stagiaire = new Stagiaire(ajoutStagiaireFormulaireNom.value ,ajoutStagiaireFormulairePrenom.value);
    stage.listeStagiaire.push(stagiaire);
    console.log(stage);
    var select = document.createElement("select");
    var selectOption = document.createElement("option");
    selectOption.innerText += ajoutStagiaireFormulaireNom.value;
    document.body.appendChild(select);
    select.appendChild(selectOption);
 }


