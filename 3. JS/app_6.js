//this keyword

const student = {
    name : "shradha",
    age : 23 ,
    eng : 95 ,
    math : 93 ,
    phy : 97 ,

    getAvg() //method
    {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got ${avg}`);
    }
}


//try catch statement
// console.log("hello");
// console.log("hello");
// let a = 5;
// try{
//     console.log(a);
// }
// catch(err){
//     console.log("caught an error. a is not defined ");
//     console.log(err);
// }

// console.log("hello  again!");
// console.log("hello  again!");

// arrow function
  //function definition
const sum =(a,b) =>
{
    console.log(a+b);
}

const cube=(a) =>
{
    return a*a*a;
}



// implicit return function

const square =(a) =>
(
     a*a
);



// set timeout function

// console.log("hi there");
// setTimeout(  () => 
// {
//     console.log("apna college"); 
// } , 4000 );

// console.log("Welcome to ");


// set interval function

// console.log("hi there (interval) ");
// let id =setInterval(  () => 
// {
//     console.log("shradha di"); 
// } , 1000 );
// console.log("Teacher is  ");


//practice q

// let a =setInterval( () =>{
// console.log("hello")
// } ,  2000); 