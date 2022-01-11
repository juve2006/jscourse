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
    let result = 1;
    for (let i = 0; i < n; i++){
        result = result * (n - i);
    }
    return result;
}
console.log(processArray([1, 2, 3, 4, 5], factorial));

arrExmpl=[1, 2, 3, 4, 5];
processArray(arrExmpl, factorial);
console.log(arrExmpl); // the source array arr does not change, because map() create new array