let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
   const randidx = Math.floor(Math.random()*3);
   return options[randidx];
}
const showwinner = (userwin) => {
    if(userwin){
        msg.innerText = "You Win!!";
        msg.style.backgroundColor ="Green";
        userScore++;
        userScorepara.innerText = userScore;

    } else {
        msg.innerText = "You Lose :(";
        msg.style.backgroundColor ="red";
        compScore++;
        compScorepara.innerText = compScore;
    }
};

const drawgame = () =>{
    msg.innerText = "Draw.Play Again!";
    msg.style.backgroundColor ="black";
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("Comp choice = ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    } else{
        let userwin = true;
        if(userchoice=== "rock"){
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false: true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }    
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
    
});