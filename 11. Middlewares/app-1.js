const express = require("express");
const app = express();

//1st middleware 
// app.use((req,res,next) => {
//     console.log("Hi I am a 1 middlware");
//     next();
// });


// middleware position matters , if we put at the end they wont work
// always put them at the start 
// utility middleware : to log method name , path , hostname , time of the request 
// logger - morgan 
// app.use((req,res,next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method , req.hostname ,req.path , req.time);
//     next();
// });



// api token as query string : middlware 
const checkToken = (req ,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess")
    {
        return next();
    }
    else{
    res.send("ACCESS DENIED");
    }
 
};

// 404 error 
// app.use((req,res)=>{
//     res.status(404).send("Page not found!");
// })

// route for query string api
// http://localhost:8080/api?token=giveaccess
app.get("/api",checkToken,(req,res) =>
{
    res.send("data");
});

// app.get(('/'),(req,res)=>{
//     res.send("Hi i am  2 root");
// });

// app.get(("/random") ,(req,res)=>{
//     res.send("this is a random page");
// });

app.listen("8080",()=>{
    console.log("App is running on port 8080");
});