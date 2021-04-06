
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
        return "Rock";
    }else if(randomNum === paper){
        return "Paper";
    }else if(randomNum === scissors){
        return "Scissors";
    }
}

function rpsRound(playerSelection, computerSelection){
        //Ask the user to input their selection and save this into a new variable
    
        //Ask the computer for its random selection and store it into a new variable
        //Compare the two and display the results based on the game's rules
}


