const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  EmployeeID: {
    type: Schema.Types.ObjectId,
    ref: "TaiKhoan",
  },
  LastName: { type: String, maxlength: 100 },
  FirstName: { type: String, maxlength: 100 },
  BirthDate: { type: Date },
  Photo: { type: String, maxlength: 255 },
  Notes: { type: String },
  tenTaiKhoan: {
    type: String,
    require: true,
  },
  loaiTaiKhoan: {
    type: String,
    enum: ["Admin", "Employee", "Customer"],
    default: "Admin",
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
});

module.exports = mongoose.model("Employee", employeeSchema);
