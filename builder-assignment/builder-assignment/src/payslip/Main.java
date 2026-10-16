package payslip;

public class Main {
    public static void main(String[] args) {

        Payslip full = new Payslip.PayslipBuilder("E101", "Ravi Kumar", "October 2026", 50000)
                .hra(20000)
                .da(5000)
                .conveyance(1600)
                .medical(1250)
                .specialAllowance(10000)
                .pf(6000)
                .professionalTax(200)
                .incomeTax(5000)
                .build();
        System.out.println(full);

        Payslip simple = new Payslip.PayslipBuilder("E102", "Asha Rao", "October 2026", 30000)
                .pf(3600)
                .build();
        System.out.println(simple);

    }
}