
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