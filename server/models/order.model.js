const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    CustomerID: { 
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },
    EmployeeID: { 
        type: Schema.Types.ObjectId,
        ref: "Employee",
    },
    OrderDate: { 
        type: Date,
        default: Date.now(), 
    },
    ShipperID: { 
        type: Schema.Types.ObjectId,
        ref: "Shipper",
    }
});

module.exports = mongoose.model('Order', orderSchema);