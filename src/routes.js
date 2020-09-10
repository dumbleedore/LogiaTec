const express = require('express')
const router = express.Router()
const userController = require('./controller/UserController')
const artigoController = require('./controller/ArtigoController')

// ROTAS USUARIO
router.get('/users',userController.findAll)

router.delete('/users/delete/:id',userController.removeUser)

router.post('/users/add',userController.addUser)

// ROTAS ARTIGO

router.get("/artigos",artigoController.getArtigos)


module.exports = router