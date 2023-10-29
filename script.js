var yourScore = 0;
var computerScore = 0;
var playerSelection = '';
var threeButtons = document.querySelectorAll('.gameButton');

function playRoundByButtonSelection(button) {
    button.addEventListener('click', function (event) {
        var targetButton = event.target;
        switch (targetButton.id) {
            case 'Rock':
                playerSelection = "Rock";
                break;
            case 'Paper':
                playerSelection = "Paper";
                break;
            case 'Scissors':
                playerSelection = "Scissors";
                break;
        }
        console.log(game());
    });
}
threeButtons.forEach(playRoundByButtonSelection);

/*
function capitalize(word) {
    var word2 = word.toLowerCase();
    var firstChar = word2.charAt(0);
    var firstCharUpper = firstChar.toUpperCase();
    var firstCharUpperReplace = word2.replace(firstChar, firstCharUpper);
    return firstCharUpperReplace;
}
*/

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        return "Rock";
    } else if (33 < randomNumber && randomNumber <= 66) {
        return "Paper";
    } else if (66 < randomNumber && randomNumber <= 100) {
        return "Scissors";
    }
}

function playRound() {

    var computerSelection = getComputerChoice(); // Moved this line here

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
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("It's a tie, no one gets score");
    }
    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("It's a tie, no one gets score");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("It's a tie, no one gets score");
    }

}


function game() {
    if (computerScore == 5) {
        console.log("You lost the game, Computer wins low diff");
        threeButtons.forEach(function (button) {
            button.setAttribute("disabled", "");
        });
    }
    else if (yourScore == 5) {
        console.log("You win the game, CONGRATULATION high diff 🤙🏻");
        threeButtons.forEach(function (button) {
            button.setAttribute("disabled", "");
        });
    }
    else if (yourScore !== 5 || computerScore !== 5) {
        return playRound();
    }

    console.log("Game Over");
    console.log("Your Score:" + " " + yourScore);
    console.log("Computer Score:" + " " + computerScore);
}