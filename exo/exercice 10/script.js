let x = prompt("choisis un nombre");
let y = prompt("choisis un autre nombre");
let para = document.querySelector(".para");


if (x >= y) {
    console.log(para);
    para.innerHTML = "x est plus grand que y”";
} else  {
    para.innerHTML = "x est plus petit que y”";
}