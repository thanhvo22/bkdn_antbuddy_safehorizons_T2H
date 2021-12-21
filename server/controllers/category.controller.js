const Categories = require('../models/category.model');

module.exports = {
    index: async (req, res) => {
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
    }
};