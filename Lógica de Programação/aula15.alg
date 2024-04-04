algoritmo "semnome"
var
   n1, n2, n3, maior, meio, menor: inteiro
inicio
escreva ("Digite seu primeiro numero: ")
leia (n1)
escreva ("Digite seu segundo numero: ")
leia (n2)
escreva ("Digite seu terceiro numero: ")
leia (n3)

se (n1 < n2) e (n1 < n3) entao
escreva (n1, ",")
se (n2 < n3) entao
escreva (n2, ",", n3)
senao
escreva (n3, "," ,n2)
        fimse
       senao se (n2 < n1) e (n2 < n3) entao
        escreva (n2, ",")
       se (n1 < n3) entao
        escreva (n1 , ",", n3)
       senao
        escreva (n3, ", ", n1)
       fimse
     senao
     fimse
          escreva (n3, ",")
     se (n1 < n2) entao
        escreva (n1, ",", n2)
     senao
          escreva (n2, ",", n1)
          fimse
        
 escreva (" São os números crescente de descrecente. ")
fimalgoritmo


