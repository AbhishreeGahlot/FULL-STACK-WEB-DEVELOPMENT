// 1. in bash
// $ npm init -y
// $ npm i express
// $ npm i ejs


//2 . now require express 
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

//3 . using ejs
app.set("view engine" , "ejs");

app.set("views" , path.join(__dirname , "/views"));


app.get("/", (req,res)=>{
    res.render("home")
});





// 4. passing into ejs 
// passing val from backend to ejs 
app.get("/rolldice", (req,res) =>
{
    let diceval=Math.floor(Math.random() * 6 ) +1 
    res.render("rolldice" , {num : diceval});
});

//5 . for the instagram page 
app.get("/ig/:username" ,(req,res) => {
        // const followers = ["aastha" , "abhishree" , "aditi" ,"krishna" , "nitin"] ;
        let {username} = req.params; //should be taken from database
         res.render("instagram.ejs" , {username});
        //  res.render("instagram.ejs" , {username , followers});

        // 9 . data from database eg. json file 
        const instaData = require("./data.json");
        const data = instaData[username];
        if (data) {
            res.render("instagram", { data });  // only ONE render
        } else {
            res.send("User not found");  // OR render a 404 page
        }
    })
// in browser http://localhost:8080/ig/cats



//2 now express is listening
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// to run this : nodemon index.js