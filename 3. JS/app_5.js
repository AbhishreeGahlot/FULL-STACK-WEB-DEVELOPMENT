function hello()
{
    console.log("this is a hello function");
}

hello();


//practice q1
function printPoem()
{
    console.log("TWINKLE TWINKLE LITTLE STARS");
    console.log("HOW I WONDER WHAT YOU ARE");
    console.log("UP ABOVE THE WORLD SO HIGH"); 
    console.log("LIKE A DIAMOND IN THIS SKY");
}

printPoem();


//practice q2
function dice()
{
    console.log(Math.floor(Math.random()*6)+1);
}

dice();


// FUNCTIONS WITH ARGUMENT
function printInfo(name,age)
{
    console.log(`${name}'s age is ${age}`);
}

printInfo("Abhishree",20);

//practice qs 3

function average(a,b,c)
{
    console.log(`average of 3 numbers is ${(a+b+c)/3}`);
}

average(1,2,3);


//practice q4
function table(n)
{
    console.log("prints table of any number ");
    for(let i=1;i<=10;i++)
    {
        console.log(n*i);
    }
}

table(2);


// return in functions
function add(a,b)
{
    return a+b;

}

console.log(`sum is ${add(2,3)}`);

// to calculate sum for 3 number using add functions
console.log("calling same function twice to calculate value");
console.log(add(add(2,3),5));


// practice q 8 
//func. to return sum of the numbers from 1 to n
function number(N)
{
    let sum=0;
    for(let i =1 ;i<=N;i++)
    {
        sum+=i;
    }
    console.log("sum is ",sum);
    return sum;
}

number(2);


// practice q 9
// func. to return the concatenation of all strings in an array
let Str=["hi","hello","bye","!"];   //array
function concat(str)
{
   let result=""; // resulting string
   for(let i =0;i<=str.length;i++)
   {
    result+=str[i];
   }
   console.log(`result is ${result}`);
   return result;
}

concat(Str);



// higher order functions ( returns)
function EvenOrOdd(request)
{
    if(request=="odd")
    {
        let odd=function(n)
        {
        console.log(!(n%2==0));
        }
        return odd;

    }

    else if(request=="even")
        {
            let even=function(n)
            {
            console.log(n%2==0);
            }
            return even;
    
        }

    else
    {
        console.log("wrong request");
    }


}


let request="even";