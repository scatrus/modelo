
function listar() {
    axios.get('http://localhost:3000/listar')
        .then(response => criaTabDinamica(response.data))
        .catch(error => console.log(error))
    const criaTabDinamica = (users) => {


        var div = document.getElementById('linhas')

        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }

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
            const botoes = document.createElement('td')
            botoes.innerHTML = `<button onclick="alterar(this)">Alterar</button> <button onclick="excluir(this)">Excluir</button>`
            novalinha.appendChild(botoes)

        })

    }
}

function cadastrar(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value
    const sobrenome = document.querySelector('#sobrenome').value

    console.log(nome, sobrenome)

    axios.post('http://localhost:3000/',
        {
            first_name: nome,
            last_name: sobrenome
        })
        .then(function (res) {
            alert(res.data);
            document.querySelector('#nome').value = ""
            document.querySelector('#sobrenome').value = ""
        })
        .catch(function (error) {
            console.log(error);
        });
    listar()
}

function excluir(el) {

    var id = el.parentNode.parentNode.firstChild.textContent
    axios.delete('/' + id)
        .then(function (res) {
            alert(res.data);
            listar()
        })
}

function alterar(el) {

    var id = el.parentNode.parentNode.querySelectorAll("td")[0].textContent
    var nome = el.parentNode.parentNode.querySelectorAll("td")[1].textContent
    var sobrenome = el.parentNode.parentNode.querySelectorAll("td")[2].textContent

    document.querySelector('#nome').value = nome
    document.querySelector('#sobrenome').value = sobrenome


    var div = document.getElementById('linhas')

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    document.querySelector('#cadastrar').innerHTML = "Alterar"
    var botao = document.querySelector('#cadastrar')
    botao.setAttribute("onClick", `concluir(${id})`);

}

function concluir(id) {
    axios.put('/' + id, {
        first_name: document.querySelector('#nome').value,
        last_name: document.querySelector('#sobrenome').value
    })

        .then(function (res) {
            alert(res.data);
            listar()
        })

    document.querySelector('#cadastrar').innerHTML = "Cadastrar"
    var botao = document.querySelector('#cadastrar')
    botao.setAttribute("onClick", "cadastrar(event)");
    document.querySelector('#nome').value = ""
    document.querySelector('#sobrenome').value = ""

}


listar()