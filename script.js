var yourScore = 0;
var computerScore = 0;

const computerSelection = getComputerChoice();
const playerSelection = capitalize(prompt("Choose your weapon! :", ""));


//Normally we will use return in this game project but for now to see result we are better off printing the results on the console.
console.log(playRound(playerSelection, computerSelection));

//console.log(game());

function capitalize(word) {
    var word
    var word2 = word.toLowerCase();
    var firstChar = word2.charAt(0);
    var firstCharUpper = firstChar.toUpperCase();
    var firstCharUpperReplace = word2.replace(firstChar, firstCharUpper);
    return firstCharUpperReplace;
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        return "Rock";
    }
    else if (33 < randomNumber && randomNumber <= 66) {
        return "Paper";
    }
    else if (66 < randomNumber && randomNumber <= 100) {
        return "Scissors";
    }
}

function playRound() {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You lost! Paper beats Rock");
        computerScore = computerScore + 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You win! Rock beats Scissors");
        yourScore = yourScore + 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You lost! Scissors beats Paper");
        computerScore = computerScore + 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You win! Paper beats Rock");
        yourScore = yourScore + 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You lost! Rock beats Scissors");
        computerScore = computerScore + 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You win! Scissors beats Paper");
        yourScore = yourScore + 1;
    }
}

function game() {

}
