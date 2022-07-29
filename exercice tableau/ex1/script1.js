function somme (tableau) {
    let addition = 0;
    tableau.forEach(i => {
        addition += i
    });
    console.log(addition);
}

somme([1, 2, 2, 100]);
somme([100, 200])
somme([1000, 1000])
