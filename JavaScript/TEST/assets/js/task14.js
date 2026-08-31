const total = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(total(10, 20, 30, 40));