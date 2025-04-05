// 01 (always require first )
//01 Import Express and create app instance:
const express = require("express");
const app = express(); //stores in app this will help in making web application

// console.dir(app);

//port deciding
//Set port and start the server:
let port = 3000; //custom port number 

// 2 listening
app.listen(port , () =>
{
    console.log("app is listening on port" , port);
})
// node index.js
//to stop server enter cntrl+c  


//3 . getting requesting and sending
// routing using : app.get()
// Routes path these are different routing
// app.get("/", (req, res) => {
//     res.send("you contacted to root path");
// });

// // /apple path
// app.get("/apple", (req, res) => {
//     res.send("you contacted to APPLE path");
// });

// /banana path
// app.get("/banana", (req, res) => {
//     res.send("you contacted to BANANA path");
// });

// * is a wildcard route. 
// It matches any GET request that doesn’t match any of the earlier defined routes.
// This is typically used as a "catch-all" route — 
// like a custom 404 page for undefined routes.
// app.get("*" ,(req , res)=>{
//     res.send("this path does not exist");
// });



//3. listen request 
// app.use(( req , res ) =>
// {
//     console.log("request received");
//     let code="<ul><li>apple</li><li>baannanan</li></ul>";
//     res.send(code);
// });


//4 . request->listen->post 
// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

// select get in hopscotch


//5 . path parameter
app.get("/", (req, res) => {
    res.send("you contacted to root path");
});
// app.get("/:username/:id", (req, res) => {
//     let { username , id } = req.params;
//     htmlStr=`<h1>this is username query @${username} , ${id}</h1>`;
//     res.send(htmlStr);
// });

// 6. query string
app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q)
    {
        res.send("no query");
    }
    res.send(`search result for ${q}`);
});
// in hopscotch : http://localhost:3000/search?q="apple"
