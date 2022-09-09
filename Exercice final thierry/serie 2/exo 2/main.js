function affichageDonnees(donnees) {
    let demo = document.querySelector('#demo') 
    let resultat = JSON.parse(donnees)
    console.log(resultat);
    resultat.produits.forEach(element => {
       demo.innerHTML += `<li>${element.titre} <img src="${element.url}"><li>`

    });

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
