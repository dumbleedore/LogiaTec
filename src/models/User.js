const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const artigo = require('./Artigo');
const { primaryKeyAttribute } = require('./Artigo');
const sequelize = new Sequelize('logiatec', 'root', 'lu09051998', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
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
  name: {
    type: DataTypes.STRING(100),
  },
});

module.exports = User;
