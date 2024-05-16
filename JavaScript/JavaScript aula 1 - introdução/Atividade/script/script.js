// O function Exercicio1, ele tem como função coletar quantos clientes e quando que a mesa gastou, e fazer com que esse valor seja distribuido de forma igual
// INPUT = quantidadeClientes, valorTotalMesa
// OUTPUT = valorDividido
function Exercicio1(){
    let qntClientes = Number(prompt("Insira a quantidade de clientes na mesa : "));
    let valorTotalMesa = Number(prompt("Insira qual foi o valor total da mesa R$"));

    let valorDividido = valorTotalMesa/qntClientes
    alert(`O valor para cada cliente sera de R$: ${valorDividido.toFixed(2)}`);
    // alert(`O valor para cada cliente será R$: ${(valorTotalMesa/qntClientes.toFixed(2))}`)
}

// o function Exercicio2 , ele tem como função coletar um numero, e logo em seguida demonstrar, em ordem, antecessor o número em si, e seu sucessor.
// INPUT : numero
// OUTPUT: antecessor, numero, sucessor
function Exercicio2(){
    let numero = Number(prompt("Digite o número desejado!"));
    let antecessor = numero - 1;
    let sucessor = numero + 1;

    alert(`O antecessor é : ${antecessor}, o número escolhido é : ${numero}, e o ${sucessor}`);
}