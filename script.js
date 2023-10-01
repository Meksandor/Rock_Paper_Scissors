var Rock;
var Paper;
var Scissors;
var playerSelectionAnyWord = prompt("Choose your weapon! :", "")
var playerSelection = capitalize(playerSelectionAnyWord);

function capitalize(word) {
    var word
    var word2 = word.toLowerCase();
    var firstChar = word2.charAt(0);
    var firstCharUpper = firstChar.toUpperCase();
    var firstCharUpperReplace = word2.replace(firstChar, firstCharUpper);
    return firstCharUpperReplace;
}



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
