const leia = require ('readline-sync')

let nome, cargo, salario

nome = leia.question("\nNome do colaborador: ");
cargo = leia.questionInt("\nCargo: ");
nome = leia.question("\nSalário: ");

if (cargo > 0 && cargo < 7) {
salario = leia.questionFloat("\nSalário: ");
switch (cargo) {
    case 1:
        console.log(`Nome do colaborador: ${nome}`);
        console.log('Cargo: Gerente');
        console.log(`Salario: R$ ${salario + (0.1 * salario)}\n`);
    case 2:
        console.log(`Nome do colaborador: ${nome}`);
        console.log('Cargo: Vendedor');
        console.log(`Salário: R$ ${salario + (0.7 * salario)}\n`);
    case 3:
        console.log(`Nome do colaborador: ${nome}`);
        console.log('Cargo: Supervisor');
        console.log(`Salário: R$ ${salario + (0.9 * salario)}\n`);
    case 4:
        console.log(`Nome do colaborador: ${nome}`);
        console.log('Cargo: Motorista');
        console.log(`Salário: R$ ${salario + (0.6 * salario)}\n`);
    case 5:
        console.log(`Nome do colaborador: ${nome}`);
        console.log('Cargo: Estoquista');
        console.log(`Salário: R$ ${salario + (0.5 * salario)}\n`);
    case 6:
        console.log(`Nome do colaborador: ${nome}`);
        console.log('Cargo: Tecnico de TI');
        console.log(`Salário: R$ ${salario + (0.8 * salario)}\n`);
        break
    }
} else {
    console.log("Cargo Invalido!");
    return

}