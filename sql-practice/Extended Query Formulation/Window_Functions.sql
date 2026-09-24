SELECT employee_name,
       salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
FROM employee;

SELECT employee_name,
       salary,
       RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employee;

SELECT employee_name,
       salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employee;

SELECT employee_name,
       salary,
       SUM(salary) OVER () AS total_salary
FROM employee;

SELECT employee_name,
       department_id,
       salary,
       AVG(salary) OVER (
           PARTITION BY department_id
       ) AS department_avg_salary
FROM employee;
SELECT employee_name,
       department_id,
       salary,
       ROW_NUMBER() OVER (
           PARTITION BY department_id
           ORDER BY salary DESC
       ) AS department_rank
FROM employee;

SELECT employee_name,
       department_id,
       salary,
       RANK() OVER (
           PARTITION BY department_id
           ORDER BY salary DESC
       ) AS department_rank
FROM employee;

SELECT employee_name,
       department_id,
       salary,
       DENSE_RANK() OVER (
           PARTITION BY department_id
           ORDER BY salary DESC
       ) AS department_rank
FROM employee;
SELECT employee_name,
       salary,
       FIRST_VALUE(salary) OVER (
           ORDER BY salary
       ) AS lowest_salary
FROM employee;

SELECT employee_name,
       salary,
       LAST_VALUE(salary) OVER (
           ORDER BY salary
           ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
       ) AS highest_salary
FROM employee;

SELECT employee_name,
       department_id,
       salary,
       FIRST_VALUE(salary) OVER (
           PARTITION BY department_id
           ORDER BY salary
       ) AS lowest_department_salary
FROM employee;
SELECT employee_name,
       salary,
       SUM(salary) OVER () AS total_salary
FROM employee;

SELECT employee_name,
       department_id,
       salary,
       SUM(salary) OVER (
           PARTITION BY department_id
       ) AS department_total_salary
FROM employee;

SELECT employee_name,
       salary,
       SUM(salary) OVER (
           ORDER BY salary
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_total
FROM employee;

SELECT employee_name,
       salary,
       SUM(salary) OVER (
           ORDER BY salary
           ROWS BETWEEN 1 PRECEDING AND CURRENT ROW
       ) AS moving_total
FROM employee;