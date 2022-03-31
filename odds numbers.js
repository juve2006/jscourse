const findNum = (...arg) => {
    let k = 0;
    arg.map(el => {
        if (el%2) {
            k++
        }
    })
    return k
}
findNum(1,3,5,7,9,11,13,15,17,19)
console.log (findNum(1,3,5,7,9,10,11,12,13,15,17,19));

