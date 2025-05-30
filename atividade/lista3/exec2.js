const leia = require('readline-sync');

let numero, contador, totalPar =0, totalImpar=0;

for (contador = 1; contador <= 10; contador++) {
  numero = leia.questionInt(`Digite o ${contador} numero: `);

  if (numero % 2 == 0) {
    totalPar++
  } else {
    totalImpar++
  }
}

console.log(`Total de numeros pares: ${totalPar}`)
console.log(`Total de numeros impar: ${totalImpar}`)
