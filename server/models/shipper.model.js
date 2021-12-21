const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipperSchema = new Schema({
    ShipperName: { type: String, maxlength: 100 },
    Phone: { type: String, maxlength: 10, unique: true },
});

module.exports = mongoose.model('Shipper', shipperSchema);