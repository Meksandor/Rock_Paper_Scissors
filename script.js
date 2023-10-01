var Rock;
var Paper;
var Scissors;
var playerSelectionAnyWord = prompt("Choose your weapon! :", "")
var playerSelection



function getComputerChoice(computerSelection) {

}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection, computerSelection) {
        case (playerSelection === "Rock" && computerSelection === "Paper"):
            console.log("You lost! Paper beats Rock");
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
            console.log("You win! Rock beats Scissors");
        case (playerSelection === "Paper" && computerSelection === "Scissors"):
            console.log("You lost! Scissors beats Paper");
        case (playerSelection === "Paper" && computerSelection === "Rock"):
            console.log("You win! Paper beats Rock");
        case (playerSelection === "Scissors" && computerSelection === "Rock"):
            console.log("You lost! Rock beats Scissors");
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            console.log("You win! Scissors beats Paper");
    }
}

function game() {

}
