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

function* take (n, iterable){
    for (let i = 0; i < n; i++){
        yield iterable[i];
    }
}
const arr = ['a', 'b', 'c', 'd'];
 for (const x of take(2, arr)) {
    console.log(x);
}