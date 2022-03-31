// 1) Implement the getPromise(delay, message) function, which takes an integer number delay  (between 0 and 2000)
// and string message and returns a Promise that waits for specified amount of time (using delay argument) and resolves with the message.
// * For correct passing of all tests don't use console.log() method in your code.
// function getPromise(delay, message) {
//     // your code
// }
function getPromise(delay, message) {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(delay) && delay < 2000 && delay > 0) {
            setTimeout(() => resolve(message), delay);
        } else {
            reject("Error!")
        }
    });
}
getPromise(1000, "Hi").then(r => 'showError' );

// 2) Write an add(x, y) function that takes two arguments x and y. The function should return a Promise that
// resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise.
// * For correct passing of all tests don't use console.log() method in your code.
// function add(x, y) {
//     // your code
// };


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
