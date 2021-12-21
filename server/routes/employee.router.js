const express = require('express');
const router = express.Router();
const Employees = require('../models/employee.model');

router.get('/', async (req, res) => {
    try {
        const employee = await Employees.find();
        res.status(201).json({
            success : true,
            data : employee
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const employee = await Employees.findOne({_id: id});
    res.json({
        success : true,
        data : employee
    });
});

router.post('/create',async function(req, res) {
    let employee = await Employees.create(req.body);
    res.json(employee);  
});

router.put('/edit/:id', async (req, res) => {
    try {
        let updateEmployees = await Employees.findById(req.params.id).exec();
        updateEmployees.set(req.body);
        let result = await updateEmployees.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

// router.put('/edit2/:id', async (req, res) => {
//     let doc = await Employees.findOneAndUpdate({ _id: req.params.id }, {doc: req.body },{ new: true }).exec();
//     res.json(doc);
// });

router.delete('/delete/:id',async (req, res) => {
    try {
        const employee = await Employees.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({
            success : true,
            data : employee
        });
    } catch (error) {
        res.status(400).json({success: false});
        console.log(error);
    }
    
});


module.exports=router;