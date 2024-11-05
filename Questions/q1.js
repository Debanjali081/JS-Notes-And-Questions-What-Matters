// Q-1 Given a string , reverse each word of the sentence.

let str="Debanjali Lenka"

let reversedStr=str.split(" ").map((word)=>{
  return  word.split("").reverse().join('')
}).join(" ")
console.log(reversedStr);

