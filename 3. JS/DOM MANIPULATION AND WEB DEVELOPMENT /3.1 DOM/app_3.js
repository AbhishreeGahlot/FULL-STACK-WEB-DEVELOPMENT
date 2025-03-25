let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function()
{
    let item = document.createElement("li");
    item.innerText=inp.value;

    let deletebtn = document.createElement("button");
    deletebtn.innerText="delete";
    deletebtn.classList.add("delete");
    
    item.appendChild(deletebtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value=" ";
});

ul.addEventListener("click",function(event)
{
    if(event.target.nodeName =="BUTTON")
    {
        let list_item= event.target.parentElement; 
        list_item.remove();
        console.log("delete");
    }
   

});

