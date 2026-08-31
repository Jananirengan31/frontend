const users = [
    {
        name: "Ravi",
        marks: [80, 90, 85],
        address: {
            city: "Chennai"
        }
    },
    {
        name: "Kumar",
        marks: [60, 70, 75]
    }
];

for (const { name, marks, address } of users) {
    const city = address?.city ?? "City Not Available";
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

    console.log("Name:", name);
    console.log("City:", city);
    console.log("Total Marks:", totalMarks);
    console.log("----------------");
}