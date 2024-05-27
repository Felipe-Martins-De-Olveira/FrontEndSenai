// var cliente = "Leo";
// var clienteConta = 1;
// var clienteSaldo = 0;
// var clientePagamentos = ["Pix", "Crédito"];
// var clienteCpf = 99999999
// var clienteRg = 88888;

// var cliente1 = ["nome","conta","pagamentos"];

// POO (PROGRAMAÇÃO ORIENTADA A OBJETO)
// class = é um molde de objeto
class cliente{
    // atributo / propriedade = são caracteristicas de objeto
    nome;
    conta;
    saldo;
    pagamentos;
    cpf;
    rg;
    dataDeNascimento;
    // metodo = metodo é um ação feita pelo objeto
    sacar(valor){
        this.saldo -= valor
        // return = retorna u, valor assim que o metodo for chamado
        return `O valor de R$ ${valor} foi sacado com sucesso!`
    }
        depositar(valor){
        this.saldo += valor
        return `O valor de R$ ${valor} foi depositado com sucesso!`
    }
} 

// new ClassNome = Um novo objeto baseado pelo molde, o class
var cliente1 = new cliente;
cliente1.nome = "Leon";
cliente1.conta = 1;
cliente1.pagamentos = ["Pix", "Débito"];
cliente1.cpf = 9999999;
cliente1.rg = 888888;
cliente1.dataDeNascimento = "13/02/2001"


var cliente2 = new cliente;
