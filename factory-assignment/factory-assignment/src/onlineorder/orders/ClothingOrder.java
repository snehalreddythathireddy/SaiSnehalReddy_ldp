package onlineorder.orders;

public class ClothingOrder implements Order {
    @Override
    public void process() {
        System.out.println("Processing CLOTHING order: check size, pack item, ship with return option.");
    }
}