const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const { Sequelize, DataTypes } = require('sequelize');
const artigo = require('./models/Artigo');
const user = require('./models/User');

// ARUMANDO CORS PARA PODER PUXAR DADOS DA API
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// CONNECTING TO THE DATABASE
const sequelize = new Sequelize('logiatec', 'root', 'lu09051998', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
// CREATING TABLES
/* user.sync();
artigo.sync();
 */
app.use('/api/', require('./routes'));

app.listen(process.env.PORT || 5000, () => {
  console.log('Running on http://localhost:5000');
});
