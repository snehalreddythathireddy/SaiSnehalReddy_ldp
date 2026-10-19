package singleton.modules;

import singleton.config.ConfigManager;

public class AccountModule {
    public void showLimit() {
        ConfigManager config = ConfigManager.getInstance();
        System.out.println("Account module: " + config.getBankName()
                + " limit is " + config.getTransactionLimit());
    }
}