function processNumber(a, b, callback) {
    let result = a + b;
    callback(result);
}

function display(result) {
    console.log(result);
}

processNumber(10, 20, display);