const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.model');

router.get('/', async (req, res) => {
    try {
        const customer = await Customer.find();
        res.status(201).json({
            success : true,
            data : customer
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const customer = await Customer.findOne({_id: id});
    res.json({
        success : true,
        data : customer
    });
});

router.post('/create',async function(req, res) {
    let customer = await Customer.create(req.body);
    res.json(customer);  
});

router.put('/edit/:id', async (req, res) => {
    try {
        let updateCustomer = await Customer.findById(req.params.id).exec();
        updateCustomer.set(req.body);
        let result = await updateCustomer.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/edit2/:id', async (req, res) => {
    let doc = await Customer.findOneAndUpdate({ _id: req.params.id }, {doc: req.body },{ new: true }).exec();
    res.json(doc);
});

router.delete('/delete/:id',async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({
            success : true,
            data : customer
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});


module.exports=router;