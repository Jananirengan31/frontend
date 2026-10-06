create database product;
use product;

create table  producttable(
 product_id int primary key auto_increment,
 product_name varchar(50),
 product_price int,
 product_date date
 
);

alter table producttable
add categery varchar(30);