CREATE TABLE employee( 
    employee_id INT PRIMARY KEY ,
    employee_name VARCHAR(50) NOT NULL,
    age INT,
    salary DECIMAL(10, 2)
);

INSERT INTO employee (employee_id, employee_name, age, salary)
VALUES (1, 'John Doe', 30, 50000.00),
       (2, 'Jane Smith', 28, 60000.00),
       (3, 'Michael Johnson', 35, 70000.00),    
       (4, 'Emily Davis', 32, 55000.00);

CREATE TABLE product(
    product_id INT,
    product_name VARCHAR(50),
    price INT,
    quantity INT
);
INSERT INTO product (product_id, product_name, price, quantity)
VALUES (1, 'Laptop', 1000, 10),
       (2, 'Smartphone', 500, 20),
       (3, 'Tablet', 300, 15),
       (4, 'Headphones', 100, 30);

CREATE TABLE department(
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL,
    location VARCHAR(100)
);

INSERT INTO department (department_id, department_name, location)
VALUES (4, 'CIVIL', 'Mumbai');

INSERT INTO department (department_id, department_name, location)
VALUES(5, 'MECHANICAL', 'Delhi'),
       (6, 'ELECTRICAL', 'New York'),
       (7, 'IT', 'San Francisco');

       