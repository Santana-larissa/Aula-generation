const leia = require ('readline-sync')

let numero, positivoNegativo, parImpar

numero = leia.questionInt("Digite um número: ");

positivoNegativo = (numero % 2 == 0) ? "par" : "impar";
parImpar = (numero > 0) ? "positivo" : "negativo";

console.log(`O numero e ${parImpar} e ${positivoNegativo}`)

