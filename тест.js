function doSomething() {
    return new Promise((resolve, reject) => {
        console.log("Готово.");
        // Успех в половине случаев.
        if (Math.random() > .5) {
            resolve("Успех")
        } else {
            reject("Ошибка")
        }
    })
}
function successCallback(result) {
    console.log("Успешно завершено с результатом " + result);
}

function failureCallback(error) {
    console.log("Завершено с ошибкой " + error);
}


const promise = doSomething();
promise.then(successCallback, failureCallback);