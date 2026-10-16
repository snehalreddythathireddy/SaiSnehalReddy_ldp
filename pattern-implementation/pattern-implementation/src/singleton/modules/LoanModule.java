package singleton.modules;

import singleton.config.ConfigManager;

public class LoanModule {
    public void showRate() {
        ConfigManager config = ConfigManager.getInstance();
        System.out.println("Loan module: " + config.getBankName()
                + " interest rate is " + config.getInterestRate() + "%");
    }
}