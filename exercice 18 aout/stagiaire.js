class Stagiaire {
    nom;
    prenom;

    constructor(nom="", prenom="") {
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
    }

    salutation(){
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
}

