Algoritmo "Nata��o"

    var
        idade: inteiro

    inicio
        escreval ("Escreva a Idade do participante")
        leia (idade)
        
                se (idade >= 5) e (idade <= 7) entao
                     escreval ("O competidor est� na categoria 'Infantil A!'")
                senao
                     se (idade >= 8) e (idade <= 11) entao
                        escreval ("O competidor est� na categoria 'Infantil B!'")
                     senao
                          se (idade >= 12) e (idade <= 13) entao
                             escreval ("O competidor est� na categoria 'Juvenil A!'")
                          senao
                               se (idade >= 14) e (idade <= 17) entao
                                  escreval ("O competidor est� na categoria 'Juvenil B'!")
                               senao
                                    se (idade >= 18) entao
                                       escreval ("O competidor est� na categoria 'Adultos'!")
                                    senao
                                         escreval ("Idade insuficiente!")

           fimSe
        fimSe
      fimSe
    fimSe
 fimSe

Fimalgoritmo