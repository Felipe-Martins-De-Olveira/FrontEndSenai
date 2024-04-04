Algoritmo "SomaDezNumeros"
Var
   s, n: real
   contador: inteiro

Inicio
   s <- 0

   Para contador de 1 ate 10 faca
       Escreva("Digite o ", contador, "º número: ")
       Leia(n)
       s <- s + n
   FimPara

   Escreva("A soma total dos 10 números é: ", s)
FimAlgoritmo