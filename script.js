const computerSelection = getComputerChoice();

const playerSelectionAnyWord = prompt("Choose your weapon! :", "");
const playerSelection = capitalize(playerSelectionAnyWord);

//Normally we will use return in this game project but for now to see result we are better off printing the results on the console.
console.log(playRound(playerSelection, computerSelection));

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

function playRound(playerSelection, computerSelection) {
    
}



function game() {

}
