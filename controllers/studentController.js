const db=require('../utils/db-connection');
 
 const GetEntries=(req,res)=>{
    const getQuery='select* from students';
    db.execute(getQuery,(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        
        res.status(200).send(result);
    })


 }
 const GetStudent=(req,res)=>{
    const {id}=req.params
    const getQuery='select* from students where id=?';
    db.execute(getQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        
        res.status(200).send(result);
    })


 }
 const AddEntries=(req,res)=>{
    const{email,name,age}=req.body;
    const insertQuery='insert into students (email,name,age) values(?,?,?)';
    db.execute(insertQuery,[email,name,age],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;
        }
        console.log("value has been inserted");
        res.status(200).send(`student with name ${name} successfully added`);
    })


 }

 const updateEntry=(req,res)=>{
    const {id}=req.params;
    const {name,email}=req.body;
    const updateQuery='UPDATE students SET name=?,email=? WHERE id=?';
    db.execute(updateQuery,[name,email,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            return;

        }
        if(result.affectedRows===0){
            res.status(404).send('user not found');
            return;

        }
        res.status(200).send('user updated');

    })

 }

 const deleteEntry=(req,res)=>{
    const {id}=req.params;
    const deleteQuery='DELETE from students where id=?';
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.send(err.message);
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send('user not found');
            return;

        }
        res.status(200).send('user deleted');

    })
 }



 module.exports={
    AddEntries,
    updateEntry,
    deleteEntry,
    GetEntries,
    GetStudent

 }