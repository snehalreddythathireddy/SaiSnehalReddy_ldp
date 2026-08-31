class BankAccount {

    private double balance;

    public void deposit(double amount) {

        if (amount > 0) {
            balance = balance + amount;
        }
    }

    public double getBalance() {

        return balance;
    }
}

public class EncapsulationExample {

    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        account.deposit(5000);

        System.out.println("Balance: " +
                account.getBalance());
    }
}