//1) Implement the getModifiedArray(array) function, which takes an arbitrary array, and returns the changed array with
// the value of the first element of the array equal to “Start”, the last element of the array equal to “End” and the
// rest of elements should be the same as in an initial array.
function getModifiedArray(array) {
    array[0] = 'Start';
    array[(array.length - 1)] = 'End';
    console.log(array);
}

let arr = [1, 2, 4, 6, 7, 23 ,25, 24]; // arbitrary array for example
getModifiedArray(arr);
getModifiedArray([1,2,3,4,5,6]);

//2) Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.
// Function example: combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]);  // [12, 22, -8, 6, 15]

function combineArray(arr1, arr2) {
    let arr3
    arr3 = arr1.concat(arr2).filter(item => {
        return typeof item === "number";
    }); //filter(number) doesnt work, return numbers and true/false
    return arr3;
}
console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));

//3)Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns the longest login.
// If the logins of the same length are the longest in the array, the login element with the largest index is returned.
// Tip: You can use the reduce() method to solve the task.
// Function examples:
// longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);   //  Prokopenko
// longestLogin(["user1", "user2", "333", "user4", "aa"]);   //  user4
function longestLogin(loginList) {
    let longest;
    longest = loginList.reduce(function (a, b) {
        if (a.length > b.length) return a;
        if (a.length <= b.length) return b;
    });
    return longest;
}
console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]));
console.log(longestLogin(["user1", "user2", "333", "user4", "aaaaa"]));

//4) Implement the processArray(arr, factorial) function, which takes the first parameter of the array arr, and the second
// parameter the function factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change)
// The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.
// Example determines the factorial of the number n
// function factorial(n) { // your code};
// processArray([1, 2, 3, 4, 5], factorial); // [1, 2, 6, 24, 120]

function processArray(arr, factorial){
    let newArr;
    newArr = arr.map(factorial);
    return newArr;
}

function factorial (n){
    let result = 1;                //factorial(0) === 1 https://uk.wikipedia.org/wiki/%D0%A4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D1%96%D0%B0%D0%BB
    for (let i = 0; i < n; i++) {
        result = result * (n - i);
    }
    return result;
}
console.log(processArray([1, 2, 3, 4, 5], factorial));

arrExmpl=[1, 2, 3, 4, 5];
processArray(arrExmpl, factorial);
console.log(arrExmpl); // the source array arr does not change, because map() create new array

//5) Write a checkAdult(age) function whose input parameter is the age of the user age. The function checks whether the set age parameter is set correctly,
// if it is set incorrectly, the corresponding error should be generated and displayed in the console:
// - if the age value has not been set, you need to create the following error: "Please, enter your age",
// - If you set a negative age value, you need to create the following error: "Please, enter positive number",
// - if a non-numeric value of age was specified, you need to create the following error: "Please, enter number",
// - if the integer value of age was not specified, you need to create the following error: "Please, enter Integer number",
// - If the user is under 18, you need to create the following error: "Access denied - you are too young!".
// If there is no error, the message “Access allowed” is displayed in the console.
// In the function, implement the handling of possible exceptions, providing the output to the console of the name and description of the error.
// Regardless of whether the age parameter was set correctly or incorrectly, the message “Age verification complete” should be displayed at the end of the test.
//Function usage example:
// checkAdult(15);    //Error Access denied - you are too young!
//                   //Age verification complete
// checkAdult(25);  //Access allowed
//                  //Age verification complete

function checkAdult(age){
    try {
        if(age > 18) console.log('Access allowed');
        if(age === '') {
            throw new Error("Please, enter your age");
        }
        if(age < 0){
            throw  new Error("Please, enter positive number");
        }
        if(typeof age!=="number"){
            throw  new Error("Please, enter number");
        }
        if (!Number.isInteger(age)){
            throw new Error("Please, enter Integer number");
        }
        if (age < 18){
            throw new Error("Access denied - you are too young!")
        }
    }
    catch (e) {
        console.log(e.name);
        console.log(e.message);
    }
    finally {
        console.log('Age verification complete');
    }
}
checkAdult(23);
checkAdult(15);
checkAdult('');
checkAdult('fff');
checkAdult(-4);
checkAdult(2.5);
