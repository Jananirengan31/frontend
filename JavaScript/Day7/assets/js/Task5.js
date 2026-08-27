let employees = [
    { name: "Arun", salary: 35000 },
    { name: "Kumar", salary: 45000 },
    { name: "Priya", salary: 50000 },
    { name: "Divya", salary: 38000 }
];

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name, employees[i].salary);
    }
}