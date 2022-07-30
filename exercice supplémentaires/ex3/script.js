let nombre = prompt("saisis le table de multiplication que tu veux.")
let liste = document.querySelector(".liste")
console.log(liste);


for (i=1; i < 11; i++) {
    liste.innerHTML +=  `<li>${nombre * i}</li>`
   console.log(nombre * i);
}