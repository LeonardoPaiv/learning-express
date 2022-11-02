const mongoose = require('mongoose');

const comidaSchema = mongoose.Schema({
    comida: String,
    rating: Number
})

const comidaModel = mongoose.model('comidas', comidaSchema)

module.exports = comidaModel