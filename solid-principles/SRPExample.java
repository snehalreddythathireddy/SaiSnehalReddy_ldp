class Employee {

    private String name;
    private double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}

class SalaryCalculator {

    public void calculate(Employee employee) {
        System.out.println(
                "Salary of " + employee.getName() + ": ₹" + employee.getSalary());
    }
}

class EmployeeRepository {

    public void save(Employee employee) {
        System.out.println(
                "Saving " + employee.getName() + " to database...");
    }
}

class ReportGenerator {

    public void generate(Employee employee) {
        System.out.println(
                "Generating report for " + employee.getName());
    }
}

public class SRPExample {

    public static void main(String[] args) {

        Employee employee = new Employee("Snehal", 50000);

        SalaryCalculator salaryCalculator = new SalaryCalculator();

        EmployeeRepository repository = new EmployeeRepository();

        ReportGenerator reportGenerator = new ReportGenerator();

        salaryCalculator.calculate(employee);

        repository.save(employee);

        reportGenerator.generate(employee);
    }
}