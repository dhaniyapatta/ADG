const express= require("express");
const app=express();

const user= require('./api/routes/module');


app.use('/user',user);


module.exports=app;
