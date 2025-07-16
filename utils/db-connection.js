

const Sequelize=require('sequelize');



const sequelize=new Sequelize('testdb','root','root',{
    host:'localhost',
    dialect:'mysql'
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();



module.exports=sequelize;











// const mysql=require('mysql2');


// const connection= mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'testdb'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('connection created');

//     const connectQuery=`CREATE TABLE IF NOT EXISTS students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(20),
//     email VARCHAR(20),
//     age INT
//     )`
//     connection.execute(connectQuery,(err)=>{
//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log('table created');
//     })

// })

// module.exports=connection;