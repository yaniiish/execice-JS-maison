 let tab1 = [1, 2, 1];

function palindrome (tableau) {
    let tableauInverse = tableau.slice().reverse()
    return (JSON.stringify(tableau) == JSON.stringify(tableauInverse))
}

console.log(palindrome(tab1))
