USE student_db;

SELECT
    e.employee_id,
    e.employee_name,
    e.salary,
    d.department_name
FROM Employees e
INNER JOIN Departments d
ON e.department_id = d.department_id;