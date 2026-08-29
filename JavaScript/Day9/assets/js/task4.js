var globalVar = "I am Global";

function scopeExample() {
    var functionVar = "I am Function Scope";

    console.log(globalVar);
    console.log(functionVar);

    if (true) {
        let blockLet = "I am Block Scope";
        const blockConst = "I am also Block Scope";

        console.log(blockLet);
        console.log(blockConst);
    }

    // let and const cannot be accessed outside the block
}

scopeExample();

console.log(globalVar);