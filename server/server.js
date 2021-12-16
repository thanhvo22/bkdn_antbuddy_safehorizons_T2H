const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const categoryRouter = require('./routes/category.route');
const db = require('./connect');

db.connect();

const app = express();


app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));    // parse application/x-www-form-urlencoded


app.use('/api/category', categoryRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(9000, () => {
  console.log(`Example app listening at http://localhost:9000   `);
});