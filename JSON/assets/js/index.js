// let dd = '{"depense":[' +
// '{"assurance":"250","nom":"Valentin" },' +
// '{"loyer":"500","Nom":"dd" },' +
// '{"bla":"dd","Nom":"Lola" }]}';

// const obj = JSON.parse(dd)
// document.getElementById("test").innerHTML = obj.depense[0].nom + ' ' + obj.depense[0].assurance

const ddjson = '{"Nom":"Val", "age":80, "Voiture":null}';
const myObj = JSON.parse(ddjson);

let text = '';

for(const x in myObj){
    text += x + ', ';
    console.log(x.age);
}

document.getElementById("test2").innerHTML = text;