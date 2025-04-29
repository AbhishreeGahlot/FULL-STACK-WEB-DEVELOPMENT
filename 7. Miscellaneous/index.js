const express = require("express")
const app = express();
const port = 8080;

app.listen(port , ()=>{
    console.log(`Listening to port ${port}`)
});

app.use(express.urlencoded({extended : true})); // to parse post request daata that is understood by express
app.use(express.json()); // to parse json data post request daata that is understood by express


app.get("/register" , (req , res)=>{
    let {user,password} = req.query;
    res.send(`standard get response. welcome ${user}!`)
});

app.post("/register" , (req , res)=>{
    console.log(req.body); // prints request body in trrminal 
    res.send(`standard POST response`)
});