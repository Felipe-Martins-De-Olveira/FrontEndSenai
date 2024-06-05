class ProdutoTurimos {
    constructor(nome,descricaoLocal,tiposLocomocao,diasPacote,valor,img){
        this.nome = nome,
        this.descricaoLocal = descricaoLocal,
        this.diasPacote = diasPacote,
        this.valor = valor,
        this.img = img
    } 
}

var teste = new ProdutoTurimos("NomeLocal","desc",["carro"],5,100,"src")