
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

function userPlay(){        //a function that asks the user for their game play selection
    let userSelection = prompt("Choose your move. Rock? Paper? Scissors?");     //user input
    userSelection = userSelection.toLowerCase();        //convert user input to all lowercase in order to make comparison easier
    return userSelection;
}

function game(numRounds){       //function that loops the single-round as many times as chosen and keeps score and then displays the final score
    let userScore=0;          //keeps track of your score
    let computerScore=0;      //keeps track of computer's score

    function singleRoundRPS(playerSelection, computerSelection){
        //Compare the two and display the results based on the game's rules
        switch(true){
            case (playerSelection=="rock"&&computerSelection=="rock"):
                console.log("It's a draw! Rock vs Rock.");
                break;
            case (playerSelection=="rock"&&computerSelection=="paper"):
                computerScore++;
                console.log("You lose! Paper beats rock."); 
                break;
            case (playerSelection=="rock"&&computerSelection=="scissors"):
                userScore++;
                console.log("You win! Rock beats scissors."); 
                break;
            case (playerSelection=="paper"&&computerSelection=="rock"):
                userScore++;
                console.log("You win! Paper beats rock."); 
                break;
            case (playerSelection=="paper"&&computerSelection=="paper"):
                console.log("It's a draw! Paper vs paper."); 
                break;
            case (playerSelection=="paper"&&computerSelection=="scissors"):
                computerScore++;
                console.log("You lose! Scissors beats paper."); 
                break;
            case (playerSelection=="scissors"&&computerSelection=="rock"):
                computerScore++;
                console.log("You lose! Rock beats scissors."); 
                break;
            case (playerSelection=="scissors"&&computerSelection=="paper"):
                userScore++;
                console.log("You win! Scissors beats paper."); 
                break;
            case (playerSelection=="scissors"&&computerSelection=="scissors"):
                console.log("It's a draw! Scissors vs scissors."); 
        }
    }

    for(let i=0;i<numRounds;i++){
        singleRoundRPS(userPlay(), computerPlay());
    }

    console.log("Your score: "+userScore);
    console.log("Computer's score: "+ computerScore);

}

//game(5);

/*
    1. Give user the option to choose how many points will win the game. First to 3? First to 5? First to 7?
        1. Title that says "Choose your game" - DONE
        2. Three buttons underneath it saying "First to 3", "First to 5", etc - DONE
        3. Once the user clicks a button, the buttons then change to "Rock", "Paper", "Scissors"
            1. onClick of either one of the three buttons - headline above it will change to "First to X WINS!" and - DONE
            2. the three buttons change from "first to X" to "Rock", "Paper", and "Scissors" - DONE
    2. Show user the buttons to click - Rock, Paper, Scissors
        1. Upon clicking a button, message pops up stating whether they won or lost the round
    3. After each round, display the results
        1. Scoreboard will keep track of score during gameplay
    4. Once either the user or the computer reaches the specified number of points, display a message ("You win!", "You lose!") and complete the game
        1. Once the scoreboard reaches the set number of points, display win/lose message
*/
function chooseGame(){
    let gameDescription = document.querySelector(".game-description-message");

    function changeButtonsToRPS(){
        let rockButton = document.querySelector(".rock");
        let paperButton = document.querySelector(".paper");
        let scissorsButton = document.querySelector(".scissors");
        rockButton.innerHTML = "<h1>Rock</h1>";
        paperButton.innerHTML = "<h1>Paper</h1>";
        scissorsButton.innerHTML = "<h1>Scissors</h1>";
    }
    function changeGameDescriptionMessageTo3(){
    //once the user clicks a game button, the message above the button will change according to which button was pressed
    //need reference to the message in order to change it
        gameDescription.textContent = "First to 3 wins!";
        changeButtonsToRPS();
    }
    function changeGameDescriptionMessageTo5(){
    //once the user clicks a game button, the message above the button will change according to which button was pressed
    //need reference to the message in order to change it
        gameDescription.textContent = "First to 5 wins!";
        changeButtonsToRPS();
    }
    function changeGameDescriptionMessageTo7(){
    //once the user clicks a game button, the message above the button will change according to which button was pressed
    //need reference to the message in order to change it
        gameDescription.textContent = "First to 7 wins!";
        changeButtonsToRPS();
    }   
    //add eventListener to button in order to recognize the click and then activate above function
    let gameChoiceBtn3 = document.querySelector(".first-to-3");
    let gameChoiceBtn5 = document.querySelector(".first-to-5");
    let gameChoiceBtn7 = document.querySelector(".first-to-7");
    gameChoiceBtn3.addEventListener("click",changeGameDescriptionMessageTo3);
    gameChoiceBtn5.addEventListener("click",changeGameDescriptionMessageTo5);
    gameChoiceBtn7.addEventListener("click",changeGameDescriptionMessageTo7);
}




chooseGame();




