const express= require('express');
const router= express.Router();
const router1= express.Router();

router.get("/a",(req,res)=>
{
    res.send("hi yellow");
})
router1.get("/de",(req,res)=>
{
    res.send("hi yellownow")
})
exports.a=router;
exports.b=router1;
//module.exports = router;