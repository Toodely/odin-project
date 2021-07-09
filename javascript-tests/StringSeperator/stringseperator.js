/* Write a program that takes a string, splits it and revserses it */


function stringSeperator() {

    let string = prompt("Please enter your string to be seperated and reversed:");

    let splitStringArray = string.split("");

    let reversedSplitStringArray = splitStringArray.reverse();

    let reversedString = reversedSplitStringArray.join("");

    alert(reversedString);
}

