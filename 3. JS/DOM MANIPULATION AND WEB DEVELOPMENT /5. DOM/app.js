// function getNum()
// {
//     return new Promise(( resolve , reject) =>
//     {
//         setTimeout( () =>
//         {
//             let num= Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         } , 1000);

//     });
// }
// async function demo()
// {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();

// }



// accessing data from json 

// let jsonRes = 
//     '{"fact":"An adult lion roar can be heard up to five miles (eight kilometers) away.","length":75}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);


// let student=
// {
//     name : "abhishree" , 
//     marks : 95
// };


//run in console
// JSON.stringify(student);



//OUR FIRST API
let url = "https://catfact.ninja/fact";
// fetch(url)

//     .then((res)=>{
//         console.log(res);
//         res.json().then((data)=>{ console.log(data);
//     });
// })
//     .catch((err)=>
//     {
//        ; console.log("errorrrr",err);
//     })

// inspect->network->files ayegi index , style etc -> facts -> responses



// USING FETCH with async and await

// async function getFacts()
// {
//     let res = await fetch(url);
//     let data = await res.json(); //convert data stream format to json for readability;
//     console.log(data);
// }
// in console:
// getFacts();




//USING AXIOS
//THE ISSUE WITH FETCH WAS , IT WAS GIVING OUTPUT NOT IN JSON FORMAT , WE HAD TO PARSE IT
// AXIOS GIVES IN JSON FORMAT
 async function getFacts()
{
    try{
        let res = await axios.get(url);
        return res.data.fact;
        }
    
    catch(e)
    {
        console.log("ERROR - " , e);
        return "No fact found."
    }
}
// in console:
// getFacts();


//html connectivity

let btn= document.querySelector("button");

btn.addEventListener("click" , async()=> {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText=fact;

});