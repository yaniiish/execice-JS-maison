let tableauFr = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Ocotbre", "Novemnbre", "Decembre"]
let TableauEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function mois (tab){
    tab.forEach(i => {
        console.log(i)
    });
}

mois(tableauFr)