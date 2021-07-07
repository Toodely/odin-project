/* When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number */

function playFizzBuzz() {

    let input = parseInt(prompt("Please enter a number to FizzBuzz!"));

    for (let x = 1; x <= input; x++)    {
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("FizzBuzz");
        } else if (x % 3 === 0) {
            console.log("Fizz");
        } else if (x % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(x);
        }
    }

}