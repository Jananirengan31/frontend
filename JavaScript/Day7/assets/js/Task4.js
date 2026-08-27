let students = [
    { name: "Janani", mark: 85 },
    { name: "Priya", mark: 90 },
    { name: "Divya", mark: 78 }
];

let searchName = "Priya";

for (let i = 0; i < students.length; i++) {
    if (students[i].name === searchName) {
        console.log("Name:", students[i].name);
        console.log("Mark:", students[i].mark);
    }
}