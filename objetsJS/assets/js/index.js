class Vehicules {
    voiture;
    annee;
    marque;
    voitureArray;

    constructor(voiture, annee, marque){
        this.carName = voiture; 
        this.year = annee;
        this.brand = marque; 
        this.voitureArray = new Array();

    }

    ajouterVoiture(voiture){
        this.voitureArray.push(voiture)
    }

    afficherGarage(){
        for (let i = 0; i < this.voitureArray.length; i++){
            return "Dans le garage il y a"  +  this.voitureArray[i]
        }
        
    }

    afficheCarName(x){
        return "Dans mon garage il y a " + this.carName;
    }
}

myCar = new Vehicules("", "" ,"")
myCar.ajouterVoiture("BMW")
myCar.ajouterVoiture("206")
myCar.ajouterVoiture("CLIO")


let test = document.getElementById("test")
test.innerHTML = myCar.afficherGarage("bjr")

