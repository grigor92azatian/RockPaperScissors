
function computerPlay(){        //a function that randomly returns either Rock, Paper, or Scissors
//Assign 1,2,3 to Rock,Paper,Scissors
    let rock = 1;
    let paper = 2;
    let scissors = 3;
//Generate a random number between 1 and 3 - SEPERATE FUNCTION
    function random123() {
    return Math.floor(Math.random() * (3) + 1); //The maximum is inclusive and the minimum is inclusive
    }
    let randomNum = random123();
//Translate the random number to its corresponding play and return it
    if(randomNum === rock){
    return "rock";
    }else if(randomNum === paper){
    return "paper";
    }else if(randomNum === scissors){
    return "scissors";
    }
}


/*
Simple UI:
1. display rock paper scissor option buttons and scoreboard
2. player clicks on one of the three buttons
3. depending on which button is clicked, variable "usersPlay" stores either "rock", "paper", or "scissors"
4. run "computerPlay()" function and store returned value in "computersPlay"
5. compare the two values and determine who played the winning move
6. depending on who won that round, increase their score by 1
7. display a message "Game Over: You (or The computer) won!" as soon as either one of the players reaches 5

let usersPlay = getUsersPlay();
let computersPlay = getComputersPlay();
let winnerOfRound = decideWhoWon();
let newScore = increaseScore();
displayScore();
checkScores();  //loop until someone reaches 5 points
displayFinalMessage(); //"You win!" or "You lose!"




Declare variable "usersPlay"
if the users clicks "Rock", assign "rock" to "usersPlay", etc
we need a function that assigns the buttons class to "usersPlay" variable
assign that function to the "click" event
*/


let usersPlay;

let rockButton = document.querySelector(".rock");

rockButton.addEventListener("click", function(e){
    usersPlay = e.target.innerText;
    usersPlay = usersPlay.toLowerCase();
    console.log(usersPlay);
});
let className = rockButton.getAttribute("class");

let paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", function(){
    usersPlay = paperButton.getAttribute("class");
    console.log(typeof usersPlay);
});






