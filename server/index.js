const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MYSQL Client Setup
const mysql = require('mysql');
const db = mysql.createConnection({
  host: keys.mysqlHost,
  user: keys.mysqlUser,
  password: keys.mysqlPassword,
  database: keys.mysqlDatabase,
  port: keys.mysqlPort,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('MYSQL Connected...');
  }
});

// Express route handlers
app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/users/all', async (req, res) => {
  const q = 'SELECT * FROM users';
  const users = await db.query(q, (err, results) => {
    if (err) throw err;
    res.send(users);
  });
});

app.get('/paymenthistory', async (req, res) => {
  const q = '';
});

app.listen(5000, (err) => {
  console.log('Listening on port 5000');
});
