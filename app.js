let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genComChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const drawGame = ()=>{
    
    msg.innerText ="Game was a Draw!, Play again";
    msg.style.backgroundColor ="##081b31";
};

const showWinner =(userWin, userChoice,comChoice)=>
    {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            
            msg.innerText =`You win!, your ${userChoice} beats ${comChoice}`;
            msg.style.backgroundColor ="green";
        }
        else{
            comScore++;
            compScorePara.innerText = comScore;
            msg.innerText =`You lose!, ${comChoice} beats your ${userChoice}`;
            msg.style.backgroundColor ="red";
        }
    }

const playGame =(userChoice)=>{
// console.log("user choice= ", userChoice);
//generate computer choice -> modular;
const comChoice = genComChoice();
// console.log("Computer choice= ", comChoice);
if (userChoice === comChoice){
    //draw
    drawGame();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, paper
        userWin = comChoice === "paper" ? false: true;
    }
    else if(userChoice ==="paper"){
        //rock,scissors
        userWin = comChoice === "scissors"? false: true;

    }
    else{
        //rock,paper
        userWin = comChoice === "rock"? false:true;
    }
    showWinner(userWin, userChoice, comChoice);
    
}


};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>
    {
    const userChoice = choice.getAttribute("id");
    
    playGame(userChoice);
    })
});