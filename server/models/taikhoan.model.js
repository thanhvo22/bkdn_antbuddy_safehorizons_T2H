const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaiKhoanSchema = new Schema({
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
  },
  CustomerID: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});

module.exports = mongoose.model("TaiKhoan", TaiKhoanSchema);
