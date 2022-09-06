class Vehicules {
    constructor(voiture, annee, marque){
        this.carName = voiture; 
        this.year = annee;
        this.brand = marque; 
        this.voitureArray = new Array();

    }

    ajouterVoiture(voiture){
        this.voitureArray.push(voiture)
    }

    afficheCarName(x){
        return x + "Dans mon garage il y a " + this.carName;
    }
}

myCar = new Vehicules("", "" ,"Vw")
myCar.ajouterVoiture("BMW")
myCar.ajouterVoiture("206")
myCar.ajouterVoiture("CLIO")





console.log(myCar);






let test = document.getElementById("test")
test.innerHTML = myCar.afficheCarName("bienvenue ")

