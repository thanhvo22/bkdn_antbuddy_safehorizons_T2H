const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    SupplierName: { type: String, maxlength: 255 },
    ContactName: { type: String, maxlength: 50 },
    Address: { type: String, maxlength: 255 },
    City: { type: String, maxlength: 255 },
    PostalCode: { type: String, maxlength: 255 },
    Country: { type: String, maxlength: 20 },
    Phone: {type: String, maxlength: 11, unique: true}
});

module.exports = mongoose.model('Supplier', supplierSchema);