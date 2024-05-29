var texto = "Olá mundo, o mundo está bonito, tchau mundo";
var nome = "Victor";
var sobrenome = "Santos";

console.log("-------REPLACE-------")
console.log(texto)
// replace = replace troca o primeiro termo achado
console.log(texto.replace("mundo","banana"));
// replace = replace troca todos os termos encontrados
console.log(texto.replaceAll("mundo","olá"));

console.log("------IndexOf/Incluides------")
var alunos = ["Leo","Juliana","Fernanda",nome];

// IndexOf = pesquisa se um termo existe e retorna onde ele está
// se -1 é por que o termo não existe
// se 0 ou maior é por que o termo existe e se localizar nesse indice
var pesquisa = alunos.indexOf("Leandro");
// includes = pesquisa se um termo existe e retorna true ou false
var pesquisa2 = alunos.includes(nome)

if(pesquisa >= 0 || pesquisa == true){
    console.log("item foi encontrado!");
}else{
    console.log("Item não encontrado! Tente Novamente");
}