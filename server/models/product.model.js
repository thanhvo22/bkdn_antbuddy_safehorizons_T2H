const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    ProductName: { type: String, maxlength: 100 },
    SupplierID: { 
        type: Schema.Types.ObjectId,
        ref: "Supplier",
    },
    CategoryID: { 
        type: Schema.Types.ObjectId,
        ref: "Category", 
    },
    Unit: { type: String, maxlength: 255 },
    Price: { type: Number}
});

module.exports = mongoose.model('Product', productSchema);