
function getComputersPlay(){        //a function that randomly returns either Rock, Paper, or Scissors
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

function getWinnerOfRound(usersMove,computersMove){ //returns "user", "computer", or "draw"
    if(usersMove === "rock"){
        if(computersMove==="rock"){
            return "draw";
        }else if(computersMove==="paper"){
            return "computer";
        }else if(computersMove==="scissors"){
            return "user";
        }
    }else if(usersMove==="paper"){
        if(computersMove==="rock"){
            return "user";
        }else if(computersMove==="paper"){
            return "draw";
        }else if(computersMove==="scissors"){
            return "computer";
        }
    }else if(usersMove==="scissors"){
        if(computersMove==="rock"){
            return "computer";
        }else if(computersMove==="paper"){
            return "user";
        }else if(computersMove==="scissors"){
            return "draw";
        }
    }
}

function incrementScore(winner){
    if(winner === "user"){
        usersScore++;
    }else if(winner==="computer"){
        computersScore++;
    }
}

function getRoundResults(winner){
    if(winner==="user"){
        return "Yay! You won this round!";
    }else if(winner==="computer"){
        return "Oh no! The computer won this round!"
    }else if(winner==="draw"){
        return "It's a draw! Keep going!";
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





let rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", onClickSingleRound);
let paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", onClickSingleRound);
let scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", onClickSingleRound);
let usersPlay;
let computersPlay;
let winnerOfRound;
let usersScore=0;
let computersScore=0;
let resultsOfRound;

function onClickSingleRound(){
//1. assign the button's class name to usersPlay - this will be the user's move for that round
    usersPlay = this.getAttribute("class");
    console.log("User chose: "+usersPlay);
//2. call upon getComputersPlay and assign the return value to computersPlay - this is the computer's move
    computersPlay = getComputersPlay();
    console.log("Computer chose: "+computersPlay);
//3. call upon getWinnerOfRound and assign return to winnerOfRound - winner of round determined
    winnerOfRound = getWinnerOfRound(usersPlay,computersPlay);
    console.log("Winner: "+winnerOfRound);
//4. call upon incrementScore and increase the score of whoever won the round
    incrementScore(winnerOfRound);
    console.log("User's score: "+usersScore);
    console.log("Computer's score: "+computersScore);
//5. display result of round
    resultsOfRound=getRoundResults(winnerOfRound);
    console.log(resultsOfRound);
    console.log("\n");
}

//use do...while to run loop until either score reaches 5....as soon as it reaches 5, display winner of game




