const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  CustomerID: {
    type: Schema.Types.ObjectId,
    ref: "TaiKhoan",
  },
  CustomerName: { type: String, maxlength: 255 },
  ContactName: { type: String, maxlength: 50 },
  Address: { type: String, maxlength: 255 },
  City: { type: String, maxlength: 255 },
  PostalCode: { type: String, maxlength: 255 },
  Country: { type: String, maxlength: 50 },
  tenTaiKhoan: {
    type: String,
    require: true,
  },
  loaiTaiKhoan: {
    type: String,
    enum: ["Admin", "Employee", "Customer"],
    default: "Customer",
  },
  gioiTinh: {
    type: String,
    enum: ["Nam", "Nữ"],
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  matKhau: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("Customer", customerSchema);
