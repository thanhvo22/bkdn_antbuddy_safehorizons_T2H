const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  CustomerID: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
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
  Price: { type: Number },
});

module.exports = mongoose.model("Product", productSchema);
