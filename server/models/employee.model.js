const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    EmployeeID: { 
        type: Schema.Types.ObjectId,
        ref: "TaiKhoan"
    },
    LastName: { type: String, maxlength: 100 },
    FirstName: { type: String, maxlength: 100 },
    BirthDate: { type: Date},
    Photo: { type: String, maxlength: 255 },
    Notes: { type: String },
});

module.exports = mongoose.model('Employee', employeeSchema);