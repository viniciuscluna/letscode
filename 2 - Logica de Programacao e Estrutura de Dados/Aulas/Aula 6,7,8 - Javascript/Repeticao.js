//Variável de escopo global
var a = 5;
//Variável de escopo interno
let b = 2;
//Variável de escopo interno constante
const c = 3;

while (a > 1) {
    console.log(a)
    a--
}

do {
    a = parseInt(prompt('Digita'))
} while (a != 0) {
    console.log('Faz dnv')
}

for (j = 1; j <= 5; j++) {
    console.log(j)
}