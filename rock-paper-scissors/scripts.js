function computerPlay() {
    let hand = ["Rock", "Paper", "Scissors"]
    let randomhand = Math.floor(Math.random() * hand.length);
    console.log(hand[randomhand])
}