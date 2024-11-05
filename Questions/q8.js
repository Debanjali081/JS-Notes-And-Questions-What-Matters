// Q-8 Write a javascript function that returns a passed string with letters in alphabetical order.

function alphOrder(str) {
    let orderedStr = str.toLowerCase().split("").sort().join("")
    return orderedStr
}

console.log(alphOrder("Debanjali"));

