let tab1 = [1, 2, 3, 4];

function verif(tab) {
    let resultat = true
   for ( let i=0; i < tab.length-1; i++) {
       if (tab[i] <= tab[i+1]){

       } 
       else {
        resultat = false
       }
    }
       return resultat
}


console.log(verif(tab1));