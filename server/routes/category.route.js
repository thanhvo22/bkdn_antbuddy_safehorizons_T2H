const express = require('express');
const router = express.Router();
const Categories = require('../models/category.model');

router.get('/', async (req, res) => {
    const categories = await Categories.find();
    res.json(categories);
});
  
module.exports=router;