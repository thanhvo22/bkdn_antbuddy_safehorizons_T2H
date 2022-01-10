const mongoose = require("mongoose");
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
  Products: [
    {
      ProductID: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      Quantity: {
        type: Number,
      },
    },
  ],
  OrderDate: {
    type: Date,
    default: Date.now(),
  },
  ShipperID: {
    type: Schema.Types.ObjectId,
    ref: "Shipper",
  },
  Status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  Total: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Order", orderSchema);
