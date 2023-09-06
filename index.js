const express=require('express');
const port =8000;
const app=express();


// const data=require('./models/Data.json');
// app.get('/users',(req,res)=>{
//     res.send({data});
// })

const userRouters=require('./router/users')
app.use('/',userRouters)

// app .listen is call backfuntion
app.listen(port,function(err){
    if(err){
        console.log("Error is running on the serveer");
    }
    console.log(`server is running on port: ${port}`)
})