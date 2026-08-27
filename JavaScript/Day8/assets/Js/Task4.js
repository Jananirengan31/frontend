let students = [
    { name: "Janani", mark: 85 },
    { name: "Priya", mark: 75 },
    { name: "Arun", mark: 90 },
    { name: "Divya", mark: 65 },
    { name: "Kumar", mark: 82 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 80) {
        console.log(students[i].name);
    }
}