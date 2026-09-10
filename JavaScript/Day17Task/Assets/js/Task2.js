const employees = [];

const employeeName = document.getElementById("employeeName");
const department = document.getElementById("department");
const salary = document.getElementById("salary");
const addEmployee = document.getElementById("addEmployee");
const employeeList = document.getElementById("employeeList");

addEmployee.addEventListener("click", function () {

    const employee = {
        name: employeeName.value,
        department: department.value,
        salary: salary.value
    };

    employees.push(employee);

    employeeList.innerHTML = "";

    employees.forEach(function (employee) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        `;

        employeeList.appendChild(row);
    });

    employeeName.value = "";
    department.value = "";
    salary.value = "";
});