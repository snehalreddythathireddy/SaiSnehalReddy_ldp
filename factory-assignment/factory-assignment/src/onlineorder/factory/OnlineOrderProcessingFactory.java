package onlineorder.factory;

import onlineorder.orders.Order;

public class OnlineOrderProcessingFactory {

    public static Order createOrder(String category) {
        String name = category.substring(0, 1).toUpperCase()
                + category.substring(1).toLowerCase();
        String className = Order.class.getPackageName() + "." + name + "Order";

        try {
            return (Order) Class.forName(className)
                    .getDeclaredConstructor()
                    .newInstance();
        } catch (ClassNotFoundException e) {
            throw new IllegalArgumentException("Unknown order category: " + category);
        } catch (ReflectiveOperationException e) {
            throw new RuntimeException("Could not create order for: " + category, e);
        }
    }
}