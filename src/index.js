require('dotenv').config();

const express = require('express');
const cors = require('cors')

const corsOpitions = {
    origin: 'http://localhost:4200',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}

const mongoose = require('mongoose')
mongoose.connect(process.env.bdAtlas).then(() => {
    console.log('conexão com banco estabelecida');
    app.emit('on');
})

const testeRouter = require('./routes/teste');
const comidaRouter = require('./routes/comida');

const app = express();
const port = 3001;

app.on('on', () => {
    app.listen(port, () => console.log(`Running express on port ${port}`));
})

// Middleware 
app.use(express.json())
app.use((req, res, next) => {
    console.log('eu passei aqui')
    console.log(req.url)
    next()
})


app.use(cors(corsOpitions))
app.use('/api', testeRouter)
app.use('/api/comida', comidaRouter)
