const User = require('../models/User')


module.exports = {
    async findAll(req,res){
        const users = await User.find()
        return res.json(users)
    },
    async addUser(req,res){
        const user = await User.create(req.body)
        return res.json(user)
    },
    async removeUser(req,res){
        const user = await User.findByIdAndDelete(req.params.id)
        return res.json(user)
    }


}