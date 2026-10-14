package onlineorder.orders;


public class FoodOrder implements Order {
    @Override
    public void process() {
        System.out.println("Processing FOOD order: check restaurant, pack food, assign delivery partner.");
    }
}