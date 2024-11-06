// loop an array of objects and remove all objects which don't have gender's value `male`.

let arr = [
    { name: "Debanjali Lenka", gender: "Female" },
    { name: "Shradhanjali Lenka", gender: "Female" },
    { name: "Gitanjali Lenka", gender: "Female" },
    { name: "Jyotiranjan Sahoo", gender: "Male" },
    { name: "Dibyaranjan Lenka", gender: "Male" }
]

let count = 0

arr.forEach((person) => {
    if (person.gender.toLowerCase() !== 'male') count++;
})

console.log(count);


for (let i = 0; i <= count; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].gender.toLowerCase() !== 'male') {
            arr.splice(j, 1)
        }
    }
}

console.log(arr);

