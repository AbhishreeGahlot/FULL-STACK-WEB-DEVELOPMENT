// ARRAY METHODS : 
// 1. forEach
let arr=[1,2,3,4,5];

function print(element)
{
    console.log(element);
}

arr.forEach(print);

//2 . Map 
let arr1=[
    {
        name : "astha",
        marks : 78,
    },
    {
        name : "aditi",
        marks : 89,
    },
    {
        name : "abhishree ",
        marks : 97,
    }
    ,
];

//creates a new array gpa and stores gpa of all students
let gpa = arr1.map((element)=>
{
    return element.marks/10;
});


//3. filter
let arr2=[1,2,3,4,5,6,7,8,9,10];

let even=arr2.filter((el)=>
{
    return el % 2 == 0;
});


//4. every
let arr4=[1,2,3,4,5,6,7,8,9,10];

let even1=arr4.every((el)=>
{
    return el % 2 == 0;  //returns false
});


//5. some
let arr5=[1,2,3,4,5,6,7,8,9,10];

let even2=arr4.some((el)=>
{
    return el % 2 == 0;  //returns true
});

//6. reduce
let arr6=[1,2,3,4];

let add=arr6.reduce((res,el)=>(res+el)); //output 10 , 
console.log(add);


//7. maximum element code using reduce
let arr7=[1,2,3,4,45,2,4,32];

let maximum=arr7.reduce((max,el)=>{
    if(max<el)
    {
        return el;
    }
    else
    {
        return max;
    }
}); 
console.log(`maximum element using reduce is ${maximum}`);


// 8. practice q's 
// check multiples of 10
let arr8=[10,1,3,30,40,20];

let multiple=arr8.every((el)=>
    {
        return el % 10 == 0;  
    });

console.log(multiple); // returns false

// 9. practice q's 
// check min number in array
console.log("-----------------------------");
let arr9=[1,2,3,4,45,2,4,32];

let minimum=arr9.reduce((min,el)=>{
    if(min<el)
    {
        return min;
    }
    else
    {
        return el;
    }
}); 
console.log(`minimum element using reduce is ${minimum}`);


//10 . default parameters
 
function sum(a,b=3)
{
    console.log("sum is", a+b);
}

sum(2); //a is 2 , and b is by default 3 , it can be overwrited too

// function sum(a=3,b) //wrong declaration
// {
//     console.log("sum is", a+b);
// }
// sum(1); // a->1 , b->undefined still



//11. spread
console.log(..."abhishreegahlot");

// 12 . spread for array literal
let array=[1,2,3,4,5];
let newArray=[...array];
console.log(`new array (array literal spread is ) ${newArray}`);

//13. spread for object literal
let data={
    email : "abhishree@gmail.com",
    password : "abcd"
};

let dataCopy = { ...data , id:123};
console.log("object literal spread",dataCopy);

//14 . rest



//15. destructuring array
let names=["tony","bruce","steve","peter"];
let[winner,runnerup]=names;
console.log(winner,runnerup);


//16.  destructuring object
const student=
{
    name:"karan",
    age:10,
    class:5,
    subjects:["hindi","english","math"],
    username:"karan123",
    password:1234
};

// let username=student.username;
// let password = student.password;
// to destructure like this


//we use

let {username : user ,password}=student;
 //key name: variable name