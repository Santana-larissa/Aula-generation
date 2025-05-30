//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
//via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e 
//o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser 
//finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:

const leia = require("readline-sync");

let idade=0, idadeMenor=0, idadeMaior=0; 


while (idade >= 0) {

    idade = leia.questionInt("Digite sua idade: ");

    if (idade > 0 && idade < 21) {
        idadeMenor++
    } else if (idade > 50) {
        idadeMaior++
    };
}

console.log(`Total de pessoas menores de 21 anos: ${idadeMenor}`);
console.log(`Total de pessoas maiores que 50 anos: ${idadeMaior}`);
