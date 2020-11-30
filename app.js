const express = require('express');
let app= express();

app.get('/abc',(req,res)=>{
    console.log("----req---",req.params);
res.send('sucess for abc route')
})

app.get('/users/:userId/books/:bookId',(req,res)=>{
    console.log("----req---",req.params);
    res.send({x:req.params})
})

let port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server started at port no ${port}`);
})