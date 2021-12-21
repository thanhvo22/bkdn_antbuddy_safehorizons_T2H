const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
    OrderID: { 
        type: Schema.Types.ObjectId,
        ref: "Order",
    },
    ProductID: { 
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    Quantity: { 
        type: Number
    }
});

module.exports = mongoose.model('OrderDetail', orderDetailSchema);