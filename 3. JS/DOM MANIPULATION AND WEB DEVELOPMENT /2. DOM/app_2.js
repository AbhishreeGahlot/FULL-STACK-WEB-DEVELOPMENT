// 1. event listeners introductions
// document.querySelector('#btn1');
// console.dir(btn1);
// function click () //triggers this function everytime the button is clicked
// {
//     btn1.style.backgroundColor="pink";
//     console.log("button clicked");
// };
// function enter () //triggers this function everytime the button is clicked
// {
//     btn1.style.backgroundColor="green";
//     console.log("button hovered");
// };
// // btn1.onclick=click ;//triggers this function everytime the button is clicked
// btn1.onmouseenter=enter;    


// btn1.addEventListener("click",click);



// 2. activity : random color generator
// let btnn = document.querySelector("#btn");

// btnn.addEventListener("click" , function()
// {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     h3.style.color = randomColor;


//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// });

// function getRandomColor()
// {
//     let red = Math.floor(Math.random() *255) ;
//     let green = Math.floor(Math.random() *255) ;
//     let blue = Math.floor(Math.random() *255) ;

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }


// 3. use of "this" 
// let h1 = document.querySelector("h1");  //selecting by element ("element")
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// function changeColor()
// {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);


// 4. keyboard events
// let inp = document.querySelector("input");
// inp.addEventListener( "keydown" , function(event)
// {
//     console.log("key was pressed");
// })

// inp.addEventListener( "keyup" , function(event)
// {
//     console.log("key was released");
// })

// let btn = document.querySelector("button");
// btn.addEventListener( "click", function(event)
// {
//     console.log(event);
//     console.log("button clicked");
// });


//5. form events and 6. extracting form data
// let form = document.querySelector("form");

// form.addEventListener("submit" , function()
// {
//     event.preventDefault();
//     console.dir(form);


//     let inp = this.elements[0];
//     let pass = this.elements[1];

//     console.log(inp.value);
//     console.log(pass.value);

// });


//6 . more events : text editor eg
let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input",function()
{
    console.log(inp.value);
    p.innerText=inp.value;
})