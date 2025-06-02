const mongoose = require('mongoose'); //1
 
main() //3. database connection / error
    .then( () => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() { //2 db connect 
mongoose.connect('mongodb://127.0.0.1:27017/amazon'); // port no : 27017 , because this is an asynchronous process we use promise and await 
}

const bookSchema = new mongoose.Schema ( //4. Scehma blueprint 
    {
        title : {
            type:String,
            required : true ,
         }, 
        author :{
            type:  String } , 
        price   : {
            type:  Number },
    }
) ; 

//5.model
const Book = mongoose.model("Book" , bookSchema);


//6. document
let book1 = new Book ( {
    title:"Ncert 12TH Maths",
    author: "RD SHARMA",
    price:1200
} ) ;
book1.save();