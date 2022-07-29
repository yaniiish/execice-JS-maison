let dc1 = document.querySelector(".DC1");
let dc2 = document.querySelector(".DC2");
let ds = document.querySelector(".DS");
let moyenne = document.querySelector(".moyenne");



let noteDC1 = parseInt(prompt("quel est votre note au DC1"));
let noteDC2 = parseInt(prompt("quel est votre note au DC2"));
let noteDS = parseInt(prompt("quel est votre note au DS"));
let moyennes = (noteDC1 + noteDC2 + noteDS) / 3;

dc1.innerHTML += `${noteDC1}`;
dc2.innerHTML += `${noteDC2}`;
ds.innerHTML += `${noteDS}`;
moyenne.innerHTML += `${moyennes}`