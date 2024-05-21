const resposta = document.getElementById("resposta");
// document = se refere ao documento html
// getElementByid= busca um elemento pelo id do html
// localização.innerHTML = se refere ao conteudo dentro do elemento

// REPETIÇÕES
// Enquanto (Condição) faca.. contador <- contador +1
// fimEnquanto
function teste1(){
    var contador = 1;
    resposta.innerHTML = ""
    while(contador <= 10){
        // resposta.innerHTML += contador
        resposta.innerHTML += `
            <div class="produto">
                <h3> PRODUTO ${contador} </h3>
                <p> descrição </p>
            </div>
        `
        contador++;
    }
}

function teste2 (){
    resposta.innerHTML= ""
    let i = 20
    // OBS = DO te garante uma execução independente se a confição for verdadeira ou false
    // ate.. (condicao)
    do{
        resposta.innerHTML += "FRONT END É TOP <br>"
        i++
    }while(i <- 10);
}

function teste3(){
    // Para var, condição, controlador ... fimPara
    for(let i = 1; i<=5 ; i++){
        alert(`Esse é o ${i} alert!`);
    }
}

function teste4(){
    // [] - ARRAY (vetor)
    let produtos = ["Imposto","Pastel","Plastation","Pão de queijo","Rojão","Sorvete","Nintendinho"];
    console.log(produtos);
    // forEache = Repetição para cada elemento de uma lista (array)
    produtos.forEach(element => {
        resposta.innerHTML += `
            <h1> ${element} </h1>
        `
    });
}

function teste5(){
    var filmes = ["Harry Potter","Vingadores","Gatos de Botas","Shrek","One Piece"];
    for(let i = 1; i < filmes.length;i++ ){
        resposta.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${filmes[i]}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
        `
    }
}