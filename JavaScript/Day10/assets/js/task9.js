const numbers = [10, 25, 30, 45, 50, 65];

const greaterThan30 = numbers.filter(number => number > 30);

const firstGreaterThan40 = numbers.find(number => number > 40);

const exists = numbers.includes(50);

const doubledNumbers = numbers.map(number => number * 2);

console.log("Greater than 30:", greaterThan30);
console.log("First greater than 40:", firstGreaterThan40);
console.log("50 exists:", exists);
console.log("Doubled values:", doubledNumbers);