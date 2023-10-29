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
    var resultsShowcase = document.querySelector('#resultDiv');

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        var aRoundResultContainer = document.createElement('div');
        var yourSelecPara = document.createElement('p');
        var computerSelecPara = document.createElement('p');
        var whoBeatsPara = document.createElement('p');

        aRoundResultContainer.appendChild(yourSelecPara);
        aRoundResultContainer.appendChild(computerSelecPara);
        aRoundResultContainer.appendChild(whoBeatsPara);
        resultsShowcase.appendChild(aRoundResultContainer);

        yourSelecPara.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara.textContent = "You lost! Paper beats Rock"
        computerScore = computerScore + 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        var aRoundResultContainer2 = document.createElement('div');
        var yourSelecPara2 = document.createElement('p');
        var computerSelecPara2 = document.createElement('p');
        var whoBeatsPara2 = document.createElement('p');

        aRoundResultContainer2.appendChild(yourSelecPara2);
        aRoundResultContainer2.appendChild(computerSelecPara2);
        aRoundResultContainer2.appendChild(whoBeatsPara2);
        resultsShowcase.appendChild(aRoundResultContainer2);

        yourSelecPara.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara.textContent = "You win! Rock beats Scissors"
        yourScore = yourScore + 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        var aRoundResultContainer3 = document.createElement('div');
        var yourSelecPara3 = document.createElement('p');
        var computerSelecPara3 = document.createElement('p');
        var whoBeatsPara3 = document.createElement('p');

        aRoundResultContainer3.appendChild(yourSelecPara3);
        aRoundResultContainer3.appendChild(computerSelecPara3);
        aRoundResultContainer3.appendChild(whoBeatsPara3);
        resultsShowcase.appendChild(aRoundResultContainer3);

        yourSelecPara.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara.textContent = "You lost! Scissors beats Paper"
        computerScore = computerScore + 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        var aRoundResultContainer4 = document.createElement('div');
        var yourSelecPara4 = document.createElement('p');
        var computerSelecPara4 = document.createElement('p');
        var whoBeatsPara4 = document.createElement('p');

        aRoundResultContainer4.appendChild(yourSelecPara4);
        aRoundResultContainer4.appendChild(computerSelecPara4);
        aRoundResultContainer4.appendChild(whoBeatsPara4);
        resultsShowcase.appendChild(aRoundResultContainer4);

        yourSelecPara.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara.textContent = "You win! Paper beats Rock"
        yourScore = yourScore + 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        var aRoundResultContainer5 = document.createElement('div');
        var yourSelecPara5 = document.createElement('p');
        var computerSelecPara5 = document.createElement('p');
        var whoBeatsPara5 = document.createElement('p');

        aRoundResultContainer5.appendChild(yourSelecPara5);
        aRoundResultContainer5.appendChild(computerSelecPara5);
        aRoundResultContainer5.appendChild(whoBeatsPara5);
        resultsShowcase.appendChild(aRoundResultContainer5);

        yourSelecPara5.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara5.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara5.textContent = "You lost! Rock beats Scissors"

        computerScore = computerScore + 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        var aRoundResultContainer6 = document.createElement('div');
        var yourSelecPara6 = document.createElement('p');
        var computerSelecPara6 = document.createElement('p');
        var whoBeatsPara6 = document.createElement('p');

        aRoundResultContainer6.appendChild(yourSelecPara6);
        aRoundResultContainer6.appendChild(computerSelecPara6);
        aRoundResultContainer6.appendChild(whoBeatsPara6);
        resultsShowcase.appendChild(aRoundResultContainer6);

        yourSelecPara6.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara6.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara6.textContent = "You win! Scissors beats Paper"
        yourScore = yourScore + 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        var aRoundResultContainer7 = document.createElement('div');
        var yourSelecPara7 = document.createElement('p');
        var computerSelecPara7 = document.createElement('p');
        var whoBeatsPara7 = document.createElement('p');

        aRoundResultContainer6.appendChild(yourSelecPara6);
        aRoundResultContainer6.appendChild(computerSelecPara6);
        aRoundResultContainer6.appendChild(whoBeatsPara6);
        resultsShowcase.appendChild(aRoundResultContainer6);

        yourSelecPara.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara.textContent = "It's a tie, no one gets score"
    }
    else if (playerSelection === "Paper" && computerSelection === "Paper") {
        var aRoundResultContainer7 = document.createElement('div');
        var yourSelecPara7 = document.createElement('p');
        var computerSelecPara7 = document.createElement('p');
        var whoBeatsPara7 = document.createElement('p');

        aRoundResultContainer7.appendChild(yourSelecPara7);
        aRoundResultContainer7.appendChild(computerSelecPara7);
        aRoundResultContainer7.appendChild(whoBeatsPara7);
        resultsShowcase.appendChild(aRoundResultContainer7);

        yourSelecPara.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara.textContent = "It's a tie, no one gets score"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        var aRoundResultContainer8 = document.createElement('div');
        var yourSelecPara8 = document.createElement('p');
        var computerSelecPara8 = document.createElement('p');
        var whoBeatsPara8 = document.createElement('p');

        aRoundResultContainer8.appendChild(yourSelecPara8);
        aRoundResultContainer8.appendChild(computerSelecPara8);
        aRoundResultContainer8.appendChild(whoBeatsPara8);
        resultsShowcase.appendChild(aRoundResultContainer8);

        yourSelecPara8.textContent = "You choose :" + " " + playerSelection;
        computerSelecPara8.textContent = "Computer selection is :" + " " + computerSelection;
        whoBeatsPara8.textContent = "It's a tie, no one gets score"
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