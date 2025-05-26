const leia = require('readline-sync');

let salario;
let abono;

salario = leia.questionFloat("\nInsira seu salario: ", {limitMessage: 'O valor inserido nao e do tipo float.'});
console.log('\nO valor inserido foi: ', salario);

abono = leia.questionFloat('\nInsira seu abono: ', {limitMessage: 'O valor inserido nao e do tipo float.'}); 
console.log('\nO valor inserido foi: ', abono);

//let salarioMaisAbono = salario + abono;

console.log('\nSeu salario mais abono e = ', salario + abono);

//console.log('\nSeu salario mais abono e = ', salarioMaisAbono);