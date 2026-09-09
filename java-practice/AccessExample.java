class Employee {

    private int salary = 50000;

    public void setSalary(int salary) {

        this.salary = salary;
    }

    public int getSalary() {

        return salary;
    }
}

public class AccessExample {

    public static void main(String[] args) {

        Employee employee = new Employee();

        /*
         * Cannot directly access private variable:
         *
         * employee.salary = 60000;
         */

        employee.setSalary(60000);

        System.out.println(employee.getSalary());
    }
}