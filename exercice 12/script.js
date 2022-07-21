alert("essayer de trouver le nombre aléatoire compris entre 1 et 100");
 let nombreAleatoire = (Math.random()*2).toFixed(0);
 let nombreChoisi;
 
 console.log(nombreAleatoire);

 do {
    nombreChoisi = prompt("choisi un chiffre")
    if (nombreChoisi == nombreAleatoire){
        alert("tu as win gg ! ")
        break
    } else if (nombreChoisi > nombreAleatoire) {
        alert("tu est trop haut")
    } else {
        alert("tu es trop bas")
    }
 } while (nombreAleatoire != nombreChoisi){}