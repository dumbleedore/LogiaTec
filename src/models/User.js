const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const artigo = require('./Artigo');
const { primaryKeyAttribute } = require('./Artigo');
const sequelize = new Sequelize('logiatec', 'root', 'lu09051998', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});

module.exports = User;
