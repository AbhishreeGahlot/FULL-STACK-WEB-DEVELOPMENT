// 1 . basic format for db
const mongoose = require('mongoose');
const {Schema}= mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// 2 defining schemas
// user schema 
const userSchema = new Schema ( {
    username : String , 
    email : String
}) 

// post schema 
const postSchema = new Schema ( {
    content : String , 
    likes : Number  , 
    user : {
        type : Schema.Types.ObjectId , //users object storing 
        ref :"User"
    }
}) ;


// 3. creating the models 
const User = mongoose.model("User" , userSchema);
const Post = mongoose.model("Post" , postSchema);

// 4. function to add data 

const addData = async() =>  {
    let user1 = new User ( {
        username : "rahulkumar",
        email : "rahul@gmail.com"
    });

    let post1 = new Post({
        content : "hELLOWOrld" ,
        likes : 7 ,
    });

    post1.user = user1;

    await user1.save();
    await post1.save();
};

// 5. add call for main working
addData();
