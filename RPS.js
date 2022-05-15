var userInput = "answer";
userInput = userInput.toLowerCase();

function getUserChoice (userInput) {
    if (userInput == "rock") {return userInput;}
    else if( userInput == "paper") {return userInput;}
    else if (userInput == "scissors") {return userInput ;}

    else {return "ERROR";}
}


function getComputerChoice() {var newNumber = Math.floor(Math.random()*3);
switch(getComputerChoice){
    case 0: return 'scissors';
    case 1: return  'paper';
    case 2: return 'rock';
}

}



