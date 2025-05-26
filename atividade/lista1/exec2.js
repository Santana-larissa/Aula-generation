const leia = require('readline-sync');

let nota1, nota2, nota3, nota4;

nota1 = leia.questionFloat("\nDigite a nota 1: ", {limitMessage: 'O valor inserido nao e um numero.'});
nota2 = leia.questionFloat("\nDigite a nota 2: ", {limitMessage: 'O valor inserido nao e um numero.'});
nota3 = leia.questionFloat("\nDigite a nota 3: ", {limitMessage: 'O valor inserido nao e um numero.'});
nota4 = leia.questionFloat("\nDigite a nota 4: ", {limitMessage: 'O valor inserido nao e um numero.'});

const notaMediaFinal = (nota1 + nota2 + nota3 + nota4)/4;

console.log('\nA media final foi: ', notaMediaFinal); 