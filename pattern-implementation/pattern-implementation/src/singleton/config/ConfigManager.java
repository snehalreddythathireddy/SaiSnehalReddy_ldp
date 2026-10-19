package singleton.config;

public class ConfigManager {

    private static volatile ConfigManager instance;

    private final String bankName;
    private final double interestRate;
    private final double transactionLimit;

    private ConfigManager() {
        System.out.println("Loading config... (this prints only once)");
        this.bankName = "National Bank";
        this.interestRate = 6.5;
        this.transactionLimit = 50000;
    }

    public static ConfigManager getInstance() {
        if (instance == null) {                      // first check, no lock
            synchronized (ConfigManager.class) {
                if (instance == null) {              // second check, with lock
                    instance = new ConfigManager();
                }
            }
        }
        return instance;
    }

    public String getBankName() { return bankName; }
    public double getInterestRate() { return interestRate; }
    public double getTransactionLimit() { return transactionLimit; }
}