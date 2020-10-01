const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const artigo = require('./Artigo');
const { primaryKeyAttribute } = require('./Artigo');
const sequelize = new Sequelize('logiatec', 'root', 'lucas0905', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});

module.exports = User;
