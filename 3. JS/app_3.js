// //for loop
// for ( let  i= 1 ; i<=5;i++)
// {
//     console.log(i);
// }

// // odd numbers 
// console.log("ODD NUMBER TILL 1 TO 15");
// for(let i =1 ;i<=15;i=i+2)
// {
//     console.log(i);
// }


// // odd numbers 
// console.log("even NUMBER TILL 1 TO 15");
// for(let i =2 ;i<=15;i=i+2)
// {
//     console.log(i);
// }


// // multiplication table 
// console.log("table of 2");
// for(let i =5 ;i<=50;i=i+5)
// {
//     console.log(i);
// }


// console.log("table for n");

// ask user for what table he/she wants
// let n = prompt("ENTER THE NUMBER FOR TABLE"); // prompt takes string , so convert that string to number
// n=parseInt(n); //converts string to number
// for(let i=n;i<=n*10;i=i+n)
// {
//     console.log(i);
// }


// nested loop
// console.log("nested loop");
// for(let i =1;i<=3;i++)
// {
//     console.log("outer loop - " , i);
//     for(let j =1;j<=3;j++)
//     {
//         console.log( j);
  
//     }
  
// }


// console.log("while loop");
// let i =1;
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }



// favourite movie activity
// const favMovie = "avatar";

// let guess = prompt("guess my favourite movie").toLowerCase();

// while (guess !== favMovie ) {
//     if(guess=="quit")
//     {
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess! please try again");
// }

// if (guess === favMovie) {
//     console.log("congrats");
// }


// nested loops in nested arrays
// let heroes=
//         [
//             [ "ironman" , "captain america" , "thor"] ,
//             [ "superman" , " wonder woman" , "flash "]
//         ]

// for(let i =0 ; i<heroes.length ; i++) //outer loop for accessing 0 th and 1 th index array
// {
//     console.log(i, heroes[i],heroes[i].length);
//     for(let j =0;i<heroes[i].length;j++)
//     {
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }


//for of loops

for(char of "apnacollegestudent")
{
    console.log(char);
}


console.log("nested for of loop");
let heroes=
         [
             [ "ironman" , "captain america" , "thor"] ,
             [ "superman" , " wonder woman" , "flash "]
         ]

for(list of heroes)
{
    for(hero of list)
    {
        console.log(hero);
    }
}