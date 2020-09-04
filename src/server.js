const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
app.use(bodyParser.json())

// CONEXÃO AO BANCO DE DADOS
mongoose.connect('mongodb+srv://lucas:lucas@logiatec.i80qw.gcp.mongodb.net/users?retryWrites=true&w=majority',
{useNewUrlParser : true,useUnifiedTopology: true}).then(() =>{
    console.log('Conectado ao MongoDB')
})





app.use('/api/', require('./routes'))

app.listen(process.env.PORT || 5000,()=>{
    console.log('Running on http://localhost:5000')
});