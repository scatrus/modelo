const express = require('express')
const app = express()
const port = 3000

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./db.sqlite3"
    },
    useNullAsDefault: true
});

app.use(express.static(__dirname));
app.use(express.json());

//LISTAR=============================================================================

app.get('/listar', async (req, res) => {
    try {
        const users = await knex('users')
            .select();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
})

//CADASTRAR=============================================================================

app.post('/', async (req, res) => {
    try {
        await knex('users')
            .insert(req.body)
        res.status(200).json("Inserido com sucesso!");

    } catch (error) {
        res.status(500).json({ error });
    }
})


//ALTERAR=============================================================================

app.put('/:id', async (req, res) => {
    try {
        await knex('users')
            .update(req.body)
            .where(req.params)
        res.status(200).json("Alterado com sucesso!");

    } catch (error) {
        res.status(500).json({ error });
    }
})

//EXCLUIR=============================================================================

app.delete('/:id', async (req, res) => {
    try {
        await knex('users')
            .where(req.params)
            .del()
        res.status(200).json("Usuário " + req.params.id + " Deletado com sucesso!");

    } catch (error) {
        res.status(500).json({ error });
    }
})

//====================================================================================

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



