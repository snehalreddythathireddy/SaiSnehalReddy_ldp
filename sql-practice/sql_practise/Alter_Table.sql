ALTER TABLE employee
ADD email VARCHAR(100);

SELECT *
FROM employee;

ALTER TABLE employee
ADD joining_date DATE;

SELECT *
FROM employee;

ALTER TABLE employee
RENAME COLUMN joining_date TO join_date;

SELECT *
FROM employee;

ALTER TABLE employee
DROP COLUMN email;

SELECT *
FROM employee;