// const area=require('./cal')
// const areas=require('./cal');
// console.log("Starting First Project")
// console.log(__filename)
// // console.log(area)
// console.log(areas.a)
// console.log(__dirname)
const express = require('express');//import express
const admin=require('./admin');
// const admin1 = require('./admin');
const errorhandler = require('./errorhandler');;

const app = express();//inistailing expressapp
const bodyParser = require('body-parser'); 

// app.use("/user",(req,res,next)=>
// {
//     res.send("<h2>Welcome Genius</h2>")
//     next();
// })
// app.use("/u",(req,res,next)=>
// {
//     res.send("<h2>Welcome Man</h2>");
//     next();

// })
// const getUser =()=>undefined;
// app.get('/user',(req,res,next)=>
// {
//    try{
//     const user=getUser();
//     if(!user)
//     {
//         throw new Error("user not found");
//     }
// }catch(err)
//     {
//         next(err);
//     }
   
// })
// app.get("/",(req,res,next)=>
// {
//     setTimeout(()=>
//     {
//         try{
//        console.log("yellow");
//        throw new Error("error");
//         }catch(e){
//             next(e)
//         }
//     },1000)
// })
// app.use(errorhandler)
// app.get("/re",(req,res)=>
// {
//     res.send("<h1>welcome</h1>")
// })
// app.get("/",(req,res)=>
// {
//     res.send("<h1>welcome alll</h1>")
// })

//user authentication
// const authentication=(req,res,next)=>
// {
//     const random=(min,max)=>Math.floor(Math.random()*(max-min))+min;
//     const isAuthencitated =random(0,2);
//     if(isAuthencitated)
//     {
//         next();

//     }
//     else{
//         res.send("user is not Autenticated")
//     }
// }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({express: true}));
// app.post("/",(req,res)=>{
//     var user =req.body.user;
//     var salary =req.body.salary;
//     if(!user && !salary)
//     {
//         res.status(400).send("Error")
//     }
//     else{
//         res.status(200).send({sucess:"Success"})
//     }
// });
app.get("/search/:name/:age",(req,res)=>{
    if(req.params.age>18)
    {
        res.send("success")
    }
    // res.send(req.params)
})
// app.get("/",authentication,(req,res)=>
// {
//    res.send("repeat")
// })

// //validation using the post method
app.post("/:name/:age",(req,res)=>{
    var user=req.params.name;
    var age=req.params.age;
    age=age+""
    if(!(user.trim()==""||age.trim()==""))
    {
        var flag=0,flag1=0;
        for(let a of user)
        {
            if(a.toUpperCase()===a.toLowerCase())
            {
                flag=1
                break;
            }
        }
        for(let a of age)
        {
            if(a.toUpperCase()!==a.toLowerCase())
            {
                flag1=1;
                break;
            }
        }

        if(flag===0&&flag1==0)
        {
            age=parseFloat(age)
            res.send({user,age})
        }
        else{
            res.send("Failure")
        }
    }
    else
    {
        res.send("Failure")
    }
})


app.post("/:name/:salary",(req,res)=>{
    var user=req.body.name;
    var age=req.body.age;
    age=age+""
    if(!(user.trim()==""||age.trim()==""))
    {
        var flag=0,flag1=0;
        for(let a of user)
        {
            if(a.toUpperCase()===a.toLowerCase())
            {
                flag=1
                break;
            }
        }
        for(let a of age)
        {
            if(a.toUpperCase()!==a.toLowerCase())
            {
                flag1=1;
                break;
            }
        }

        if(flag===0&&flag1==0)
        {
            age=parseFloat(age)
            res.send({user,age})
        }
        else{
            res.send("Failure")
        }
    }
    else
    {
        res.send("Failure")
    }
})

app.listen(5000,()=>
{
    console.log("sever starting")
})
//  app.use("/data",admin.a)
