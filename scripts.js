function listar() {
    axios.get('http://localhost:3000/listar')
        .then(response => criaListaDinamica(response.data))
        .catch(error => console.log(error))
    const criaListaDinamica = (users) => {


        var div = document.getElementById('linhas')
        var novalinha = document.createElement('tr')
        div.appendChild(novalinha)

        const cel = document.createElement('th')
        cel.innerHTML = 'Id'
        novalinha.appendChild(cel)
        const nome = document.createElement('th')
        nome.innerHTML = 'Usuário'
        novalinha.appendChild(nome)
        const sobrenome = document.createElement('th')
        sobrenome.innerHTML = 'Sobrenome'
        novalinha.appendChild(sobrenome)


        console.log(users.length)
        users.map(usuario => {
            // for (var i = 0; i < users.length; i++) {

            var div = document.getElementById('linhas')
            var novalinha = document.createElement('tr')
            div.appendChild(novalinha)

            const cel = document.createElement('td')
            cel.innerHTML = `${usuario.id}`
            novalinha.appendChild(cel)
            const nome = document.createElement('td')
            nome.innerHTML = `${usuario.first_name}`
            novalinha.appendChild(nome)
            const sobrenome = document.createElement('td')
            sobrenome.innerHTML = `${usuario.last_name}`
            novalinha.appendChild(sobrenome)
            const botoes = document.createElement('th')
            botoes.innerHTML = `<button>Alterar</button> <button>Excluir</button>`
            novalinha.appendChild(botoes)
            // }

        })
    }
}

//erro 500
function cadastrar(event) {
    event.preventDefault();

axios({
    method: 'post',
    url: '/',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
})
}
