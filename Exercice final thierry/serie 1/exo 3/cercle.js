class Cercle {
    rayon

    constructor(rayon) {
        this.rayon = this.rayon;
    }

    calculerSurface() {
        return ((this.rayon*this.rayon) * Math.PI);
    }

    calculerPerimètre() {
        return (2*Math.PI*this.rayon)
    }
}