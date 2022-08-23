class Classe {
    intitule;
    listeStagiaire;
    dateDebut;
    dateFin;


    constructor(intitule="", dateDebut, dateFin){
        this.intitule = intitule;
        this.listeStagiaire = new Array();
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        // le this permet de dire qu'enfaite la valeur du paramètre est = à la valeur de ce qu'on a déclarer au dessus.
    }

    ajouterStagiaire(stagiaire){
        this.listeStagiaire.push(stagiaire)
    }
}

