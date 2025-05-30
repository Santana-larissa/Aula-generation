const leia = require('readline-sync');
let lista = []
let soma = 0

for (let contador = 0; contador < 10; contador++) {
    lista[contador] = leia.questionInt('Manda um numero ai: ');
    soma = soma + lista[contador]
}
    console.log(`a soma da lista é ${soma}`);
    console.log('a media dos valores é: ' + (soma/10));

    //mostrar os numeros nos indices impares
    for(let contador = 1; contador < 10; contador+=2) {
        console.log(`O numero ${lista[contador]} esta no indice ${contador}`);
    }

//mostrar apenas os numeros pares 
for(let contador = 0; contador < 10; contador++) {
    if(lista[contador] % 2 === 0) {
        console.log(`O numero ${lista[contador]} está no indice ${contador}`);
    }
}
