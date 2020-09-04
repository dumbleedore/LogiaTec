const mongoose = require('mongoose')

// CRIANDO MODEL USER
UserSchema = mongoose.Schema({
    username : {
        type:String,
        required : true
    },
    password : {
        type: String,
        required: true
    },
    buildAt : {
        type: Date,
        default: Date.now()
    }
})


const User = mongoose.model('user',UserSchema)
module.exports = User