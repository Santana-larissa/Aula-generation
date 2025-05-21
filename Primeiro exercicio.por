programa {
    funcao inicio() {
        inteiro vetor[10]
        inteiro i, j, aux

        // Atribuição dos valores do exercício
        vetor[0] = 2
        vetor[1] = 5
        vetor[2] = 1
        vetor[3] = 3
        vetor[4] = 4
        vetor[5] = 9
        vetor[6] = 7
        vetor[7] = 8
        vetor[8] = 10
        vetor[9] = 6

        // Ordenação em ordem decrescente
        para (i = 0; i < 9; i++) {
            para (j = 0; j < 9 - i; j++) {
                se (vetor[j] < vetor[j + 1]) {
                    aux = (vetor[j])
                    vetor[j] = (vetor[j + 1])
                    vetor[j + 1] = aux
                }
            }
        }

        // Exibir vetor ordenado
        escreva("Vetor ordenado em ordem decrescente:")
        para (i = 0; i < 10; i++) {
            escreva(vetor[i], " ")
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 854; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */