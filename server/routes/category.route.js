const express = require('express');
const router = express.Router();
const Categories = require('../models/category.model');

router.get('/', async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(201).json({
            success : true,
            data : categories
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const category = await Categories.findById(id).exec();
    res.json({
        success : true,
        data : category
    });
});

router.post('/create',async function(req, res) {
    let category = await Categories.create(req.body);
    res.json(category);  
});

router.put('/edit/:id', async (req, res) => {
    try {
        let updateCategory = await Categories.findById(req.params.id).exec();
        updateCategory.set(req.body);
        let result = await updateCategory.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/delete/:id',async (req, res) => {
    try {
        const categories = await Categories.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({
            success : true,
            data : categories
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});


module.exports=router;