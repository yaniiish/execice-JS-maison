function affichageDonnees(donnees) {
    document.querySelector('#demo').innerHTML = `affiche : ${donnees.produits}`
    console.log(JSON.parse(donnees));

}

//https://magasin.mboudrea.tim-cstj.ca/api/produit/alea/10

function chargementDonnees() {
    //creation de la requete ajax
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        affichageDonnees(this.responseText) //parametres de la fonction affichage donc ca l'affiche
    }
    xhttp.open("get", "https://magasin.mboudrea.tim-cstj.ca/api/produit/alea/10")
    xhttp.send()
}

chargementDonnees()
