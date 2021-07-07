/* Write a program that reads ten numbers and figures out which number is the third highest */
//Will also function with more than ten numbers now, just removes the highest two numbers from the input array and outputs the next highest.

function tenNumbers() {

let input = [34,585,6000,42,89,74,69,32,45,895,85,655,200,487,654,9999,900];

const inputLength = input.length; //Stores the Length of the Array as a constant.


for (let x = inputLength; x > (inputLength - 2); x--) { //Loops the below code twice based on the inputLength. Very much likely a better way of doing this.

    let index = input.indexOf(Math.max(...input));      // Finds the highest number in the array and it's "Index", I.E position in the array and stores it in a variable called index.

    if (index > -1) {                                    // If the index number is higher than -1 (so exists) then it's removed from the array.
        input.splice(index,1);
    }
}

console.log(input.length);
console.log(Math.max(...input));

}

