let tableauFr = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Ocotbre", "Novemnbre", "Decembre"]
let tableauEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let liste1 = document.getElementById("fr");
let liste2 = document.getElementById("en");

function mois (tab, liste){
    tab.forEach(i => {
        liste.innerHTML += `<li>${[i]}</li>`
    });
}

mois(tableauFr, liste1);
mois(tableauEn, liste2);