// let arr=[1,2,3,4,5,6,2,3];
// let num=2;

// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==num)
//     {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


// question 2
let n = 287152;
let count=0;
while(n>0){
    n=Math.floor(n/10);
    count++;
}

console.log(count);

//question 3
let sum = 0;
let n1 = 287152;
while (n1 > 0) {
    sum += n1 % 10;  // Add the last digit of n to sum
    n1 = Math.floor(n1 / 10);  // Remove the last digit from n
}

console.log(sum);


//question 4
let fac=1;
let n2=5;

for(let i=1; i<=n2; i++) {
 fac*=i;

}

console.log(fac);


//question 5
let arr = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for(let i=0; i<=arr.length; i++) {
if(largest < arr[i]) {
largest = arr[i];
}
}
console.log(largest);