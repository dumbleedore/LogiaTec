const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async findAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async addUser(req, res) {
    // HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const usermail = await User.findAll();

    // Verificando se já existe um email cadastrado
    for (var prop in usermail) {
      if (req.body.email === usermail[prop].email) {
        return res.json('Email já cadastrado.');
      }
    }
    const newUser = await User.create({
      username: req.body.username,
      password: hashPassword,
      nome: req.body.nome,
      email: req.body.email,
    });
    return res.json('Cadastrado com sucesso!');
  },
  async removeUser(req, res) {
    const user = await User.findByPk(req.params.id);
    User.destroy({ where: { id: user.id } });
    return res.json(user);
  },

  // AUTENTIFICAÇÃO
  async entrar(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      return res.status(500).send({ error: 'something is wrong!' });
    } else {
      const auth = bcrypt.compareSync(password, user.password);
      if (auth) {
        const usuario = { username: user.username, id: user.id };
        const token = jwt.sign({ usuario }, process.env.SECRET, {
          expiresIn: 600,
        });
        res.json({ auth: true, token: token });
      } else {
        return res.status(500).send({ error: 'something is wrong!' });
      }
    }
  },
};
