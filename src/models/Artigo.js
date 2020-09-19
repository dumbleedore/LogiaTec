const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('logiatec', 'root', 'lu09051998', {
  host: 'localhost',
  dialect: 'mysql',
});
const user = require('./User');

const Artigo = sequelize.define('artigo', {
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  sobre: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});

user.hasMany(Artigo, {
  foreignKey: {
    allowNull: false,
  },
});

module.exports = Artigo;
