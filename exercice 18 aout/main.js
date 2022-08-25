
let stagiaireC = new Stagiaire("Lucette","Anderson");
let stagiaireD = new Stagiaire("herda","yanis");

let stagiaires = [stagiaireC, stagiaireD]

console.log(stagiaires);

console.log(stagiaires[1].salutation());
console.log(stagiaireC.nom);
console.log(stagiaireD);

let stagiaireA = new Stagiaire("martin", "vincent")
console.log(stagiaireA);

let dwwm = new Classe("DWWM", new Date(2022, 08, 20), new Date(2023, 03, 20))
dwwm.ajouterStagiaire(stagiaireC)
dwwm.ajouterStagiaire(stagiaireD)

console.log(dwwm);


// _________________________________________

var afficher = document.querySelector('.afficher');
afficher.addEventListener('click', afficherStage);
console.log(afficher);

var creer = document.querySelector('.creer');
creer.addEventListener('click', creerStage);

var stage;
var select;

function creerStage() {
    var nomFormation = document.querySelector(".nomFormation");
    var dateDebut = document.querySelector(".dateDebut");
    var dateFin = document.querySelector(".dateFin")
    stage = new Classe(nomFormation.value, dateDebut.value, dateFin.value)
    console.log(nomFormation,dateDebut,dateFin);
     
    select = document.createElement("select");

    document.body.appendChild(ajoutStagiaireFormulaireNom);
    document.body.appendChild(ajoutStagiaireFormulairePrenom);
    document.body.appendChild(boutonAjoutStagiaire);
    document.body.appendChild(select);
    
}


function afficherStage(){
    console.log(stage);
    var affichage = document.querySelector(".affichage");
    affichage.innerHTML +=  `La formation ${stage.intitule} commencera le ${stage.dateDebut} et finira le ${stage.dateFin}` ;
} 

var ajoutStagiaireFormulaireNom = document.createElement("input");
ajoutStagiaireFormulaireNom.placeholder = "Nom stagiaire";
var ajoutStagiaireFormulairePrenom = document.createElement("input");
ajoutStagiaireFormulairePrenom.placeholder = "Prénom stagiaire";

var boutonAjoutStagiaire = document.createElement("button");
boutonAjoutStagiaire.innerText = "ajout stagiaire";

boutonAjoutStagiaire.addEventListener("click", ajoutStagiaire);


function ajoutStagiaire() {
    let stagiaireForm = new Stagiaire(ajoutStagiaireFormulaireNom.value ,ajoutStagiaireFormulairePrenom.value);
    stage.listeStagiaire.push(stagiaireForm);
    console.log(stage);
    
        var selectOption = document.createElement("option");
        selectOption.innerText = ajoutStagiaireFormulairePrenom.value

    select.appendChild(selectOption);

 }

console.log(stage);