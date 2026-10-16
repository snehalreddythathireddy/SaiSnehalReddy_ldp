package builder;

import builder.order.Order;

public class Main {
    public static void main(String[] args) {

        Order simple = new Order.OrderBuilder("C101").build();

        Order full = new Order.OrderBuilder("C102")
                .coupon("DIWALI20")
                .address("Hyderabad")
                .giftWrap(true)
                .build();

        System.out.println(simple);
        System.out.println(full);

        // validation: this throws an exception
        // Order bad = new Order.OrderBuilder("").build();
    }
}