algoritmo "semnome"
var
contador, valor, negativos: inteiro
inicio
negativos <- 0
contador <- 0
         repita
 contador <- contador + 1
 escreva(" digite o valor ", contador, ": ")
 leia(valor)
            se (valor < 0) entao
            negativos <- negativos - 1
 fimse
      ate contador = 10
      escreval("Total de valore negativos: ", negativos)
          

          

fimalgoritmo