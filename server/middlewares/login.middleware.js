require('dotenv').config();
const jwt = require("jsonwebtoken");
const taikhoan = require("../models/taikhoan.model");

const verifyToken = async (req, res, next) => {
  const cookie = req.cookies["jwt"];
  const claim = jwt.verify(cookie, process.env.SECRET_TOKEN);
  if (!claim) {
    return res.status(401).json("unauthenticated");
  }
  const adminVerify = await taikhoan.findOne({ _id: claim.userId });
  if (adminVerify.loaiTaiKhoan !== "Admin") {
    return res.send("access denied");
  }
  req.adminId = claim.userId;
  next();
};

module.exports = verifyToken;