// q 1
// . Square and sum the array elements using the arrow function and then find the  average of the array.

let nums = [ 1, 2 ,3,4 ,5 ];

const square = nums.map((num)=>num*num); //square is a array variable which stores the square of all elements of array nums and it uses map to do this
console.log(square);

const sum = square.reduce((acc, cur)=> acc+cur , 0 ); // 0 is intialises for cur(current sum)

const average = sum / nums.length;
console.log("average is ",average);


// q 2 Create a new array using the map function whose each element is equal to the
//  original element plus 5.

let nums2=[1,2,3,4,5];

const new_nums = nums2.map((nums2)=>nums2+5);
console.log("new array+5 is ",new_nums);


//q 3 Create a new array whose elements are in uppercase of words present in the
//  original array.

let words=["abc" , "def" , "hij"];

const new_words= words.map((words)=>words.toUpperCase());
console.log("uppercase array is" , new_words);

// q 4 Write a function called doubleAndReturnArgs which accepts an array and a
//  variable number of arguments. The function should return a new array with the original
//  array values and all of the additional arguments doubled

let arr = ["ab", "cd", "ef"];

function doubleAndReturnArgs(arr, ...args) {
    let new_arr = [...arr];  // Copy original array
    let new_args = args.map((v) => v * 2);  // Double the additional arguments

    return [...new_arr, ...new_args];  // Return combined array
}

console.log(doubleAndReturnArgs(arr, 1, 2, 3)); 
// Output: [ 'ab', 'cd', 'ef', 2, 4, 6 ]


//q 5  Write a function called mergeObjects that accepts two objects and returns a new
//  object which contains all the keys and values of the first object and second object

function mergeObjects(obj1,obj2)
{
    new_obj={...obj1 , ...obj2};
    console.log(new_obj);
}

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });