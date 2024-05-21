var filmes = [
["Harry Potter","Shrek"],
["Poderoso chefão","Star Wars"],
["Senhor dos anéis","Vingadores"],
["Uma jornada de habbits"],["Vingadores"],
["Os herois mais poderosos da terra"],
["Tenet","Ficção cientifica"]
]

var grupoFilmes = document.getElementById ("grupoFilmes");

filmes.forEach(element => {
    grupoFilmes.innerHTML += ` 
    <div class="filme">
        <h5>${element[0]}</h5>
        <p>${element[1]}</p>
    <button class="verMais">Ver Mais</button>
</div>
`
});






