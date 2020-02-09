const express=require('express');

const app=express();
var a=['Sarthak','Giridhar','Naman','Diya',"Ankit"];
app.get("/name", (req,res)=>{
  res.send("Ankit Jha");
});
app.get("/team", (req,res)=>{
  res.send(a);
});

app.listen(3000,function(){
  console.log("server added on port 3000");
});
