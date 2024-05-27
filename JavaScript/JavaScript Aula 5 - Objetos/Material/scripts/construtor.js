class Clientevip {
    constructor(nomeP,cpfP,pagamentosP){
        // obs = atributo -> significa que o valor não pode ser alterado manualmente, apenas metodos poderão
        this._nome = nomeP;
        this.saldo = 0;
        this.cpf = cpfP;
        this.pagamentos = pagamentosP;
        }
        sacar(valor){
            console.log(valor)
        }
        depositar(valor){
            console.log(valor)
        }
    
    
}

var vip1 = new Clientevip("Davinci",9999999,["Pix"]);
var vip1 = new Clientevip("Alessandra",9999999,["Pix","Cartão"]);
