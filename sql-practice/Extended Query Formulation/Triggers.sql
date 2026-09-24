USE sql_practice;

DELIMITER //

CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employee
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary cannot be negative';
    END IF;
END //

DELIMITER ;




INSERT INTO employee
(employee_id, employee_name, age, salary, join_date, department_id)
VALUES
(20, 'Trigger Test', 25, 50000, '2026-09-04', 7);

SELECT * FROM employee;



CREATE TABLE employee_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    action_type VARCHAR(20),
    action_time DATETIME
);


DELIMITER //

CREATE TRIGGER after_employee_insert
AFTER INSERT ON employee
FOR EACH ROW
BEGIN
    INSERT INTO employee_log
    (employee_id, action_type, action_time)
    VALUES
    (NEW.employee_id, 'INSERT', NOW());
END //

DELIMITER ;



INSERT INTO employee
(employee_id, employee_name, age, salary, join_date, department_id)
VALUES
(21, 'After Insert Test', 26, 45000, '2026-09-04', 7);

SELECT * FROM employee_log;



DELIMITER //

CREATE TRIGGER before_employee_update
BEFORE UPDATE ON employee
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary cannot be negative';
    END IF;
END //

DELIMITER ;



UPDATE employee
SET salary = 55000
WHERE employee_id = 21;

SELECT * FROM employee;



DELIMITER //

CREATE TRIGGER after_employee_delete
AFTER DELETE ON employee
FOR EACH ROW
BEGIN
    INSERT INTO employee_log
    (employee_id, action_type, action_time)
    VALUES
    (OLD.employee_id, 'DELETE', NOW());
END //

DELIMITER ;


DELETE FROM employee
WHERE employee_id = 21;

SELECT * FROM employee_log;



SHOW TRIGGERS;