let element = document.querySelector(".element")

const depense = {
    assurance: "50€",
    netflix: "10€",
    spotify: "10€",
    sport: "10€",
    essence: "150€"
}


for (let depenses of Object.getOwnPropertyNames(depense)) {
   const depensePrice = depense[depenses]
   element.innerHTML += depenses + " : " + depensePrice + "<br>"
}

// var Cities = {City1:"Tokyo",City2:"Paris",City3:"Dubai",City3:"Rome",City4:"London"};
// Object.keys(depense).forEach(depenses => {
//     const depensePrice = depense[depenses]
//     element.innerHTML += depenses + " : " + depensePrice + "<br>"
// })

// let budget = 1500;
// let depense = [20, 50, 100]
// let somme = 0;
// let final = 0;

// for(i = 0; i < depense.length; i++){
//     somme += depense[i]
//     final = budget - somme
// }

// console.log(final);