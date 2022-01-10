const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

router.get("/", async (req, res) => {
  try {
    const order = await Order.find().populate(['CustomerID', 'EmployeeID', 'Products.ProductID']);
    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const order = await Order.findOne({ _id: id }).populate(['CustomerID', 'EmployeeID', 'Products.ProductID']);
    res.json({
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create", async function (req, res) {
  try {
      // const cart = new Order({
      //   CustomerID: req.user._id,
      //   order: req.body
      // });

    let order = await Order.create(req.body);

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    let updateOrder = await Order.findById(req.params.id).exec();
    updateOrder.set(req.body);
    let result = await updateOrder.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete({ _id: req.params.id });
    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
});

module.exports = router;
