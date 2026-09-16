SELECT *
FROM employee
WHERE salary > (
    SELECT AVG(salary)
    FROM employee
);

SELECT *
FROM employee
WHERE salary > (
    SELECT MIN(salary)
    FROM employee 
);
SELECT * 
FROM employee

SELECT *
FROM employee
WHERE department_id IN (
    SELECT department_id
    FROM department
    WHERE location IN ('New York', 'San Francisco')
);

SELECT e.employee_name,
       e.salary,
       d.department_name,
       d.location
FROM employee AS e
INNER JOIN department AS d
ON e.department_id = d.department_id
WHERE d.location = 'New York';
SELECT *
FROM employee
WHERE salary > ANY (
    SELECT salary
    FROM employee
    WHERE department_id IN (4, 6)
);
SELECT *
FROM employee
WHERE salary > ALL (
    SELECT salary
    FROM employee
    WHERE department_id IN (4, 6)
);
SELECT *
FROM employee AS e
WHERE EXISTS (
    SELECT 1
    FROM department AS d
    WHERE d.department_id = e.department_id
);
SELECT *
FROM department AS d
WHERE NOT EXISTS (
    SELECT 1
    FROM employee AS e
    WHERE e.department_id = d.department_id
);
SELECT department_name
FROM department
WHERE location = 'Mumbai'

UNION

SELECT department_name
FROM department
WHERE location = 'Delhi';
SELECT department_name
FROM department
WHERE location = 'Mumbai'

UNION ALL

SELECT department_name
FROM department
WHERE location = 'Delhi';