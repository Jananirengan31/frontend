CREATE DATABASE ProductDB;

USE ProductDB;

CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    quantity INT
);

ALTER TABLE Product
ADD brand VARCHAR(50);

ALTER TABLE Product
RENAME COLUMN price TO product_price;

ALTER TABLE Product
MODIFY category VARCHAR(100);

ALTER TABLE Product
DROP COLUMN brand;

select * from Product;