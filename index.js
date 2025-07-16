const express=require('express');
const db=require('./utils/db-connection');
const studentRouter=require('./routes/StudentRoutes') ;

const StudentsModel=require('./models/students');

const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.use('/api',studentRouter);

db.sync()
.then(() => {
    app.listen(3000,()=>{
    console.log('server running on port 3000');
})
}).catch((err) => {
    console.log(err);
    
});

