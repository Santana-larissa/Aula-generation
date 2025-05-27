const leia = require ('readline-sync')

let op, qtd, valor

console.log("\tCódigo do Produto \t\tProduto \t\tPreço Unitário");
console.log("\t1 \t\t   cachorro quente \t   R$ 10,00\n");
console.log("\t2 \t\t   X-Salada  \t   R$ 10,00\n");
console.log("\t3 \t\t   X-Bacon   \t   R$ 10,00\n");
console.log("\t4 \t\t   Bauru     \t   R$ 10,00\n");
console.log("\t5 \t\t   Refrigerante \t   R$ 10,00\n");
console.log("\t6 \t\t   Suco de laranja \t   R$ 10,00\n");


op = leia.questionInt("Codigo do produto: ");
qtd = leia.questionInt("Qual a quantidade: ");

switch (op) {
    case 1:
        valor = qtd * 10.00
        console.log("\nProduto: cachorro quente");
        console.log(`Valor total: ${valor},\n`);
        break
    case 2:
        valor = qtd * 15.00
        console.log("\nProduto: X-Salada");
        console.log(`Valor total: ${valor},00\n`);
        break
    case 3:
        valor = qtd * 18.00
        console.log("\nProduto: X-bacon");
        console.log(`Valor total: ${valor},00\n`);
        break
    case 4:
        valor = qtd * 12.00
        console.log("\nProduto: Bauru");
        console.log(`Valor total: ${valor},00\n`);
        break
    case 5:
        valor = qtd * 8.00
        console.log("\nProduto: Refrigerante");
        console.log(`Valor total: ${valor},00\n`);
        break
    case 6:
        valor = qtd * 13.00
        console.log("\nProduto: Suco de laranja");
        console.log(`Valor total: ${valor},00\n`);
        break
    default:
        console.log("Produto não encontrado: ")
        return
}