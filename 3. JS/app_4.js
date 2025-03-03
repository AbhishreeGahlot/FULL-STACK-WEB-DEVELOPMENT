// // let student={
// //     name : "Abhishree",
// //     age : 23,
// //     branch : "cse",
// // }

// let post={
//     username:"@shradhakapra",
//     content:"This is my first post",
//     likes:150,
//     repost:5,
//     tags:["@apnacollege","@delta"]

// }


// Math.floor(Math.random()*100)+1;  //generates btw 1 to 10 , not 0



// guessinggame

let max = prompt("enter a number for the max limit");
let key=Math.floor(Math.random()*max)+1; 
let guess = prompt("enter a numbr to guess");

while(true)
{
    if(guess=="quit")
    {
        console.log("u quit");
        break;
    }

    if(guess==key)
    {
        console.log("you are right ! congrats  ");
        break;
    }
    else if(guess>key)
    {
        guess=prompt("number you guessed is smaller");
    }
    else
     {
        guess=prompt("number you guessed is larger");
    }

    

}