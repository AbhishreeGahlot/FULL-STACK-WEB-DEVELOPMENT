// q 1 
// arrow function to return average of array numbers

const arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

   return sum/arr.length ;
};

let arr = [1, 2, 3];

console.log(arrayAverage(arr));


// q 2
// arrow functio to check even or not 

const isEven = (n) =>
{
    if(n%2==0)
    {
        console.log("even");
    }
    else
    {
        console.log("odd");
    }
}

console.log(isEven(4));