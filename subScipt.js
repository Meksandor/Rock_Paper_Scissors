function playRound() {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You lost! Paper beats Rock");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You win! Rock beats Scissors");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You lost! Scissors beats Paper");
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You win! Paper beats Rock");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You lost! Rock beats Scissors");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Computer selection is :" + " " + computerSelection);
        console.log("You win! Scissors beats Paper");
    }
}
