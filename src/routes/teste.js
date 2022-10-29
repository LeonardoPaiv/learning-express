const { Router } = require('express');

const router = Router();

router.get('/teste', (req, res) => {
    res.send(lista)
})

router.get('/teste/:id', (req, res) => {
    const id = parseInt(req.params.id);
    resposta = lista.find(lista => lista.id === id)
    res.send(resposta)
})

router.post('/teste', (req, res) => {
    lista.push(req.body)
    res.sendStatus(201)
})

router.put('/teste', (req, res) => {
    produto = lista.map(lista => lista.id === req.body.id, lista = req.body)
    console.log(produto)
    res.sendStatus(200)
})


let lista = [
    {   
        id: 1,
        name: 'leonardo',
        sobrenome: 'paiva'
    },
    {
        id: 2,
        name: 'mateus',
        sobrenome: 'paiva'
    },
]
module.exports = router;