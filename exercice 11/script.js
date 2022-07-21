alert("Trouvez le mot correspondant à cette défintion : Fruit comestible de l'oranger, agrume d'un jaune tirant sur le rouge.");
let reponseUtilisateur = prompt("quel est votre réponse").toLowerCase();
let reponse = "orange";


while(reponse != reponseUtilisateur) {
    reponseUtilisateur = prompt("FAUX essayer une autre défintion");
}

alert("GG")