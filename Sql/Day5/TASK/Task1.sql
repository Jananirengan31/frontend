CREATE DATABASE student_db;

USE student_db;

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    trainer_name VARCHAR(100)
);

CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

INSERT INTO Courses (course_id, course_name, trainer_name)
VALUES
(101, 'Java', 'Ravi'),
(102, 'Python', 'Karthik');
INSERT INTO Students (student_id, student_name, course_id)
VALUES
(1, 'Arun', 101),
(2, 'Bala', 101),
(3, 'Kumar', 102),
(4, 'Priya', 101),
(5, 'Divya', 102);

