package singleton;

import singleton.config.ConfigManager;
import singleton.modules.AccountModule;
import singleton.modules.LoanModule;

public class Main {
    public static void main(String[] args) {
        new AccountModule().showLimit();
        new LoanModule().showRate();

        ConfigManager a = ConfigManager.getInstance();
        ConfigManager b = ConfigManager.getInstance();
        System.out.println("Same object: " + (a == b));
    }
}