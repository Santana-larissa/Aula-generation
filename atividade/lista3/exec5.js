//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, 
// mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:

const leia = require("readline-sync");

let numero, soma=0;

while (numero != 0) {
    numero = leia.questionInt('Digite um numero: ');

    if (numero > 0) {
        soma = soma + numero
    };

};

console.log(`A soma dos numeros positivos: ${soma}`)

