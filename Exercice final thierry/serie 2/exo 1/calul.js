class Calcul {
    nombreA;
    nombreB;

    constructor(nombreA, nombreB){
        this.nombreA = parseInt(nombreA);
        this.nombreB = parseInt(nombreB);
    }

    add(nombreA, nombreB){
        console.log(this.nombreA + this.nombreB);
        return this.nombreA + this.nombreB
    }

    multiplie(nombreA, nombreB){
        console.log(this.nombreA*this.nombreB);
        return this.nombreA*this.nombreB
    }
}