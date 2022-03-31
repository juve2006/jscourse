// 2) Write an add(x, y) function that takes two arguments x and y. The function should return a Promise that
// resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise.
// * For correct passing of all tests don't use console.log() method in your code.
// function add(x, y) {
//     // your code
// };
function add(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof (x) === 'number' && typeof (y) === 'number') {
            resolve(x + y);
        } else {
            reject("Error!")
        }
    })
}
// 3)Implement the getAge() function to get user age. To find his age you need to call a getUser() async function
// that return a user object in format {role: "somerole", id: 1}. To get the actual user info you need to call another
// function getUserProfile(id), that uses id returned from the previous function and return user info as an object
//
// {name: "Petro", age: 15}. The getAge() must return the age of the user.
//     const {getUser, getUserProfile} = require('./Helper.js');
//
// async function getAge() {
//     // your code goes here
//     return age;
// }
//
// 4)Implement the take() function that converts a sequence of iterated values into a sequence of length n.
//     Example usage:
//     const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(2, arr)) {
//     console.log(x);
// }
// // Output:
// // a
// // b
// function* take(n, iterable) {
//     // your code here
// }
