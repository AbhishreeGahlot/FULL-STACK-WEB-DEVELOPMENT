const express = require("express") ; // 1. Import the express module
const app = express();              //2.  Create an express application
const port = 8080;                  //3. Define the port to listen on
const path = require("path");       //5. to access the views and public dir  
const { v4: uuidv4 } = require('uuid'); //14. to create unique ids (V4 : version4) 
var methodOverride = require('method-override') //15


app.use(express.urlencoded({extended:true})); //8. =encodes it (understand form data when someone submits an HTML form."

app.use(methodOverride('_method')); //15 OVEERIDE


// 10. creating posts using array ( to render this data we will use ejs template index.ejs)
let posts = [
    {   id : uuidv4(), //14 . 
        username    : "apnacollege" , 
        content     : " I love coding"
    },
    {   id : uuidv4(), //14 .
        username    : "shradha" , 
        content     : " she is my teacher"
    },
    {   id :uuidv4(), //14 .
        username    : "aman" , 
        content     : " I am rahul"
    },

];




app.get("/posts" , (req,res) => { //9. (Posts: main home page to see all posts) api and route path on web page
    res.render("index.ejs" , {posts});
});

app.get("/posts/new" , (req,res) => { //11.to render the form : to add a new post
    res.render("new.ejs")
});

app.post("/posts" , (req,res) => { //12 .  posts the new post using POST request and the new post in array
    let {username , content} = req.body;
    let id  = uuidv4();  //14 
    posts.push({ id, username, content }); // Corrected line
    res.redirect("/posts");
});

app.get("/posts/:id" , (req,res) => { //13. id route : to fetch posts using id 
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
    
});

app.get("/posts/:id/edit" , (req,res) => { //14 to edit
    let {id} = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("edit.ejs", { post });
})

app.patch("/posts/:id", (req,res) => { //15 update post 
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent ;
    console.log(post);
    res.redirect("/posts");
});


app.delete("/posts/:id" , (req,res)=>{ //16 delete  post 
 let {id} = req.params;
 posts = posts.filter((p) => id !== p.id);
 res.redirect("/posts");
});

app.set("view engine" ,"ejs"); // 6. Use EJS to show HTML pages.
app.set("views" ,path.join(__dirname , "views")); // 6. Use EJS as the default template engine to render .ejs files from the views folder


app.use(express.static(path.join(__dirname , "public"))); //7. "My CSS, images, and JS files are in the public folder.



app.listen(port, () => {            //4.// Start the server
  console.log(`Server is running at http://localhost:${port}`);
});