SELECT location, COUNT(*) AS department_count
FROM department
GROUP BY location;

SELECT quantity, SUM(price) AS total_price
FROM product
GROUP BY quantity;

SELECT age,
       MIN(salary) AS lowest_salary,
       MAX(salary) AS highest_salary
FROM employee
GROUP BY age;

SELECT age, AVG(salary) AS average_salary
FROM employee
GROUP BY age
HAVING AVG(salary) > 50000;