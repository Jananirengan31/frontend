const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

fruits.push("Banana");

fruits.pop();

fruits.unshift("Grapes");

fruits.shift();
console.log("Length:", fruits.length);

const Result = fruits.concat(vegetables);
console.log(Result);