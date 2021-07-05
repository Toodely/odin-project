function computerPlay() {
    let computerHand = ["Rock", "Paper", "Scissors"]
    let computerRandomHand = Math.floor(Math.random() * computerHand.length);
    return(computerHand[computerRandomHand]);
}

let computerChoice = computerPlay();