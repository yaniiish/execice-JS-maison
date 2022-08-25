class Rectangle {
    longueur;
    largeur;

    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
    }

    calcul() {
        return `l'aire du rectangle est de ${this.longueur*this.largeur}, le perimètre est de ${(this.largeur*2)+(this.longueur*2)}`
    }
}