const leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horasExtras, descontos;

salarioBruto = leia.questionFloat('\nDigite seu Salario Bruto: ', {limitMessage: 'O valor inserido nao e um numero.'});
adicionalNoturno = leia.questionFloat('\nDigite seu Adicional Noturno: ', {limitMessage: 'O valor inserido nao e um numero.'});
horasExtras = leia.questionFloat('\nDigite seu Horas Extras: ', {limitMessage: 'O valor inserido nao e um numero.'});
descontos = leia.questionFloat('\nDigite seu Desconto: ', {limitMessage: 'O valor inserido nao e um numero.'});

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log('\nO seu salario liquido é: ', salarioLiquido);   