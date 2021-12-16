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

router.post('/create',async function(req, res) {
    let category = await Categories.create(req.body);
    res.json(category);  
});

module.exports=router;