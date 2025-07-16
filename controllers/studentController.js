const db=require('../utils/db-connection');
 const StudentsModel=require('../models/students');
const { where } = require('sequelize');

 const GetEntries = async (req, res) => {
  try {
    const students = await StudentsModel.findAll();
    res.status(200).json(students); 
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Unable to fetch students');
  }
};

 const GetStudent=async (req,res)=>{
   try {
     const {id}=req.params
    const student=await StudentsModel.findByPk(id);
    if(!student){
        return res.status(404).send('user not found');
    }
    return res.status(200).send(student);
    
   } catch (error) {
    console.log('unable fetch',error.message);
    
   }
    


 }
 const AddEntries= async(req,res)=>{
    try {
        const{email,name,age}=req.body;
        const student= await StudentsModel.create({
            email:email,
            name:name,
            age:age
        })
        res.status(200).send(`send user with name ${name} and id is ${student.id}`)
        
    } catch (error) {
        console.log('unable to add',error.message)
        
    }


 }

 const updateEntry= async(req,res)=>{
    try {
        const {id}=req.params;
        const {name}=req.body;
        const student= await StudentsModel.findByPk(id);
        if(!student){
            return res.status(404).send('user not found');
        }
        student.name=name;
        await student.save();
        return res.status(200).send('user updated');
        
    } catch (error) {
        res.status(500).send('user has not update',error);
        
    }
    

 }

 const deleteEntry= async (req,res)=>{
    try {
    const { id } = req.params;

    const student = await StudentsModel.destroy({
        where :{
            id:id
        }
    });

    if (!student) {
      return res.status(404).send('User not found');
    }
    

    res.status(200).send('User deleted successfully');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Unable to delete user');
  }
 }



 module.exports={
    AddEntries,
    updateEntry,
    deleteEntry,
    GetEntries,
    GetStudent

 }