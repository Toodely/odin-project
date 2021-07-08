function playGame() {

    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;

    for (roundNo = 1; roundNo < 6; roundNo ++) {

        function computerPlay() {
            let computerHand = ["Rock", "Paper", "Scissors"]
            let computerRandomHand = Math.floor(Math.random() * computerHand.length);
            return(computerHand[computerRandomHand]);
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const computerChoice = computerPlay();
            
        let playerChoice = prompt("It's round "+ roundNo + ". " + "Please enter Rock, Paper or Scissors.");

        playerChoice = playerChoice.toLowerCase();
        playerChoice = capitalizeFirstLetter(playerChoice);

    
        if (computerChoice == "Rock" && playerChoice == "Rock" ||
            computerChoice == "Paper" && playerChoice == "Paper" ||
            computerChoice == "Scissors" && playerChoice == "Scissors") {
                alert("You chose " + playerChoice + " and the computer chose " + computerChoice + ". It's a draw!")
                draws ++;
            } 
        else if 
            (computerChoice == "Rock" && playerChoice == "Scissors" ||
            computerChoice == "Paper" && playerChoice == "Rock" ||
            computerChoice == "Scissors" && playerChoice == "Paper") {
                alert("You chose " + playerChoice + " and the computer chose " + computerChoice + ". The computer wins!")
                computerScore ++;
            }
        else if 
            (computerChoice == "Rock" && playerChoice == "Paper" ||
            computerChoice == "Paper" && playerChoice == "Scissors" ||
            computerChoice == "Scissors" && playerChoice == "Rock") {
                alert("You chose " + playerChoice + " and the computer chose " + computerChoice + ". You win!")
                playerScore ++;
            }

        if (roundNo == 5) {
                alert("Player wins: " + playerScore + " Computer wins: " + computerScore + " Draws: " + draws);
            }

    }

}