$("#botoes").html(`
    <button onclick="animacao1()" type="button">FECHAR</button>
    <button onclick="animacao2()" type="button">ABRIR</button>
    <button onclick="animacao3()" type="button">ANIMACAO3</button>
    <button onclick="animacao4()" type="button">ANIMACAO4</button>
    <button onclick="animacao5()" type="button">ANIMACAO5</button>
`)

function animacao1(){
    $("#caixa").slideUp(500);
    $("#caixa").addClass("mudeiCor")
}

function animacao2(){
    $("#caixa").slideDown(500);
}

function animacao3(){
    // elemento.animate({}) = aplica uma animação e dentro das chaves nós podemos alterar o css do elemento especificado.
    //  { atributo : "valor"}
    $("#caixa").animate({ borderRadius : "100%", width : "250px"   });
    $("#caixa").css("backgroundColor", "red");
    // Aplicar imagem
    // elemento.css("backgroundImg","src")
}

function animacao4(){
    // animate().animate() = animação encadeada, espera a etapa anterior finalizar para assim ser efetuada
    $("#caixa").animate({width : "100%"}).animate ({height : "500px"});
}

function animacao5(){
    // animate ({},{}) = a segunda chave se refere a opções da animação, e dentro das opções se colocado () => {} poderemos engatilhar uma função!
    $("#caixa").animate({ margin : "20px", rotate : "360deg"  },{ duration : 2000 , complete : () => {
        $("#caixa").text("CUPOM RELAMPAGO!!!")
        alert ("Fica frio ai") 
        animacao1()
    }});
}