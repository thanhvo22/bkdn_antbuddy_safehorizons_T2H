const express = require('express');
const router = express.Router();
const OrderDetail = require('../models/orderDetailDetail.model');

router.get('/', async (req, res) => {
    try {
        const orderDetail = await OrderDetail.find();
        res.status(201).json({
            success : true,
            data : orderDetail
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const orderDetail = await OrderDetail.findOne({_id: id});
    res.json({
        success : true,
        data : orderDetail
    });
});

router.post('/create',async function(req, res) {
    let orderDetail = await OrderDetail.create(req.body);
    res.json(orderDetail);  
});

router.put('/edit/:id', async (req, res) => {
    try {
        let updateOrderDetail = await OrderDetail.findById(req.params.id).exec();
        updateOrderDetail.set(req.body);
        let result = await updateOrderDetail.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/delete/:id',async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({
            success : true,
            data : orderDetail
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

module.exports=router;