class Rectangle {
    longueur;
    largeur;

    constructor(longueur, largeur){
        this.longueur = longueur; //this largeur est l'attribut de la classe il peut etre enfaite utilisé que dans la classe
        this.largeur = largeur;
    }

    calcul() {
        return `l'aire du rectangle est de ${this.longueur*this.largeur}, le perimètre est de ${(this.largeur*2)+(this.longueur*2)}`
    }
}