// Q-15 Write a javascript function which accepts an argument and returns the type

// Note : There are six possible values that typeof returns : object,boolean, function,number,string,and undefined.

function typeOfArg(value) {
    return typeof (value)
}

console.log(typeOfArg('Gugulu'));
console.log(typeOfArg([]));
console.log(typeOfArg(true));
console.log(typeOfArg(function () { }));
console.log(typeOfArg(undefined));
console.log(typeOfArg(135));
console.log(typeOfArg(null));
