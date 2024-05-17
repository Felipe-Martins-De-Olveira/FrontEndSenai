function idade(){
    var  idade = Number(prompt ("Digite a sua idade: "));
    console.log(idade);    
    if(idade >= 0 && idade < 15){
        alert("Criança")
    }else if ( idade >= 15 && idade < 30){
        alert("Jovem CLT, Imposto Liberado")
    }else if( idade >= 30 && idade < 60){
        alert("Adulto")
    }else if ( idade >= 60){
        alert ("Idoso")
    }else{
        alert("Idade invalida")
    }
}

function conversor(){
var  real = Number(prompt (`Você quer gastar quando para comprar o dolar? `));
    dolar = 5.10
var total = real / dolar
alert("você tem " + total + (` de dolar`))
}
