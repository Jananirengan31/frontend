CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    city VARCHAR(50)
);

INSERT INTO employees (employee_id, name, age, department, salary, city)
VALUES
(1, 'Arun', 25, 'IT', 45000, 'Chennai'),
(2, 'Vijay', 29, 'HR', 38000, 'Madurai'),
(3, 'Anjali', 27, 'IT', 52000, 'Chennai'),
(4, 'Kavin', 31, 'Finance', 47000, 'Salem'),
(5, 'Priya', 26, 'IT', 40000, 'Madurai'),
(6, 'David', 24, 'HR', 35000, 'Chennai'),
(7, 'Anand', 30, 'Finance', 55000, 'Salem'),
(8, 'Kevin', 28, 'IT', 42000, NULL),
(9, 'Ravi', 32, 'Admin', 39000, 'Chennai'),
(10, 'Vignesh', 27, 'Finance', 48000, 'Madurai');


SELECT * FROM employees;

SELECT name, salary, city FROM employees;

SELECT * FROM employees WHERE city = 'Chennai';

SELECT * FROM employees WHERE salary > 45000;

SELECT * FROM employees WHERE age < 28;

SELECT * FROM employees WHERE salary >= 40000;

SELECT * FROM employees WHERE department <> 'HR';

SELECT * FROM employees WHERE department = 'IT' AND city = 'Chennai';

SELECT * FROM employees WHERE city = 'Chennai' OR city = 'Madurai';

SELECT * FROM employees WHERE salary > 40000 AND age < 30;

SELECT * FROM employees WHERE city IN ('Chennai', 'Madurai', 'Salem');

SELECT * FROM employees WHERE department NOT IN ('IT', 'HR');

SELECT * FROM employees WHERE city IS NULL;

SELECT * FROM employees WHERE city IS NOT NULL;

SELECT * FROM employees WHERE salary BETWEEN 35000 AND 50000;

SELECT * FROM employees WHERE age BETWEEN 25 AND 30 AND city = 'Chennai';

SELECT * FROM employees WHERE name LIKE 'A%';

SELECT * FROM employees WHERE name LIKE '%vi%';

SELECT DISTINCT department FROM employees;

SELECT name AS employee_name, department AS department_name, salary AS monthly_salary FROM employees;