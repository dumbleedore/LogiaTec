const express = require('express')
const router = express.Router()
const userController = require('./controller/UserController')

router.get('/users',userController.findAll)


module.exports = router