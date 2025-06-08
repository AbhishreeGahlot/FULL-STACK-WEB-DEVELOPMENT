const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

// Middleware to check token in query string
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        return next();
    }
    throw new ExpressError(401, "ACCESS DENIED"); // custom error
};

// Routes
app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi I am root");
});

app.get("/random", (req, res) => {
    res.send("This is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd; // intentional error
});

// activity : admin route
app.get("/admin",(req,res)=>{
    throw new ExpressError(403 , "Access to admin is forbidden")    ;
});

// Error handling middleware
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err; //default error ! can be over write
    res.status(status).send(message);
});

// Start server
app.listen(8080, () => {
    console.log("Listening to port 8080");
});
