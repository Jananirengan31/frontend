create database GovernmentDB;
use GovernmentDB;

CREATE TABLE GovernmentOffice (
    office_id INT PRIMARY KEY,
    office_name VARCHAR(100),
    department VARCHAR(100),
    officer_name VARCHAR(50),
    location VARCHAR(100)
);

SELECT * FROM GovernmentOffice;

alter table GovernmentOffice
add phone VARCHAR(15);


alter table GovernmentOffice
rename column location TO office_location;

alter table GovernmentOffice
modify officer_name VARCHAR(100);

alter table GovernmentOffice
drop column phone;





