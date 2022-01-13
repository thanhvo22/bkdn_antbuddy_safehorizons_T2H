const express = require("express");
const router = express.Router();

const argon2 = require("argon2");
const Customer = require("../models/customer.model");

router.post("/create", async (req, res) => {
  const {
    tenTaiKhoan,
    gioiTinh,
    email,
    matKhau,
  } = req.body;
  try {
    const hashedPassword = await argon2.hash(matKhau);
    const newAccountCustomer = new Customer({
      tenTaiKhoan,
      gioiTinh,
      email,
      matKhau: hashedPassword,
    });
    await newAccountCustomer.save();
    res.json({ success: true, newAccountCustomer });
  } catch (error) {
    console.log(error);
  }
});





module.exports = router;