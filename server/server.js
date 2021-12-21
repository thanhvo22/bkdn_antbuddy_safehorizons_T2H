const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const categoryRouter = require('./routes/category.router');
const customerRouter = require('./routes/customer.router');
const employeeRouter = require('./routes/employee.router');
const shipperRouter  = require('./routes/shipper.router');
const supplierRouter = require('./routes/supplier.router');
const productRouter  = require('./routes/product.router');
const orderRouter    = require('./routes/order.router');
const orderDetailRouter = require('./routes/orderDetail.router');

const db = require('./connect');

db.connect();

const app = express();


app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));    // parse application/x-www-form-urlencoded


app.use('/api/category', categoryRouter);
app.use('/api/customer', customerRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/shipper', shipperRouter);
app.use('/api/supplier', supplierRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);
app.use('/api/orderDetail', orderDetailRouter);



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(9000, () => {
  console.log(`Example app listening at http://localhost:9000   `);
});