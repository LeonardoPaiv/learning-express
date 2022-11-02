const comidaModel = require('../models/comidaModel');

const { Router } = require('express');

const router = Router();

// router.get('/', (req, res) => {
//     const { rating } = req.query
//     const parseRating = parseInt(rating)
//     if (!isNaN(parseRating)) {
//         const resposta = listaComida.filter(item => item.rating >= parseRating)
//         res.send(resposta)
//     } else {
//         res.send(listaComida)
//     }
// })

router.get('/', (req, res) => {
    comidaModel.find().then(comidas => res.send(comidas)).catch(e => console.log(e))
})

router.post('/', (req, res) => {
    comidaModel.create(req.body)
    .then(dados => {
        console.log(dados)
        res.sendStatus(201)
    }).catch(e => console.log(e))
})


module.exports = router;