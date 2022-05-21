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

let computerSelection = computerPlay();
console.log(computerSelection);

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

let userSelection = getUserChoice();
console.log(userSelection);

// compute and display the winner
// ask if you want to play again