Algoritmo "MaiorNumero"
Var
   quantidade, contador: inteiro
   n, m: real

Inicio
   Escreva("Digite a quantidade de números a serem lidos: ")
   Leia(quantidade)

   Escreva("Digite o 1º número: ")
   Leia(m)

   Para contador de 2 ate quantidade faca
       Escreva("Digite o ", contador, "º número: ")
       Leia(n)
       Se n > m Entao
           m <- n
       FimSe
   FimPara

   Escreva("O maior número lido é: ", maior)
FimAlgoritmo