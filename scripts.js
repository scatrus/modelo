function listar() {
    axios.get('http://localhost:3000/listar')
        .then(response => criaTabDinamica(response.data))
        .catch(error => console.log(error))
    const criaTabDinamica = (users) => {


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

function cadastrar(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value
    const sobrenome = document.querySelector('#sobrenome').value

    axios.post('http://localhost:3000/',
        {
            first_name: nome,
            last_name: sobrenome
        })
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
