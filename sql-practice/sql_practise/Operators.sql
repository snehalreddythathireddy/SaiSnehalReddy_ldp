SELECT *
FROM department
WHERE department_id = 4;



SELECT *
FROM product
WHERE price > 500;



SELECT *
FROM product
WHERE price < 500;


SELECT *
FROM employee
WHERE age >= 32;



SELECT *
FROM employee
WHERE age <= 30;


SELECT *
FROM department
WHERE location <> 'New York';



SELECT *
FROM product
WHERE price > 500
AND quantity < 20;


SELECT *
FROM department
WHERE location = 'New York'
OR location = 'Delhi';


SELECT *
FROM department
WHERE NOT location = 'New York';



SELECT *
FROM employee
WHERE salary BETWEEN 40000 AND 60000;


SELECT *
FROM department
WHERE department_name IN ('IT', 'HR', 'Finance');


SELECT *
FROM department
WHERE department_name NOT IN ('IT', 'HR', 'Finance');