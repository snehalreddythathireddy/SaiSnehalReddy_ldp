CREATE INDEX idx_employee_salary
ON employee(salary);

SHOW INDEX FROM employee;

SELECT *
FROM employee
WHERE salary = 60000;

CREATE INDEX idx_employee_department_salary
ON employee(department_id, salary);

SHOW INDEX FROM employee;

SELECT *
FROM employee
WHERE department_id = 7
AND salary > 50000;

EXPLAIN
SELECT *
FROM employee
WHERE salary = 60000;

SHOW INDEX FROM employee;

DROP INDEX idx_employee_salary
ON employee;

DROP INDEX idx_employee_department_salary
ON employee;