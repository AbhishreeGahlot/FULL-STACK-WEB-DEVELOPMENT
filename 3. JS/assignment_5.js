// question 1 
function largerElements(num)
{
    let arr=[0,1,2,3,4,5];
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]>num)
        {
            console.log(`number greater than the given num are ${arr[i]}`);
        }

        else
        {
            console.log(`${arr[i]} not greater than the given number ${num}`);
        }
    }
}

largerElements(0);


// question 2
let str="aaaaaabcd";
function uniqueChar(str)
{
    let ans="";
    for(let i =0 ;i<str.length;i++)
    {
        let currChar=str[i];
        if(ans.indexOf(currChar)==-1) // Check if the character is already in ans
        {
            ans+=currChar; // if not , then adds it s
        }

    }
    console.log(ans);
    return ans;
}

uniqueChar(str);



// question 3
// count the number of vowels in a string
let vow="abcdefughijklmnopqrstuvwxyz";
function vowels(string)
{
    let count =0;
    for(let i=0;i<string.length;i++){
    if(vow.charAt(i)=="a"||
        vow.charAt(i)=="e"||
        vow.charAt(i)=="i"||
        vow.charAt(i)=="o"||
        vow.charAt(i)=="u")
    {
        count++;
    }}

    console.log(`total vowels are ${count}`);
}

vowels(vow);