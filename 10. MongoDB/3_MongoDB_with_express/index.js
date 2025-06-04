const express = require("express");//1
const app = express();//1
const mongoose= require("mongoose");//4
const path = require("path");//5
const Chat = require("./models/chat.js"); //6.1 , 6.0 in chat.js
const methodOverride = require("method-override"); //10.1 for updation 

app.set("views",path.join(__dirname,"views")); //5
app.set("view engine" , "ejs"); //5 
app.use(express.static(path.join(__dirname,"public"))); //8
app.use(express.urlencoded({extended:true})); // for parsing the data intohuman readable format
app.use(methodOverride('_method'));//10.1 use method ovverride

main() //4 
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err)); //4

async function main() { //4 
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index Route 8.0
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find(); // it is a async func so it will return a promise , thats why use await 
    res.render("index.ejs",{chats});
});

//New Route 9.0
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs"); //render the form
});
//Create Route 9.1
app.post("/chats",(req,res)=>
{
    let {from,to,msg} = req.body;
    let newChat = new Chat(
    {
        from : from , 
        to : to ,
        msg : msg,
        created_at : new Date()
    });
    newChat.save()
    .then((res)=>
    {
        console.log("chat was saved");
    })
    .catch((err)=>
    {
        console.log(err);
    });
    res.redirect("/chats");
});

//10.0 Edit Route 
app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
});
// 10.1 Update Route 
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { newMsg } = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { message: newMsg },  
        { runValidators: true, new: true }
    );

    console.log(updatedChat);
    res.redirect("/chats");
});

//11 delete chat route : destroy route
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let deleted_chat = await Chat.findByIdAndDelete(id);
    console.log(deleted_chat);
    res.redirect("/chats");
});

app.get("/",(req,res)=> //3
{
    res.send("Root is Working");
});

app.listen(8080,()=>//2
{
    console.log("Server is listening on port 8080");
});

