const numbers = [10, 20, 30];

const newArray = [];

for (let i = 0; i < numbers.length; i++) {
    newArray[newArray.length] = numbers[i];
}

newArray[newArray.length] = 40;

console.log(newArray);