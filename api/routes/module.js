const express=require('express');
const router=express.Router();

router.get('/:name', (req,res,next)=>{
    res.send('<html><body><h1>Hi' +req.params.name+ '</h1></body></html>')   
});

router.get('/:name/:age',(req,res,next)=>{
    let desc=" ";
    if(req.params.age<=0)
    desc="INVALID AGE";
    if(req.params.age<=12)
    desc="CHILD";
    if(req.params.age<=18)
    desc="TEEN";
    if(req.params.age<=60)
    desc="ADULT";
    else
    desc="OLDie";

    res.send('<html><body><h1>Hi' +req.params.name+ '</h1> <p>You are a'+desc+'</p></body></html>')
});

module.exports=router;


