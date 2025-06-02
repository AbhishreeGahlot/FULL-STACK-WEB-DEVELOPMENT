const mongoose = require('mongoose'); //1
 
main() //3. database connection / error
    .then( () => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() { //2 db connect 
mongoose.connect('mongodb://127.0.0.1:27017/test'); // port no : 27017 , because this is an asynchronous process we use promise and await 
}

const userSchema = new mongoose.Schema ( //4. Scehma blueprint 
    {
        name : String , 
        email : String , 
        age   : Number
    }
) ; 

const User = mongoose.model("User" , userSchema); // 5. model class used : to create collections

// const user1 = new User ( { //6. inserting one document  , it is created in memory , but not saved in db 
//                             name : "Adam" ,
//                             email : "adam@gmail.com" , 
//                             age : 48
// });
// user1.save(); // 7. to save this in db ; it returns a promise

// const user2 = new User ( { //8. inserting one document  , it is created in memory , but not saved in db 
//                             name : "Eve" ,
//                             email : "eve@gmail.com" , 
//                             age : 46
// });
// user2.save()
//     .then ( (res) => {
//         console.log(res);
//     } ) 
//     .catch ( ( err ) => 
//     {
//         console.log(err);
//     })
// ; // 9. to save this in db ; it returns a promise


// User.insertMany( [ //10
//     { name : "Charlie" , email : "charlie@gmail.com" , age:45 },
//     { name : "Bob" , email : "bob@gmail.com" , age:45},
//     {name : "Donald" , email : "donald@gmail.com" , age:47}
// ]).then((data) => 
// {
//     console.log(data);
// });

//11 returns all the documents
// User.find({})
// .then((res) =>
// {
//     console.log(res);
// })
// .catch((err)=>
// {
//     console.log(err);
// });

// //12 find using query : return doc age>45
// User.find({age: {$gt : 45}})
// .then((res) =>
// {
//     console.log(res);
// })
// .catch((err)=>
// {
//     console.log(err);
// });

//13 findOne using query : return doc age>45
// User.findOne({age: {$gt : 45}})
// .then((res) =>
// {
//     console.log(res);
// })
// .catch((err)=>
// {
//     console.log(err);
// });

//14. updateOne
// User.updateOne({name:"Adam"},{age:50} )
// .then((res)=>
// {
//     console.log(res);
// })
// .catch((err)=>
// {console.log(err)});

//15. updateMany
// User.updateMany({age:{$gt:45}},{age:50} )
// .then((res)=>
// {
//     console.log(res);
// })
// .catch((err)=>
// {console.log(err)});

//16. findOneAndUpdate
// User.findOneAndUpdate({name:"Adam"},{email:"Adam2022@gmail.com"} )
// .then((res)=>
// {
//     console.log(res);
// })
// .catch((err)=>
// {console.log(err)});

//17 \. findByIdAndUpdate()
// User.findByIdAndUpdate(("683da8d27eaa128537a2bed0"),{email:"Adam10224@]gmail.com"} )
// .then((res)=>
// {
//     console.log(res);
// })
// .catch((err)=>
// {console.log(err)});

//18. deleteOne
// User.deleteOne({name:"Adam"} )
// .then((res)=>
// {
//     console.log(res);
// })
// .catch((err)=>
// {console.log(err)});

//19. deleteMany
User.deleteOne({age:50} )
.then((res)=>
{
    console.log(res);
})
.catch((err)=>
{console.log(err)});