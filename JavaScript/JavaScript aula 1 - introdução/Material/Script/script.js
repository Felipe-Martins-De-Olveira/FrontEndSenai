//ESCREVAL()
// console.log = retorna valores no terminal/console
console.log ("hello world!");

//CAIXAS DE TEXTO
// açert = imprime um alerta na página 
// alert("Hello World")
// prompt = imprimindo uma mensagem e espera o usuario digitar algo
// prompt("Qual é seu nome?");
// confirm = imprimindo uma mensagem e espera o usuario escolher sim ou não
// confirm ("Deseja baixar novamente?");  

// var = variavel escopo global e sobrescrevivel
var varTeste = 0;
varTeste = 10;

// tipos de dados (teste de dados = typeof)
// varTeste = 5 Number
// varTeste "teste" - string
// varTeste = true - boolean
// varTeste = [] - object

// const = variavel escopo global e não é sobrescrevivel
const constTeste = 0
// const constTeste = 1

// let = variavel de escopo local e sobrevivels
function letTeste(){
    let letTeste = 0;
}

console.log(varTeste);
console.log(constTeste);
console.log (letTeste);

// parseFloat = converte para real
// parseInt = converte para inteiro
// Number = converte para número (tanto real, tanto inteiro)

// function = procedimento ou bloco de codigos que serão chamados para serem executados
function nome(){
    var nome = prompt("Qual é o seu nome?");
alert("Seja bem vindo " +nome+" Aproveite a estadia!") 
alert(`Seja bem vindo ${nome} Aproveite a estadia!`);

}

function somar(){
    var numero1 = parseFloat(prompt("Qual é o primeiro numero ")) ;
var numero2 = Number(prompt("Qual é o segundo número ") );

var resultado = numero1 + numero2
alert(resultado);
}

// paramentro = são identificadores dos valores passados dentro do parenteses
function produto(valor){
    alert(`este Produto vale : ${valor}`);    
    alert(`O nome do produto : ${nome}`);
}
