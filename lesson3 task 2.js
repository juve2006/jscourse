//     2) The function takes any number of strings and returns the sum of their lengths.
//     Example:

const sumOfLen = (...strings) => {
    let sum = 0;
    for (let i = 0; i < strings.length; i++) {
        sum += strings[i].length;
    }
        return sum;
}

console.log(sumOfLen('hello', 'hi')); //7
console.log(sumOfLen('hi')); //2
console.log(sumOfLen()); //0
console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16