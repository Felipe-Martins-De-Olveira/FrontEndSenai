// promisses
// Promisse é uma promessa, onde podemos cumprir com o esperado, ou quebrar a promessa de um resultado esperado
// resolve = o programa rodou dentro dos padrões
// reject = algo saiu do esperado!
// reject(reason), reason = o motivo daquela promessa ter sido quebrada
var promessa = new Promise((resolve,reject) => {
    let nome = "Leo";
    console.log("----Promise----")

    if(nome == "Victor"){
        resolve("O urusario foi encontrado!")
    }else{
        reject("O usuario não é o Victor")
    }
})
    // promessa.então(faca => {algo})
    // then = roda o programa esperado resultados programados
    promessa.then((resultado) => {
        console.log(resultado)
    })

    // Promessa.então(faça => {algo esperando um erro})
    // catch = roda o programa esperado todos os resultados não
    promessa.catch((resultado) => {
        console.log (resultado)
    })



function codigoDemorado(){
    return new Promise ((resolve) => {
        // setTimeout = define um cronometro antes de rodar o bloco de código
        // coloqueiUmTempo (faca {algo}, emQuantoTempo) obs: A contagem é feita em milisegundo
        setTimeout(() => {
            console.log("Enrolei")
            resolve()
        },2000)
     })
}

// assincrono = le o codigo em ordem, porque se uma linha demora, ele ignora ou roda após a ordem correta
// sincrono = le o codigo em ordem, porem ele tem a capacidade de espera um processo acontecer para poder continuar a sua leitura
async function carregando(){
    console.log("Comecei")
    // await = aguarde um processo ser concluido, antes de continuar a leitura do código
    await codigoDemorado()
    console.log("Terminei")
}

carregando()    