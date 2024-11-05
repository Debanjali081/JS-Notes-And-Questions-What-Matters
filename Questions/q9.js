// Q-9 Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.

function upperCase(str) {
    return str.split(" ").map((word) => {
        return word[0].toUpperCase() + word.slice(1)  //word.substring(1)
    }).join(" ")
}

console.log(upperCase("hi debanjali"));
