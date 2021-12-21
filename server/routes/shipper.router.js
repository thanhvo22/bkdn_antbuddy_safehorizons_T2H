const express = require('express');
const router = express.Router();
const Shipper = require('../models/shipper.model');

router.get('/', async (req, res) => {
    try {
        const shipper = await Shipper.find();
        res.status(201).json({
            success : true,
            data : shipper
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const shipper = await Shipper.findOne({_id: id});
    res.json({
        success : true,
        data : shipper
    });
});

router.post('/create',async function(req, res) {
    let shipper = await Shipper.create(req.body);
    res.json(shipper);  
});

router.put('/edit/:id', async (req, res) => {
    try {
        let updateShipper = await Shipper.findById(req.params.id).exec();
        updateShipper.set(req.body);
        let result = await updateShipper.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/delete/:id',async (req, res) => {
    try {
        const shipper = await Shipper.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({
            success : true,
            data : shipper
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

module.exports=router;