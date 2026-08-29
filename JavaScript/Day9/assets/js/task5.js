// var
console.log(a);
var a = 10;

// let
try {
    console.log(b);
} catch (error) {
    console.log("let:", error.message);
}

let b = 20;

// const
try {
    console.log(c);
} catch (error) {
    console.log("const:", error.message);
}

const c = 30;

// Function declaration
greet();

function greet() {
    console.log("Hello from function declaration");
}