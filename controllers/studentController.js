const db=require('../utils/db-connection');
 
 
 const AddEntries=(req,res)=>{
    const{email,name}=req.body;
    const insertQuery='insert into students (email,name) values(?,?)';
    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("value has been inserted");
        res.status(200).send(`student with name ${name} successfully added`);
    })


 }

 const updateEntry=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const updateQuery='UPDATE students SET name=? WHERE id=?';
    db.execute(updateQuery,[name,id],(err,result)=>{
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
    deleteEntry

 }