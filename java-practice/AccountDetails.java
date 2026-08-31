public class AccountDetails {
    private String accountHolder;
    private double balance;

    AccountDetails(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    void displayDetails() {
        System.out.println("accountHolder: " + accountHolder);
        System.out.println("balance: " + balance);
    }

    public static void main(String[] args) {
        AccountDetails acc = new AccountDetails("Drawin", 5000);
        System.out.println(acc.getAccountHolder());
        System.out.println(acc.getBalance());

        acc.setBalance(60000);

        acc.displayDetails();

    }

}
