const mongoose = require("mongoose"); //7
const Chat = require("./models/chat.js"); //7

main() //7.1
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err)); //7.1

async function main() { //7.1
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [ //7.2
    {
    from:"neha",
    to:"preeti",
    message:"notes send please",
    created_at : new Date()
    },
    {
    from:"rohit",
    to:"mohit",
    message:"teach me js callbacks",
    created_at : new Date()
    },
    {
    from:"amit",
    to:"sumit",
    message:"all the best",
    created_at : new Date()
    },
    {
    from:"anita",
    to:"ramesh",
    message:"bring me fruits",
    created_at : new Date()
    },
    {
    from:"tony",
    to:"peter",
    message:"love you 3000",
    created_at : new Date()
    },
];

Chat.insertMany(allChats); //7.3
