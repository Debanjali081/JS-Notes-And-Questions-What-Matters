//  Q-4 How would you check if a number is an integer ?

const a = 12

if (a % 1 === 0) {
    console.log(`${a} is an integer`);

}
else {
    console.log(`${a} is a not an integer`);

}

// 2nd trick

console.log(Number.isInteger(a));
