function moyenne (tableau){
    let addition = 0;
    tableau.forEach(i => {
        addition += i / tableau.length
    });
    console.log(addition);
}

moyenne([10, 20])
moyenne([5, 10])