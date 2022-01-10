const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  try {
    //const product = await Product.find();
    let product = await Product.find().populate(['SupplierID', 'CategoryID']);
    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  const product = await Product.findOne({ _id: id });
  res.json({
    success: true,
    data: product,
  });
});

router.post("/create", async function (req, res) {
  try {
    let product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    let updateProduct = await Product.findById(req.params.id).exec();
    updateProduct.set(req.body);
    let result = await updateProduct.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: req.params.id });
    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
});

module.exports = router;
