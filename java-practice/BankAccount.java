import java.util.Scanner;

public class BankAccount {
    String accountHolder;
    long accountNumber;
    int balance;

    BankAccount(String accountHolder, long accountNumber, int balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    void displayAccountDetails() {
        System.out.println(
                "Account Holder:" + accountHolder + "account Number: " + accountNumber + "balance: " + balance);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter account holder name: ");
        String accountHolder = sc.nextLine();
        System.out.println("Account Number :   ");
        int accountNumber = sc.nextInt();
        System.out.println("Balance: ");
        int balance = sc.nextInt();
        BankAccount acc = new BankAccount(accountHolder, accountNumber, balance);
        acc.displayAccountDetails();
    }
}
