const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    CustomerName: { type: String, maxlength: 255 },
    ContactName: { type: String, maxlength: 50 },
    Address: { type: String, maxlength: 255 },
    City: { type: String, maxlength: 255 },
    PostalCode: { type: String, maxlength: 255 },
    Country: { type: String, maxlength: 50 },
});

module.exports = mongoose.model('Customer', customerSchema);