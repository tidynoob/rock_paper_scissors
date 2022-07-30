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

let displayResults = (roundNum, result) => {

    if (roundNumber < 2) {
        const body = document.querySelector('body');
        const div = document.createElement('div');
        const results = document.createElement('p');
        const round = document.createElement('h3');
        results.classList.add('results');
        round.classList.add('round');
        // results.style.whiteSpace = 'pre-line';
        // results.style.margin = '1rem 0rem'
        round.textContent = roundNum;
        results.textContent = result;
        div.appendChild(round);
        div.appendChild(results);
        body.appendChild(div);
        return
    }
    else {
        const results = document.querySelector('.results');
        const round = document.querySelector('.round');
        results.textContent = result;
        round.textContent = roundNum;
        return
    }

}


// let displayWinner = async () => {
//     if (userWins < 5 && computerWins < 5) return
//     else {
//         const div = document.querySelector('div');
//         const winner = document.createElement('h2');
//         if (userWins == 5) {
//             winner.textContent = "User wins!"
//         } else {
//             winner.textContent = "Computer Wins!"
//         }
//         div.appendChild(winner);
//     }
// }

let displayWinner = () => {
    if (userWins < 5 && computerWins < 5) return
    else {
        const div = document.querySelector('div');
        const winner = document.createElement('h2');
        if (userWins == 5) {
            winner.textContent = "User Wins!"
        } else {
            winner.textContent = "Computer Wins!"
        }
        div.appendChild(winner)
    }
}

let playRound = (e) => {
    let computerSelection = '';
    let result = '';
    let round = '';
    computerSelection = computerPlay();
    // console.log(computerSelection);
    roundNumber++;
    // console.log(e.target.id);
    if (e.target.id == computerSelection) {
        round = `Round ${roundNumber}`;
        result = `It's a tie! \r\nUser Wins: ${userWins} \r\nComputer Wins: ${computerWins}`;
        displayResults(round, result);
        displayWinner();
        playAgain();
        return
    }
    else if (e.target.id == 'rock') {
        if (computerSelection == 'paper') {
            computerWins++;
            round = `Round ${roundNumber}`;
            result = `Paper beats Rock. You lose! \r\nUser Wins: ${userWins} \r\nComputer Wins: ${computerWins}`;
            displayResults(round, result);
            displayWinner();
            setTimeout(playAgain,0);
            return
        }
        else {
            userWins++;
            round = `Round ${roundNumber}`;
            result = `Rock beats Scissors. You win! \r\nUser Wins: ${userWins} \r\nComputer Wins: ${computerWins}`;
            displayResults(round, result);
            displayWinner();
            setTimeout(playAgain,0);
            return
        }
    }
    else if (e.target.id == 'paper') {
        if (computerSelection == 'scissors') {
            computerWins++;
            round = `Round ${roundNumber}`;
            result = `Scissors beats Paper. You lose! \r\nUser Wins: ${userWins} \r\nComputer Wins: ${computerWins}`;
            displayResults(round, result);
            displayWinner();
            setTimeout(playAgain,0);
            return
        }
        else {
            userWins++
            round = `Round ${roundNumber}`;
            result = `Paper beats Rock. You win! \r\nUser Wins: ${userWins} \r\nComputer Wins: ${computerWins}`;
            displayResults(round, result);
            displayWinner();
            setTimeout(playAgain,0);
            return
        }
    }
    else if (e.target.id == 'scissors') {
        if (computerSelection == 'rock') {
            computerWins++;
            round = `Round ${roundNumber}`;
            result = `Rock beats Scissors. You lose! \r\nUser Wins: ${userWins} \r\nComputer Wins: ${computerWins}`;
            displayResults(round, result);
            displayWinner();
            setTimeout(playAgain,0);
            return
        }
        else {
            userWins++;
            round = `Round ${roundNumber}`;
            result = `Scissors beats Paper. You win! \r\nUser Wins: ${userWins} \r\nComputer Wins: ${computerWins}`;
            displayResults(round, result);
            displayWinner();
            setTimeout(playAgain,0);
            return
        }
    }
}

let playAgain = () => {

    if (userWins < 5 && computerWins < 5) return
    else {

        let play = confirm("Do you want to play again?");
        if (!play) {
            alert('Thanks for playing!');
        } else {
            userWins = 0;
            computerWins = 0;
            roundNumber = 0;
            let div = document.querySelector('div');
            div.remove();
            alert('Scores have been reset!');
        }

    }
}

// initialize variables for win counts
let userWins = 0;
let computerWins = 0;
let roundNumber = 0;

let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playRound));
