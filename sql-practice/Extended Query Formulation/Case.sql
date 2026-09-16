SELECT employee_name,
       salary,
       CASE
           WHEN salary >= 60000 THEN 'High'
           WHEN salary >= 50000 THEN 'Medium'
           ELSE 'Low'
       END AS salary_category
FROM employee;
SELECT employee_name,
       salary,
       CASE
           WHEN salary >= 60000 THEN 'High'
           ELSE 'Normal'
       END AS category
FROM employee
ORDER BY salary DESC;
SELECT *
FROM employee
WHERE join_date IS NULL;
SELECT employee_name,
       COALESCE(department_id, 0) AS department_id
FROM employee;
SELECT COALESCE(NULL, NULL, 100, 200);

SELECT NULLIF(10, 10);

SELECT NULLIF(10, 20);

SELECT price / NULLIF(quantity, 0) AS price_per_quantity
FROM product;
SELECT employee_name,
       salary,
       CASE
           WHEN salary >= 60000 THEN 'High'
           WHEN salary >= 55000 THEN 'Medium'
           ELSE 'Low'
       END AS salary_category
FROM employee;

SELECT employee_name,
       department_id,
       CASE
           WHEN department_id = 7 THEN 'IT'
           WHEN department_id = 4 THEN 'CIVIL'
           WHEN department_id = 6 THEN 'ELECTRICAL'
           ELSE 'Other'
       END AS department
FROM employee;

SELECT employee_name,
       department_id,
       salary
FROM employee
ORDER BY
    CASE
        WHEN department_id = 7 THEN 1
        WHEN department_id = 6 THEN 2
        WHEN department_id = 4 THEN 3
        ELSE 4
    END;

SELECT
    SUM(
        CASE
            WHEN salary >= 55000 THEN 1
            ELSE 0
        END
    ) AS high_salary_employees
FROM employee;