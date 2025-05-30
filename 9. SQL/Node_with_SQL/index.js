const { faker } = require('@faker-js/faker'); //1.0 ✅ fixed import//1 .0
const mysql = require('mysql2');//2.0
const express = require('express'); //8.0
const app = express(); // 8.0
const path = require("path");
const methodOverride = require("method-override"); //11.2 

app.use(methodOverride("_method")); //11.2
app.use(express.urlencoded({extended:true}));//11.2

//9.1
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));

//1.1
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Bhilwara@1'
});

//inserting new data 
let q = "INSERT INTO user (  id , username , email , password ) VALUES ?"; // 5
let user =[ ["124" , "124_newuser" , "abd@gmail.com" , "abd"] , ["125" , "125_newuser" , "bce@gmail.com" , "bce" ]];

//1.3 
let getRandomUser = () => { //6 implementing faker 
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};



//6.1 fill 100 fake users data 
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); // ✅ pushing to array
// }

// connection.query(q, [data], (err, results) => {
//   if (err) throw err;
//   console.log("Inserted", results.affectedRows, "rows");
//   connection.end(); // end connection AFTER insert
// });

// route : 1 home route 
app.get("/" ,(req,res) => //8.1 home route 
{
  let q = `SELECT count(*) FROM USER`;
  try{
    connection.query(q , (err, result ) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs" , {count});
    } );
  }
  catch(err)
  {
    console.log(err);
    res.send("some error in db");
  }
} ); 


// route2 : show route( 10)
app.get("/user" , (req,res) => 
{
  let q = `SELECT * FROM USER`;
  try{
    connection.query(q , (err, users ) => {
      if (err) throw err;
      res.render("show.ejs",{users});
    } );
  }
  catch(err)
  {
    console.log(err);
    res.send("some error in db");
  }
});

//route3 : edit route (11.1)
app.get("/user/:id/edit" , (req,res) => 
{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
 
  try{
    connection.query(q , (err, result ) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs" , {user});
    } );
  }
  catch(err)
  {
    console.log(err);
    res.send("some error in db");
  }
});

//UPDate db ROUTE(11.2)
app.patch("/user/:id",(req ,res) =>
{
  let {id} = req.params;
  let {password: formPass , username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q , (err, result ) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password)
      {
        res.send("WRONG PASSWORD"); 
      }
      else{ // update query  if password correct
        let q2 =  `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2 , (err, result ) => {
        if (err) throw err;
        res.redirect("/user");
    } );
      }
    } );
  }
  catch(err)
  {
    console.log(err);
    res.send("some error in db");
  }
});


app.listen("8080", () => //8.0
{
  console.log("Server is listening to port 8080");
})
// console.log(getRandomUser());
