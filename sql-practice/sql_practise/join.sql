ALTER TABLE employee
ADD department_id INT;
SELECT *
FROM employee;
UPDATE employee
SET department_id = 7
WHERE employee_id = 1;

UPDATE employee
SET department_id = 4
WHERE employee_id = 2;

UPDATE employee
SET department_id = 6
WHERE employee_id = 4;

SELECT *
FROM employee;
SELECT *
FROM employee
INNER JOIN department
ON employee.department_id = department.department_id;

SELECT employee.employee_name,
       department.department_name
FROM employee
LEFT JOIN department
ON employee.department_id = department.department_id;
SELECT employee.employee_name,
       employee.salary,
       department.department_name,
       department.location
FROM employee
RIGHT JOIN department
ON employee.department_id = department.department_id;
SELECT employee.employee_name,
       department.department_name
FROM employee
LEFT JOIN department
ON employee.department_id = department.department_id

UNION

SELECT employee.employee_name,
       department.department_name
FROM employee
RIGHT JOIN department
ON employee.department_id = department.department_id;
SELECT e.employee_name,
       d.department_name
FROM employee AS e
INNER JOIN department AS d
ON e.department_id = d.department_id;