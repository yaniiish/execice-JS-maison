let nav = document.querySelector(".nav");
let ul = document.querySelector(".ul");
let hamburger = document.querySelector(".hamburger");


function test(x) {
    if (x.matches){  // true ou false
        ul.style.display = "flex";
        ul.style.gap = "20px"
        nav.style.display = "flex"
        nav.style.alignItems = "center";
        nav.style.justifyContent = "center"
        
        hamburger.style.display = "none";
    } else {
        nav.style.display = "none"
        ul.style.display = "none";
        hamburger.style.display = "flex";
    }

} 

let x = window.matchMedia("(min-width: 700px)") // retourne un objet en chaine de caractere en objet
// test(x)
x.addListener(test) // permet d'appeler la fonctionnalité, d'executer la fonction, on l'utilise que 
                    // pour les media query