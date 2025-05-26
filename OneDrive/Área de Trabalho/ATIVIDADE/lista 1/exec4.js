const leia = require('readline-sync');

let num1, num2, num3, num4, diferenca;

num1 = leia.questionFloat("\nDigite a numero 1: ", {limitMessage: 'O valor inserido nao e um numero.'});
num2 = leia.questionFloat("\nDigite a numero 2: ", {limitMessage: 'O valor inserido nao e um numero.'});
num3 = leia.questionFloat("\nDigite a numero 3: ", {limitMessage: 'O valor inserido nao e um numero.'});
num4 = leia.questionFloat("\nDigite a numero 4: ", {limitMessage: 'O valor inserido nao e um numero.'});

diferenca = (num1 * num2) - (num3 * num4);

console.log('\nDiferenca do produto entre n1 e n2 pelo produto entre o n3 e n4: ', diferenca); 

num1 = leia.questionFloat("\nDigite a numero 1: ", {limitMessage: 'O valor inserido nao e um numero.'});
num2 = leia.questionFloat("\nDigite a numero 2: ", {limitMessage: 'O valor inserido nao e um numero.'});
num3 = leia.questionFloat("\nDigite a numero 3: ", {limitMessage: 'O valor inserido nao e um numero.'});
num4 = leia.questionFloat("\nDigite a numero 4: ", {limitMessage: 'O valor inserido nao e um numero.'});

diferenca = (num1 * num2) - (num3 *num4);

console.log('\nDiferenca do produto entre n1 e n2 pelo produto entre o n3 e n4: ', diferenca); 