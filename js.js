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
    arr3 = arr1.concat(arr2).filter(item => typeof item === "number"); //filter(number) doesnt work, return numbers and true/false
    return arr3;
}
console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));
