
for (roundNo = 1; roundNo < 6; roundNo ++) {

    function computerPlay() {
        let computerHand = ["Rock", "Paper", "Scissors"]
        let computerRandomHand = Math.floor(Math.random() * computerHand.length);
        return(computerHand[computerRandomHand]);
    }

    const computerChoice = computerPlay();
        
    const playerChoice = prompt("It's round "+ roundNo + ". " + "Please enter Rock, Paper or Scissors.");

    if (computerChoice == "Rock" && playerChoice == "Rock" ||
        computerChoice == "Paper" && playerChoice == "Paper" ||
        computerChoice == "Scissors" && playerChoice == "Scissors") {
            alert("You chose " + playerChoice + " and the computer chose " + computerChoice + ". It's a draw!")
        } 
    else if 
        (computerChoice == "Rock" && playerChoice == "Scissors" ||
        computerChoice == "Paper" && playerChoice == "Rock" ||
        computerChoice == "Scissors" && playerChoice == "Paper") {
            alert("You chose " + playerChoice + " and the computer chose " + computerChoice + ". The computer wins!")
        }
    else if 
        (computerChoice == "Rock" && playerChoice == "Paper" ||
        computerChoice == "Paper" && playerChoice == "Scissors" ||
        computerChoice == "Scissors" && playerChoice == "Rock") {
            alert("You chose " + playerChoice + " and the computer chose " + computerChoice + ". You win!")
        }

}