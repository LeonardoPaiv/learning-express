const express = require('express');
const testeRouter = require('./routes/teste');
const comidaRouter = require('./routes/comida');

const app = express();
const port = 3001;

app.listen(port, () => console.log(`Running express on port ${port}`));

// Middleware 
app.use(express.json())
app.use((req, res, next) => {
    console.log('eu passei aqui')
    console.log(req.url)
    next()
})

app.use('/api', testeRouter)

app.use('/api/comida', comidaRouter)
