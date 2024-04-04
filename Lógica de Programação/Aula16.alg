algoritmo "semnome"
var
   n1, n2, n3, n4, s1, s2, s3, acertos: inteiro
inicio
escreva("Digite o primeiro número apostado: ")
    leia(n1)
    escreva("Digite o segundo número apostado: ")
    leia(n2)
    escreva("Digite o terceiro número apostado: ")
    leia(n3)
    escreva("Digite o quarto número apostado: ")
    leia(n4)

escreva("Digite o primeiro número sorteado: ")
    leia(s1)
    escreva("Digite o segundo número sorteado: ")
    leia(s2)
    escreva("Digite o terceiro número sorteado: ")
    leia(s3)

acertos <- 0

se (n1 = s1) ou (n1 = s2) ou (n1 = s3) entao
        acertos <- acertos + 1
    fimse

    se (n2 = s1) ou (n2 = s2) ou (n2 = s3) entao
        acertos <- acertos + 1
    fimse

    se (n3 = s1) ou (n3 = s2) ou (n3 = s3) entao
        acertos <- acertos + 1
    fimse

    se (n4 = s1) ou (n4 = s2) ou (n4 = s3) entao
        acertos <- acertos + 1
    fimse

    escreva("O jogador fez ", acertos, " acertos.")
fimalgoritmo