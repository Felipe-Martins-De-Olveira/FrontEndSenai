document.querySelector("#cadastrarBtn").addEventListener("click", cadastrarCarro)

var carro

function listarCarro(){
    document.querySelector("#principal").innerHTML = `
    <div id="carro" class="${carro.cor}">
            <div id="janelas">
            <div class="janela"></div>
        </div>
        <div id="rodas">
            <div class="rodas"></div>
            <div class="rodas"></div>
        </div>
    </div>
    <h3> Marca do Carro : ${carro.marca} </h3>
    <h3> Modelo do Carro : ${carro.modelo} </h3>
    <h3> velMax do Carro : ${carro.velMax} </h3>
    <h3> velAtual do Carro : ${carro.velAtual} </h3>
    <input onfocusout="acelerar()" type= "number" id="acelerar" min="0" max="${carro.velMax}" placeholder="Insira um valor para acelerar">
`
}

function cadastrarCarro(){
    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let cor = document.querySelector("#cor").value;
    let velMax = Number(document.querySelector("#velMax").value);

    carro = new Carro(marca,modelo,cor,velMax);

        listarCarro()
}

function acelerar(){
    let km = Number(document.querySelector("#acelerar").value)

    carro.acelerar(km); 

    listarCarro()
}