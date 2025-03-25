// initialisation 
let gameSeq=[];
let userSeq=[];
let started = false;
let level=0 ; 
let btns=["yellow", "red" ,"purple" ,"green"];
let highest_score=0;



// Retrieve highest score from localStorage (optional)
if (localStorage.getItem("highest_score")) {
    highest_score = parseInt(localStorage.getItem("highest_score"));
}


//to start the game press any key
document.addEventListener("keypress" , function()
{
    if (started ==false)
    {
    console.log("game is started");
    started = true;
    }

    levelUp() ; //after game is started now levels
});

//btn flash function
function btnFlash(btn)
{
    btn.classList.add("flash"); //adding the flash class 
    //flash for only 1seconds
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250); //1 s = 1000ms
}

//user flash function
function userFlash(btn)
{
    btn.classList.add("userFlash"); //adding the flash class 
    //flash for only 1seconds
    setTimeout(function()
    {
        btn.classList.remove("userFlash");
    },250); //1 s = 1000ms
}

let h2=document.querySelector("h2");

// now  flash buttons and level up
function levelUp()
{
    userSeq=[];//at each level user have to enter the color pattern again
  level++;
  h2.innerText = `Level ${level}`;
  
  //to generate random btn flash
  let randIdx = Math.floor(Math.random() * 3); //index 0 , 1 , 2 ,3
  let randColor = btns[randIdx]; //Assuming btns is an array (e.g., ["red", "blue", "green"]), randIdx selects a random element from it.
  let randBtn = document.querySelector(`.${randColor}`);  // Selects the button with that class
    //   console.log(randIdx);
    //   console.log(randColor);
    //   console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn); // Calls btnFlash function on the selected button



}


// now to check in game that the color given by the user is equal to the game one
function checkAns(idx)
{
    // console.log("curr level : " , level);
    if(userSeq[idx]===gameSeq[idx]) //middle situation
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp , 1000);//increments the level after 1 s delay
             
        }   
    }
    else{
         // Update highest score if the current score is greater
        if (level > highest_score) {
            highest_score = level;
            localStorage.setItem("highest_score", highest_score); // Save highest score
        }

        h2.innerText = `GAME OVER! Your score was ${level}. Highest Score: ${highest_score}. Press any key to restart`;
        //red bg
        document.querySelector("body").style.backgroundColor="red";
        //for a second
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white"; //again reset to white
        },250);
        //to reset the game
        reset();
    }
}


//button event listeners
function btnPress()
{   
    let btn=this;
    console.log(this);
    userFlash(this);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
    
for(btn of allBtns)
{
    btn.addEventListener("click" , btnPress);
}

//reset function
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
