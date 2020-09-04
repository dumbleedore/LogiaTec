const User = require('../models/User')
const mongoose = require('mongoose')


module.exports = {
    async findAll(req,res){
        const users = await User.find()
        return res.json(users)
    },
    async addUser(req,res){
        const user = await User.create(req.body)
        return res.json(user)
    }

}