let menu = document.querySelector('.burger');
let menu_deux = document.querySelector('.menu_deux');
let open_menu = document.querySelector('.menu_two');
let croix = document.querySelector(".croix")

menu.addEventListener('click', function() {
    if (menu_deux.style.display = 'none') {
        open_menu.style.display = 'block';
        menu_deux.style.display = 'block';
        menu.style.display = "none"
        open_menu.style.display = "flex"
        open_menu.style.width = "100vw"
        open_menu.style.height = "100vh"
        open_menu.style.justifyContent = "center"
    } else {
        return false;
    }
  
});


menu_deux.addEventListener('click', function() {
    open_menu.style.display = 'none';
    if (menu_deux.style.display = 'block') {
        menu_deux.style.display = 'none';
    } else {
        return false;
    }
});

croix.addEventListener("click", function (){
    open_menu.style.display = "none"
    menu.style.display = "block"
})



if (window.matchMedia("(min-width: 700px)").matches) {
    /* the view port is at least 400 pixels wide */
  } else {
    /* the view port is less than 400 pixels wide */
  }
  
  function taille () {
    if (window.matchMedia("(min-width: 700px)").matches) {
        menu.style.display = "none"
        open_menu.style.display = 'none';
      } else {
        return false
      }
  }

taille()