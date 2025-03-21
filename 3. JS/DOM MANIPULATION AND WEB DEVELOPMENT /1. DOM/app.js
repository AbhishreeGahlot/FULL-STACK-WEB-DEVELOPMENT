// document.getElementById("print").onclick = function() {
//     window.print();
// };


// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector(".images"));

// console.dir(document.querySelector("#print"));

// console.dir(document.querySelector("div a"));

// // to select all 
// console.dir(document.querySelectorAll("div a"));


// // USING PROPERTIES AND METHODS

// // let para = document.querySelector("p");
// // console.log(para.innerText);
// // console.log(para.textContent);
// // console.log(para.innerHTML);


// //changing the text 

// // para.innerText="abcree";
// // console.log(para.innerText);


// //get set method

// // let img = document.querySelector("img");
// // img.getAttribute('id');
// // img.setAttribute("id","spidermanImg");


// // changing style 
// let heading = document.querySelector("h1");
// heading.style.color="Purple";
// heading.style.backgroundColor="yellow";


// let links = document.querySelectorAll(".box a");
// // they are in list so thats why use loop
// for ( links of links )
//     {
//     links.style.color="yellow";
//     }
// // for ( let i = 0 ; i < links.length ;i++)
// // {
// // links[i].style.color="yellow";
// // }



// // navigation on page
// let h4 = document.querySelector('h4');
// h4.parentElement; //o/p : div class = box
// h4.chilren; //no child
// h4.childElementCount; //0
// h4.previousElementSibling; // null 
// h4.nextElementSibling; // <ul>​…​</ul>​
// h4.nextElementSibling.style.color="Green"; //'Green'


// // adding element on page
// let new_para = document.createElement('p');
// new_para.innerText = "I am a new paragraph" ;
// let body = document.querySelector('body');
// body.appendChild(new_para);
// new_para.append("   hrlllo ");
// new_para.prepend("  append at the start using prepend ");


// //  remove elements
// new_para.remove();



// practice question
let p = document.createElement('p');
p.innerText="Hi i'm red";
p.style.color="red";
document.querySelector('body').append(p);
p.classList.add("red");


let h3 = document.createElement('h3');
h3.innerText="Hi i'm blue h3";
h3.style.color="blue";
document.querySelector('body').append(h3);

let div = document.createElement('div');
div.style.border="solid black";
div.style.backgroundColor="pink";
document.querySelector('body').append(div);
let h1 = document.createElement('h1');
h1.innerText="i am in a div";
document.querySelector('div').append(h1);
let para = document.createElement('para');
para.innerText="me too";
document.querySelector('div').append(para);

