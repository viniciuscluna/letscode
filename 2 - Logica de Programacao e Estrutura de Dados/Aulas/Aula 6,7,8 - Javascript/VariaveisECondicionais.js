
//Variável de escopo global
var a = 5;
//Variável de escopo interno
let b = 2;
//Variável de escopo interno constante
const c = 3;

//Primeira forma de fazer função
function calculo1(a, b) {
    return a + b;
}

//Arrow Function
calculo2 = (a, b) => (a + b)

//Condicional
if (a === 2) {
    console.log('A = 2')
}
else {
    console.log('A diferente de 2')
}

if (a == 2) {
    console.log('A = 2')
}
else if (a == 3) {
    console.log('A = 3')
}
else {
    console.log('A diferente de 2 e 3')
}

//Switch
switch (a) {
    case 1:
        console.log('A = 1')
        break;
    case 2:
        console.log('A = 2')
        break;
    default:
        console.log('A diferente de 1 e 2')
        break;
}


