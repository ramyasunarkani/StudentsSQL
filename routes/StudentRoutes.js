const express=require('express');
const studentController=require('../controllers/studentController');
const router=express.Router();

router.post('/students',studentController.AddEntries);
router.get('/students',studentController.GetEntries);
router.get('/student/:id',studentController.GetStudent);
router.put('/student/:id',studentController.updateEntry);
router.delete('/student/:id',studentController.deleteEntry);




module.exports=router;
