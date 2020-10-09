const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const { Sequelize, DataTypes } = require('sequelize');
const artigo = require('./models/Artigo');
const user = require('./models/User');
const cors = require('cors');

require('dotenv-safe').config();
var jwt = require('jsonwebtoken');

app.use(
  cors({
    origin: ['http://localhost:3000/'],
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);

// CONNECTING TO THE DATABASE
const sequelize = new Sequelize('logiatec', 'root', 'lucas0905', {
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
