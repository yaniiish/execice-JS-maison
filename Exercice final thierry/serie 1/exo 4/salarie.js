class Salarie {
    prenom;
    nom;
    tauxHoraire;
    nombreHeuresHebdo;

    constructor (prenom="", nom="", tauxHoraire, nombreHeuresHebdo){
        this.prenom = prenom;
        this.nom = nom.toUpperCase();
        this.tauxHoraire = tauxHoraire;
        this.nombreHeuresHebdo = nombreHeuresHebdo;
    }
    
}