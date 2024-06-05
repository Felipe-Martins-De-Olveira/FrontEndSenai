    // catalogo
    var catalogo = []

    catalogo.push(new ProdutoTurimos("Japao","Visite a terra do sol nascente!",["Metro","Carro","Bicicleta"],3,10000, "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));
    catalogo.push(new ProdutoTurimos("Méxoco","Visite o México!",["Carro","Bicicleta","Coiote"],5,300, "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));
    catalogo.push(new ProdutoTurimos("Brasil","Visite o Brasil!",["Cavalo","Carro","Moto"],3,1000, "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));

    catalogo.forEach((elemento) =>{
        document.querySelector("#catalogo").innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${elemento.img}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column align-items-center">
                    <h5 class="card-title">${elemento.nome}</h5>
                    <p class="card-text">${elemento.descricaoLocal}</p>
                    <h5 class= "text-sucess"> ${elemento.valor} </h5>
                    <a href="#" class="btn btn-dark">COMPRAR</a>
                </div>
            </div>
            `
    })

    // Tema
    $("#btnTema").on("click",function(){
        if($("body").attr("data-bs-theme") == "light"){
            $("body").attr("data-bs-theme","dark");
        }else{
            $("body").attr("data-bs-theme","light");

        }
    })