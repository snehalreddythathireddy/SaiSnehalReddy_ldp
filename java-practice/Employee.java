
public class Employee {
    String name;
    int employeeId;
    int salary;

    Employee(String name, int employeeId, int salary) {
        this.name = name;
        this.employeeId = employeeId;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("name: " + name + " employeeid: " + employeeId + "salary: " + salary);
    }

    public static void main(String[] args) {
        Employee emp = new Employee("snehal", 303, 30500);
        emp.displayDetails();

    }
}
