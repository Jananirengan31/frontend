CREATE DATABASE myDB;

USE myDB;


CREATE TABLE Employee (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    department VARCHAR(50),
    role VARCHAR(50),
    salary DECIMAL(10,2)
);
 
ALTER TABLE Employee
ADD email VARCHAR(100);

ALTER TABLE Employee
RENAME COLUMN role TO job_role; 

ALTER TABLE Employee
MODIFY employee_name VARCHAR(100);

ALTER TABLE Employee
DROP COLUMN email;

SELECT * FROM Employee;

drop database employee;



 