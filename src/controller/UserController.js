const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async findAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async addUser(req, res) {
    // HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      username: req.body.username,
      password: hashPassword,
    });
  },
  async removeUser(req, res) {
    const user = await User.findByPk(req.params.id);
    User.destroy({ where: { id: user.id } });
    return res.json(user);
  },
};
