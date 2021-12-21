const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplier.model');

router.get('/', async (req, res) => {
    try {
        const supplier = await Supplier.find();
        res.status(201).json({
            success : true,
            data : supplier
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const supplier = await Supplier.findOne({_id: id});
    res.json({
        success : true,
        data : supplier
    });
});

router.post('/create',async function(req, res) {
    let supplier = await Supplier.create(req.body);
    res.json(supplier);  
});

router.put('/edit/:id', async (req, res) => {
    try {
        let updateSupplier = await Supplier.findById(req.params.id).exec();
        updateSupplier.set(req.body);
        let result = await updateSupplier.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/delete/:id',async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({
            success : true,
            data : supplier
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

module.exports=router;