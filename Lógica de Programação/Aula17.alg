algoritmo "semnome"
var
    n1, n2, resultadom, adicao, subtracao, multiplicacao, divisao: real
    operacao: caractere

inicio
   escreva(" Digite o primeiro número: ")
    leia(n1)
    escreva(" Digite o segundo número: ")
    leia(n2)
    escreval(" Digite a operação desejada ")
    escreval ("(A) Adição ")
    escreval ("(B) subtração ")
    escreval ("(C) Multiplicação")
    escreval ("(D) divisão")
    leia(operacao)
         escolha operacao
        caso "A"
            adicao <- n1 + n2
            escreva(" O resultado da adição é: ", adicao)
        caso "B"
            subtracao <- n1 - n2
            escreva("O resultado da subtração é: ", subtracao)
        caso "C"
            multiplicacao <- n1 * n2
            escreva(" O resultado da multiplicação é: ", multiplicacao)
        caso "D"
            se n2 <> 0 então
                divisao <- n1 / n2
                escreva(" O resultado da divisão é: ", divisao)
            senão
                escreva(" Não é possível dividir por zero.")
            fimse
        caso contrário
            escreva(" Operação inválida.")
    fimescolha
fimalgoritmo