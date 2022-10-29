const { Router } = require('Express');

const router = Router();

router.get('/', (req, res) => {
    const { rating } = req.query
    const parseRating = parseInt(rating)
    if (!isNaN(parseRating)) {
        const resposta = listaComida.filter(item => item.rating >= parseRating)
        res.send(resposta)
    } else {
        res.send(listaComida)
    }
})


const listaComida = [
    {
        id: 1,
        comida: 'sorvete',
        rating: 9
    },
    {
        id: 2,
        comida: 'hamburguer',
        rating: 10
    },
    {
        id: 3,
        comida: 'pizza',
        rating: 9
    },
    {
        id: 4,
        comida: 'alface',
        rating: 5
    },
]

module.exports = router;