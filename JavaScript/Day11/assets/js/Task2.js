function createCounter() {
    let a = 0;

    return function () {
        a++;
        console.log(a);
    };
}

const counter = createCounter();

counter();
counter();
counter();