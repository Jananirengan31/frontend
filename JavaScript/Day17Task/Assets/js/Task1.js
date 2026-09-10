const students = [];

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const addStudent = document.getElementById("addStudent");
const studentList = document.getElementById("studentList");

addStudent.addEventListener("click", function () {

    const student = {
        name: nameInput.value,
        age: ageInput.value,
        city: cityInput.value
    };

    students.push(student);

    studentList.innerHTML = "";

    students.forEach(function (student) {

        const div = document.createElement("div");

        div.classList.add("student");

        div.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>City: ${student.city}</p>
        `;

        studentList.appendChild(div);
    });

    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
});