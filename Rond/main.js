let id = null;


function carre () {
    let element = document.getElementById('carres');
    let pos = 0;
    id = setInterval(frame, 10)

    function frame () {
        if (pos == 550){
            clearInterval(id)
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}