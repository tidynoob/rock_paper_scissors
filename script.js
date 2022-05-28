// create array of rock, paper, or scissors used by computer and by user
let choices = ['rock', 'paper', 'scissors'];

// computer randomly generates rock, paper, or scissors
let computerPlay = () => {
    // get random index between the number of options available (so 3)
    let randomIndex = Math.floor(Math.random() * choices.length);
    // console.log(randomIndex);
    // use the Index to set the computer's choice of rock, paper, or scissors
    return choices[randomIndex];
}

// test computer choice
// let computerSelection = computerPlay();
// console.log(computerSelection);

// get user's choice of rock, paper, or scissors
let getUserChoice = () => {
    // ask the user for rock, paper, scissors
    let userChoice = prompt("rock, paper, or scissors?", "");
    userChoice = userChoice.toLowerCase();
    // console.log(userChoice)

    // validate the prompt selection
    // keep asking if the answer is not valid
    while ((!userChoice || !choices.includes(userChoice))) {
        userChoice = prompt("please enter rock, paper, or scissors", "");
        userChoice = userChoice.toLowerCase();
    }
    return userChoice
}

// test user choice
// let userSelection = getUserChoice();
// console.log(userSelection);

// compute winner of the two selections
let playRound = (userSelection, computerSelection) => {
    if (userSelection == computerSelection) return "It's a tie!";
    else if (userSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerWins++
            return "Paper beats Rock. You lose!";
        }
        else {
            userWins++
            return "Rock beats Scissors. You win!";
        }
    }
    else if (userSelection == 'paper') {
        if (computerSelection == 'scissors') {
            computerWins++
            return "Scissors beats Paper. You lose!";
        }
        else {
            userWins++
            return "Paper beats Rock. You win!";
        }
    }
    else if (userSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerWins++
            return "Rock beats Scissors. You lose!";
        }
        else {
            userWins++
            return "Scissors beats Paper. You win!";
        }
    }
}

// initialize variables for win counts
let userWins = 0;
let computerWins = 0;

// create a game first to 3
let playGame = () => {

    // set amount of wins to 0
    userWins = 0;
    computerWins = 0;

    // keep playing rounds until User or Computer has 3 wins
    while (userWins < 3 && computerWins < 3) {
        alert(playRound(getUserChoice(), computerPlay()))
    }

    // say who won
    if (userWins == 3) return "You won!"
    else return "You lost :("
}

// Play game and keep playing game while user wants to
let playAgain = true;
while (playAgain) {
    alert(playGame())
    playAgain = confirm("Do you want to play again?")
    if (!playAgain) alert("Thanks for playing!")
}