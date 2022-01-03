const express = require("express");
const router = express.Router();

const argon2 = require("argon2");
const taiKhoan = require("../models/taikhoan.model");

router.post("/create", async (req, res) => {
  const {
    tenTaiKhoan,
    loaiTaiKhoan,
    gioiTinh,
    email,
    matKhau,
  } = req.body;
  try {
    const hashedPassword = await argon2.hash(matKhau);
    const newTaiKhoan = new taiKhoan({
      tenTaiKhoan,
      loaiTaiKhoan,
      gioiTinh,
      email,
      matKhau: hashedPassword,
    });
    await newTaiKhoan.save();
    res.json({ success: true, newTaiKhoan });
  } catch (error) {
    console.log(error);
  }
});





module.exports = router;