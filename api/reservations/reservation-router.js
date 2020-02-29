const router = require('express').Router();
const Trip=require( './reservations/reserve-model.js');

// return a reserved trip for a matching listing id 
//  if userid = a related landowner or rvowner


router.get('/reserve/:id',(req,res)=>{

    req.body
})
module.exports=router;