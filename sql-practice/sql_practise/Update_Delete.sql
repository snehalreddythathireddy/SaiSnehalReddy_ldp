UPDATE employee
SET salary = 50000
WHERE employee_id = 4;

INSERT INTO employee (employee_id, employee_name, age, salary)
VALUES (5, 'David Wilson', 29, 60000.00);

DELETE FROM employee
WHERE employee_id = 5;

UPDATE employee
SET salary = 55000
WHERE employee_id = 1;

SELECT *
FROM employee
WHERE employee_id = 1;

UPDATE employee
SET age = 32,
    salary = 56000
WHERE employee_id = 1;

SELECT *
FROM employee
WHERE employee_id = 1;

UPDATE employee
SET employee_name = 'John Smith'
WHERE employee_id = 1;

SELECT *
FROM employee
WHERE employee_id = 1;

DELETE FROM employee
WHERE age > 30
AND salary > 60000;