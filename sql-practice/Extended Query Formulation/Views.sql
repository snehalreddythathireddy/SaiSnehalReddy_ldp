CREATE VIEW employee_details AS
SELECT e.employee_name,
       e.salary,
       d.department_name,
       d.location
FROM employee AS e
INNER JOIN department AS d
ON e.department_id = d.department_id;

SELECT *
FROM employee_details;

SELECT employee_name,
       department_name
FROM employee_details;

SELECT *
FROM employee_details
WHERE salary > 50000;