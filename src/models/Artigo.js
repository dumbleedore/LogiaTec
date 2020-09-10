const mongoose = require('mongoose')
const User = require('./User')

ArtigoSchema = mongoose.Schema({
    owner : {
        type : Number
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required:true
    },
    buildAt: {
        type : Date,
        default : Date.now()
    }

})

const Artigo = mongoose.model("artigo",ArtigoSchema)
module.exports = Artigo

