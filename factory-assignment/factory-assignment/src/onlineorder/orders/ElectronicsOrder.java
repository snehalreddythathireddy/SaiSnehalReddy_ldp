package onlineorder.orders;

public class ElectronicsOrder implements Order {
    @Override
    public void process() {
        System.out.println("Processing ELECTRONICS order: check serial number, pack safely, add warranty card.");
    }
}