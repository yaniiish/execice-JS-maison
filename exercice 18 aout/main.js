
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
}


function afficherStage(){
    console.log(stage);
    var affichage = document.querySelector(".afficher")
    affichage.innerHTML += `${JSON.stringify(stage)}`
}

console.log(Classe);

